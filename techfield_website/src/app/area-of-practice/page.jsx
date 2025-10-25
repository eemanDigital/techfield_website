"use client";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Scale,
  FileText,
  Shield,
  Users,
  Briefcase,
  Building,
  Gavel,
  BookOpen,
} from "lucide-react";
import ElegantBackground from "../component/ElegantBackground";
import HeaderText from "../component/HeaderText";

const practiceAreas = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    icon: Building,
    description: "Strategic corporate governance and business transactions",
    shortDescription: "Business formation, M&A, compliance",
  },
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    icon: Gavel,
    description: "Expert representation in commercial disputes",
    shortDescription: "Trial advocacy, arbitration, mediation",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Shield,
    description: "Protection and enforcement of intellectual assets",
    shortDescription: "Patents, trademarks, copyrights",
  },
  {
    id: "employment-law",
    title: "Employment & Labor",
    icon: Users,
    description: "Workplace compliance and employment relationships",
    shortDescription: "HR compliance, employment contracts",
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    icon: Briefcase,
    description: "Legal support for property transactions and development",
    shortDescription: "Property transactions, leasing",
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance",
    icon: FileText,
    description: "Navigate complex regulatory requirements",
    shortDescription: "Risk assessment, compliance",
  },
  {
    id: "tax-law",
    title: "Tax Law",
    icon: Scale,
    description: "Strategic tax planning and dispute resolution",
    shortDescription: "Tax planning, IRS representation",
  },
  {
    id: "legal-tech",
    title: "Legal Technology",
    icon: BookOpen,
    description: "Innovative technology solutions for legal practice",
    shortDescription: "Contract automation, legal analytics",
  },
];

function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(153,1,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(153,1,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-[#990100]/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-20 left-8 w-20 h-20 bg-[#990100]/20 rounded-xl -rotate-6"></div>
    </div>
  );
}

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-white relative">
      <GeometricBackground />

      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#990100]/5 rounded-full border border-[#990100]/10">
            <Sparkles className="w-4 h-4 text-[#990100]" />
            <span className="text-sm font-medium text-[#990100]">
              Our Expertise
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <HeaderText textOne="Areas of" textTwo="Practice" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specialized legal services tailored to meet your business needs and
            objectives
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                onClick={() =>
                  (window.location.href = `/area-of-practice/${area.id}`)
                }
                className="group cursor-pointer bg-white rounded-2xl border border-gray-200 hover:border-[#990100]/30 transition-all duration-300 hover:shadow-lg p-8"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}>
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#990100]/10 rounded-xl flex items-center justify-center group-hover:bg-[#990100]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#990100]" />
                  </div>
                  <span className="text-2xl font-bold text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#990100] transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {area.shortDescription}
                </p>

                {/* Full Description (hidden on hover) */}
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {area.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#990100] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Specific Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Contact us for a detailed consultation about your specific legal
              needs
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-3 bg-[#990100] text-white rounded-lg font-semibold hover:bg-[#990100]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
