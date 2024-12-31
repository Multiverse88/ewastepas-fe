import Hero from "../components/Hero";
import CardSlider from "../components/Category/CardSlider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center pt-10">
        <div className="text-center">
          <h1 className="text-primary font-bold text-5xl pb-3">Kategori</h1>
          <p className="">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <CardSlider />
    </>
  );
}
