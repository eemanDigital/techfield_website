"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, Clock } from "lucide-react";

const faqData = [
  {
    question: "What types of legal services do you offer?",
    answer:
      "We specialize in corporate law, litigation, intellectual property, employment law, real estate, regulatory compliance, tax law, and legal technology solutions. Our practice areas are designed to meet the comprehensive needs of modern businesses.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by calling our office, filling out the contact form on our website, or emailing us directly. We offer initial consultations to discuss your legal needs and determine how we can assist you.",
  },
  {
    question: "What are your billing rates and fee structure?",
    answer:
      "We offer various fee arrangements including hourly rates, flat fees for specific services, and retainer agreements. During our initial consultation, we'll discuss your matter and provide transparent information about our fees and billing practices.",
  },
  {
    question: "How long does a typical legal matter take to resolve?",
    answer:
      "The timeline varies depending on the complexity of the matter, court schedules, and other factors. Simple matters may take weeks, while complex litigation can take months or years. We'll provide a realistic timeline during our initial assessment.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer both in-person and virtual consultations via secure video conferencing platforms. This allows us to serve clients regardless of location while maintaining the same level of professionalism and confidentiality.",
  },
  {
    question: "What information should I bring to my first meeting?",
    answer:
      "Please bring any relevant documents related to your matter, such as contracts, correspondence, court documents, or business records. Also prepare a summary of your situation and any questions you may have for our attorneys.",
  },
  {
    question: "How do you ensure client confidentiality?",
    answer:
      "We maintain strict client confidentiality through secure communication channels, encrypted document storage, and adherence to attorney-client privilege standards. All our team members are trained in data protection and confidentiality protocols.",
  },
  {
    question: "What makes your firm different from others?",
    answer:
      "We combine traditional legal expertise with innovative technology solutions, providing efficient and cost-effective services. Our focus on client communication, strategic approach, and deep industry knowledge sets us apart in delivering exceptional legal counsel.",
  },
];

function FAQItem({ faq, isOpen, onClick, index }) {
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

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#990100]/5 rounded-full border border-[#990100]/10 mb-6">
            <span className="text-sm font-medium text-[#990100]">
              Frequently Asked Questions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common <span className="text-[#990100]">Questions</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our legal services,
            processes, and how we can help you achieve your objectives.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openItems.has(index)}
              onClick={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Our legal team is here to provide personalized answers and
              guidance for your specific situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-[#990100]" />
                <span className="font-semibold">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-[#990100]" />
                <span className="font-semibold">info@lawfirm.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-[#990100]" />
                <span className="font-semibold">Mon-Fri 9AM-6PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="px-8 py-3 bg-[#990100] text-white rounded-lg font-semibold hover:bg-[#990100]/90 transition-all duration-300 hover:scale-105">
                Contact Us Today
              </button>
              <button
                onClick={() => (window.location.href = "/area-of-practice")}
                className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:border-[#990100] hover:text-[#990100] transition-all duration-300">
                View Practice Areas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
