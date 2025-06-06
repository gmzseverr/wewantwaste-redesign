import { Package, CalendarDays, X, Check } from "lucide-react";
import { images } from "../images";

export default function ProductCard({ product, onSelect, isSelected }) {
  const imgSrc = images[product.id];

  const totalPrice = (
    product.price_before_vat *
    (1 + product.vat / 100)
  ).toFixed(2);

  return (
    <div
      onClick={() => onSelect(product)}
      className={` dark:bg-[#1a1a1a]  bg-white rounded-lg hover:translate-y-1 shadow transition cursor-pointer overflow-hidden
      ${
        isSelected
          ? "shadow-[#ff8a00] shadow-lg shadow-[#ff8a00]-500"
          : "border shadow-neutral-600  border-transparent"
      }`}
    >
      <img src={imgSrc} alt="..." className="w-full lg:h-48 object-fit" />

      <div className="flex flex-col justify-between p-4 pt-0">
        <h3 className="text-lg pt-2 text-start font-extrabold text-neutral-700 dark:text-white">
          {product.size} Yard Skip
        </h3>
        <p className="text-xs text-start dark:text-neutral-300 text-neutral-500">
          Postcode: {product.postcode}
        </p>

        <div className="mt-3 space-y-1.5 text-sm dark:text-neutral-200 text-neutral-500">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-[#ff8a00] " />
            <span className="text-xs font-medium ">
              Size: {product.size} Yards
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-[#ff8a00] " />
            <span className="text-xs font-medium">
              Hire Period: {product.hire_period_days} Days
            </span>
          </div>

          <div className="pt-2 space-y-0.5 ">
            <p className="text-xs text-start dark:text-neutral-100 text-neutral-500 font-semibold">
              Restrictions & Info:
            </p>
            <div className="flex  items-center gap-0.5">
              {product.allowed_on_road ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <X className="w-4 h-4 text-red-500" />
              )}
              <span className="text-xs dark:text-neutral-200 text-neutral-500">
                Allowed on road
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              {product.allows_heavy_waste ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <X className="w-4 h-4 text-red-500" />
              )}
              <span className="text-xs dark:text-neutral-200 text-neutral-500">
                Allows heavy waste
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-t-neutral-400 mt-4 mb-2 pt-2">
          <div className="flex items-center justify-center text-2xl font-extrabold dark:text-white text-neutral-700">
            £ {totalPrice}
            <span className="text-xs font-light  text-neutral-400 ml-1">
              (inc. VAT)
            </span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Kartın da onClick'i olduğu için tıklama çakışmasını engeller
            onSelect(product);
          }}
          className={`w-auto font-semibold text-shadow-lg py-2 px-4 rounded-lg cursor-pointer transition duration-200 ease-in-out transform flex items-center justify-center gap-1
    ${
      isSelected
        ? "bg-[#ff7b00] text-white  shadow-lg"
        : "bg-[#ff8a00] text-white hover:bg-[#ffc76d] hover:shadow-md"
    }`}
        >
          {isSelected && <Check className="w-4 h-4" />}
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
}
