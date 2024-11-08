import React, { useState, useEffect, useCallback } from "react";
import CardSlider from "../components/Category/CardSlider";
import CardProduct from "../components/Category/CardProduct";
import SearchBar from "../components/SearchBar";
import { fetchAllWaste } from "../services/wasteService";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllWaste();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    const filtered = products.filter((product) =>
      product.waste_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products]);

  const handleCategorySelect = (category) => {
    console.log("Selected Category:", category);
    const filtered = products.filter(
      (product) => product.waste_type_id === category.waste_type_id
    );
    console.log("Filtered Products:", filtered);
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="pt-20">
        <CardSlider onCategorySelect={handleCategorySelect} />
        <div className="flex items-center justify-center pt-10">
          <div className="text-center">
            <h1 className="text-primary font-bold text-5xl pb-3">
              Pick & Pack
            </h1>
            <p className="">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <CardProduct products={filteredProducts} />
      </div>
    </>
  );
}