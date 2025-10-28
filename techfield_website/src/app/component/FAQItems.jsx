import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left hover:bg-gray-50/50 transition-colors duration-200 rounded-lg px-4">
        <div className="flex items-start gap-4">
          <span className="text-sm font-semibold text-[#990100] mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 pr-4">
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#990100]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="pb-6 px-4 ml-9">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
