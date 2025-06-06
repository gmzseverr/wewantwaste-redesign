import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import SelectionSummary from "./SelectionSummary";
import Header from "./Header";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (product) => {
    if (selectedProduct?.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  };

  return (
    <div className="min-h-screen font-roboto bg-white dark:bg-[#1a1a1a] text-black dark:text-[#f5f5f5]">
      <Header />
      <ProductList
        selectedProduct={selectedProduct || []}
        onSelect={handleSelect}
      />

      <div className="">
        <SelectionSummary selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}

export default App;
