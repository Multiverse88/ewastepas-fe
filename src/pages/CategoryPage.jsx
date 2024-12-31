import CardSlider from "../components/Category/CardSlider";
import CardProduct from "../components/Category/CardProduct";
import SearchBar from "../components/SearchBar";

export default function CategoryPage() {
  return (
    <>
      <div className="pt-20">
        <CardSlider />
        <div className="flex items-center justify-center pt-10">
          <div className="text-center">
            <h1 className="text-primary font-bold text-5xl pb-3">
              Pick & Pack
            </h1>
            <p className="">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <SearchBar />
        <CardProduct />
      </div>
    </>
  );
}
