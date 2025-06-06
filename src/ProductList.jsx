import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function ProductList({ selectedProduct, onSelect }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="  lg:p-52 p-18  lg:pt-8 pt-12 pb-32 ">
      <div className="flex flex-col justify-center text-center  items-center pb-8 gap-0">
        <h2 className="text-2xl  font-bold dark:text-white text-neutral-700 ">
          Choose Your Skip Size
        </h2>
        <p className="text-xs text-neutral-500">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelect}
            isSelected={selectedProduct?.id === product.id}
          />
        ))}
      </div>
    </div>
  );
}
