"use client";
import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { email, phoneNumber } from "@/data/info";
import FAQItem from "../component/FAQItems";
import { faqData } from "@/data/faqData";

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
                <span className="font-semibold">{phoneNumber}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-[#990100]" />
                <span className="font-semibold">{email}</span>
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
