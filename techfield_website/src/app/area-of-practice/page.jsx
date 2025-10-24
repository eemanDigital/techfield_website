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

const practiceAreas = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    icon: Building,
    description:
      "Comprehensive corporate legal services including governance, compliance, and strategic transactions.",
    features: ["M&A Advisory", "Contract Drafting", "Corporate Governance"],
  },
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    icon: Gavel,
    description:
      "Expert representation in complex commercial litigation and alternative dispute resolution.",
    features: ["Trial Advocacy", "Arbitration", "Mediation Services"],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Shield,
    description:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    features: ["Patent Filing", "Trademark Registration", "IP Strategy"],
  },
  {
    id: "employment-law",
    title: "Employment & Labor",
    icon: Users,
    description:
      "Guidance on employment relationships, workplace policies, and labor compliance.",
    features: ["HR Compliance", "Employment Contracts", "Workplace Disputes"],
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    icon: Briefcase,
    description:
      "Legal support for property transactions, leasing, and real estate development.",
    features: ["Property Transactions", "Lease Agreements", "Zoning Issues"],
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance",
    icon: FileText,
    description:
      "Navigate complex regulatory environments with expert compliance and risk management.",
    features: ["Risk Assessment", "Policy Development", "Regulatory Filings"],
  },
  {
    id: "tax-law",
    title: "Tax Law",
    icon: Scale,
    description:
      "Strategic tax planning, compliance, and dispute resolution services.",
    features: ["Tax Planning", "IRS Representation", "Tax Controversy"],
  },
  {
    id: "legal-tech",
    title: "Legal Technology",
    icon: BookOpen,
    description:
      "Innovative legal solutions leveraging technology for efficient service delivery.",
    features: [
      "Contract Automation",
      "Legal Analytics",
      "Digital Transformation",
    ],
  },
];

// Geometric Pattern Background Component
function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute -top-20 -right-20 w-96 h-96">
        {[...Array(9)].map((_, i) => (
          <div
            key={`tr-${i}`}
            className="absolute border border-white"
            style={{
              width: `${(i + 1) * 90}px`,
              height: `${(i + 1) * 90}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              animation: `spin ${20 + i * 5}s linear infinite`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(45deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function PracticeAreas() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <GeometricPattern />

      {/* Ambient light effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white/90">
            Our Expertise
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Practice Areas
        </h2>
        <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
          Comprehensive legal solutions at the intersection of law, technology,
          and innovation
        </p>
      </div>

      {/* Practice Areas List */}
      <div className="max-w-7xl mx-auto space-y-1 relative z-10">
        {practiceAreas.map((area, index) => {
          const Icon = area.icon;
          const isHovered = hoveredId === area.id;

          return (
            <button
              key={area.id}
              onClick={() =>
                (window.location.href = `/practice-areas/${area.id}`)
              }
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative w-full text-left transition-all duration-300"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
              }}>
              {/* Hover background effect */}
              <div
                className={`absolute inset-0 bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}></div>

              {/* Left accent line */}
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-white transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}></div>

              <div className="relative px-8 py-8 flex items-start gap-6 border-b border-white/5 hover:border-white/10 transition-colors duration-300">
                {/* Number */}
                <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                  <span
                    className={`text-5xl font-bold transition-all duration-300 ${
                      isHovered ? "text-white" : "text-white/20"
                    }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-16 h-16 flex-shrink-0 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ${
                    isHovered ? "bg-white/10 border-white/20 scale-110" : ""
                  }`}>
                  <Icon
                    className={`w-7 h-7 transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-white/60"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-white/90"
                    }`}>
                    {area.title}
                  </h3>

                  <p
                    className={`text-base mb-4 transition-colors duration-300 ${
                      isHovered ? "text-white/80" : "text-white/50"
                    }`}>
                    {area.description}
                  </p>

                  {/* Features as inline tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${
                          isHovered
                            ? "bg-white/10 border-white/30 text-white/90"
                            : "bg-white/5 border-white/10 text-white/50"
                        }`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow CTA */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 flex-shrink-0">
                  <ArrowRight
                    className={`w-6 h-6 transition-all duration-300 ${
                      isHovered ? "text-white translate-x-2" : "text-white/30"
                    }`}
                  />
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
              `}</style>
            </button>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-20 relative z-10">
        <GeometricPattern />

        <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-12">
          {/* Decorative corner boxes */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">
                Not sure where to start?
              </h3>
              <p className="text-lg text-white/70">
                Schedule a consultation and we'll guide you to the right
                solution
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="group px-10 py-5 bg-white text-[#990100] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap flex items-center gap-3">
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
