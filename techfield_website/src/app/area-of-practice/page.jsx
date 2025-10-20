"use client";
import { useState } from "react";
import {
  Scale,
  Brain,
  FileCode,
  Building2,
  TrendingUp,
  Shield,
  Lock,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const practiceAreas = [
  {
    id: "blockchain",
    title: "Blockchain & Digital Assets",
    icon: Scale,
    description:
      "Navigate the complexities of cryptocurrency, tokenization, and decentralized finance with expert legal guidance.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    accentColor: "cyan",
    features: ["Token Compliance", "Crypto Regulations", "DeFi Structuring"],
  },
  {
    id: "ai-advisory",
    title: "AI & Emerging Tech Advisory",
    icon: Brain,
    description:
      "Stay ahead of AI regulations and ensure responsible deployment of cutting-edge technologies.",
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    accentColor: "purple",
    features: ["AI Compliance", "ML Governance", "Tech Due Diligence"],
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts & DAO",
    icon: FileCode,
    description:
      "Legal frameworks for autonomous organizations and self-executing agreements on blockchain.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accentColor: "emerald",
    features: ["DAO Formation", "Contract Audits", "Governance Design"],
  },
  {
    id: "business-formation",
    title: "Business Formation & Corporate",
    icon: Building2,
    description:
      "Strategic structuring for startups and established enterprises in the digital economy.",
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    accentColor: "orange",
    features: ["Entity Formation", "Corporate Governance", "M&A Advisory"],
  },
  {
    id: "venture-capital",
    title: "Venture Capital & Investment",
    icon: TrendingUp,
    description:
      "From seed rounds to exits, comprehensive legal support for fundraising and investments.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    accentColor: "blue",
    features: ["Fundraising", "Term Sheets", "Cap Table Management"],
  },
  {
    id: "intellectual-property",
    title: "IP & Technology Protection",
    icon: Shield,
    description:
      "Safeguard your innovations, patents, trademarks, and proprietary technology assets.",
    gradient: "from-red-500 via-rose-500 to-pink-600",
    accentColor: "red",
    features: ["Patent Strategy", "Trademark Protection", "Trade Secrets"],
  },
  {
    id: "data-protection",
    title: "Data Protection & Privacy",
    icon: Lock,
    description:
      "NDPA 2023 compliance and comprehensive data governance for the digital age.",
    gradient: "from-slate-500 via-gray-500 to-zinc-600",
    accentColor: "slate",
    features: ["NDPA Compliance", "Privacy Audits", "Data Governance"],
  },
  {
    id: "cross-border",
    title: "Cross-Border Advisory",
    icon: Globe,
    description:
      "Navigate international regulations and expand globally with confidence and compliance.",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-600",
    accentColor: "violet",
    features: [
      "Global Expansion",
      "Multi-Jurisdictional",
      "International Trade",
    ],
  },
];

export default function PracticeAreas() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-white/90">
            Our Expertise
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Practice Areas
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Comprehensive legal solutions at the intersection of law, technology,
          and innovation
        </p>
      </div>

      {/* Practice Areas Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 text-left"
              style={{
                animationDelay: `${index * 100}ms`,
              }}>
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Animated Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${area.gradient} blur-xl -z-10`}
              />

              <div className="relative p-8">
                {/* Icon Container */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 mb-6 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
                  {area.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {area.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-white/50">
                      <div
                        className={`w-1 h-1 rounded-full bg-gradient-to-r ${area.gradient}`}
                      />
                      <span className="group-hover:text-white/70 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10`}
              />
            </button>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Not sure where to start?
            </h3>
            <p className="text-white/60">
              Schedule a consultation and we'll guide you to the right solution
            </p>
          </div>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-900 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 whitespace-nowrap">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
