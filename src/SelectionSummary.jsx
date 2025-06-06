import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SelectionSummary({
  selectedProduct,
  onBack,
  onContinue,
}) {
  const totalSum = selectedProduct
    ? selectedProduct.price_before_vat * (1 + selectedProduct.vat / 100)
    : 0;

  return (
    <div className="dark:bg-[#1a1a1a] fixed bottom-0 left-0 right-0 z-50 p-4  flex justify-between items-center  shadow w-full bg-white ">
      <div className="flex flex-col lg:pl-8 pl-3 items-start">
        {!selectedProduct ? (
          <p className="text-xs font-semibold text-neutral-400 ">
            Please select a product to continue..
          </p>
        ) : (
          <>
            <h3 className="font-extrabold text-xl dark:text-white text-neutral-700">
              {selectedProduct.size} Yard Skip
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500 font-medium">
                Hire for {selectedProduct.hire_period_days} Days
              </span>
            </div>
            <span className="text-2xl font-extrabold  text-[#ff8a00]">
              £ {totalSum.toFixed(2)}
              <span className="text-xs font-light  text-neutral-400 ">
                (inc. VAT)
              </span>
            </span>
          </>
        )}
      </div>

      <div className="flex text-shadow-lg lg:pr-8 pr-3 gap-5">
        <button
          onClick={onBack}
          className="w-auto font-semibold  rounded-lg cursor-pointer  gap-2 px-4 h-10 flex items-center text-sm bg-[#ff8a00] text-white transition duration-200 ease-in-out transform hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 font-extrabold" />
          Back
        </button>
        <button
          onClick={selectedProduct ? onContinue : undefined}
          disabled={!selectedProduct}
          className={`w-auto font-semibold rounded-lg gap-2 px-4 h-10 flex items-center text-sm transition duration-200 ease-in-out transform
    ${
      selectedProduct
        ? "bg-[#ff8a00] text-white hover:scale-105 cursor-pointer"
        : "bg-[#ffe0b3] text-white cursor-not-allowed"
    }`}
        >
          Continue
          <ArrowRight className="w-4 h-4 font-extrabold" />
        </button>
      </div>
    </div>
  );
}
