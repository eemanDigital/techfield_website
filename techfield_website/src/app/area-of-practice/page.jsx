"use client";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Bitcoin,
  Brain,
  FileCode,
  Building,
  TrendingUp,
  Shield,
  Database,
  Globe,
  Gavel,
  Zap,
  Target,
  Rocket,
} from "lucide-react";

const practiceAreas = [
  {
    id: "blockchain-digital-assets",
    title: "Blockchain & Digital Assets",
    icon: Bitcoin,
    description:
      "Comprehensive legal framework for blockchain technology, cryptocurrencies, NFTs, and digital asset management",
    shortDescription: "Crypto regulation, NFT legal framework, digital assets",
    features: ["Token Offerings", "DeFi Compliance", "NFT Legal Structure"],
    gradient: "from-purple-500 to-blue-500",
    stats: "50+ blockchain projects advised",
  },
  {
    id: "ai-emerging-tech",
    title: "AI & Emerging Tech Advisory",
    icon: Brain,
    description:
      "Strategic legal guidance for artificial intelligence, machine learning, and cutting-edge technology implementation",
    shortDescription: "AI compliance, tech innovation, future law",
    features: [
      "AI Governance",
      "Algorithm Accountability",
      "Tech Due Diligence",
    ],
    gradient: "from-cyan-500 to-green-500",
    stats: "25+ AI startups supported",
  },
  {
    id: "smart-contracts-dao",
    title: "Smart Contracts & DAO Legal",
    icon: FileCode,
    description:
      "Legal infrastructure for decentralized autonomous organizations and enforceable smart contract frameworks",
    shortDescription: "DAO formation, contract automation, Web3 legal",
    features: ["DAO Governance", "Smart Contract Audit", "Decentralized Law"],
    gradient: "from-orange-500 to-red-500",
    stats: "30+ DAOs legally structured",
  },
  {
    id: "business-formation",
    title: "Business Formation & Corporate",
    icon: Building,
    description:
      "Strategic corporate structuring for technology companies and innovative business models",
    shortDescription: "Startup formation, corporate governance, scaling",
    features: ["Startup Legal", "Corporate Governance", "Scale-up Strategy"],
    gradient: "from-blue-500 to-indigo-500",
    stats: "100+ businesses launched",
  },
  {
    id: "venture-capital",
    title: "Venture Capital & Investment",
    icon: TrendingUp,
    description:
      "Legal support for fundraising, investment rounds, and venture capital transactions in tech ecosystems",
    shortDescription: "VC funding, investment rounds, cap table",
    features: ["Series Funding", "Term Sheets", "Investor Relations"],
    gradient: "from-emerald-500 to-teal-500",
    stats: "$500M+ capital raised",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property & Tech",
    icon: Shield,
    description:
      "Protection and commercialization of intellectual property in digital and technology sectors",
    shortDescription: "IP strategy, patent protection, brand security",
    features: ["Patent Strategy", "Brand Protection", "IP Commercialization"],
    gradient: "from-amber-500 to-orange-500",
    stats: "200+ IP assets protected",
  },
  {
    id: "data-protection",
    title: "Data Protection & Privacy",
    icon: Database,
    description:
      "Compliance with NDPA 2023 and global data protection regulations for digital businesses",
    shortDescription: "NDPA 2023, GDPR, data compliance",
    features: ["NDPA Compliance", "Data Governance", "Privacy by Design"],
    gradient: "from-sky-500 to-blue-500",
    stats: "Full NDPA 2023 compliance",
  },
  {
    id: "cross-border",
    title: "Cross-Border Advisory",
    icon: Globe,
    description:
      "International expansion support and global regulatory compliance for technology companies",
    shortDescription: "Global expansion, international law, compliance",
    features: ["Global Compliance", "Market Entry", "International Tax"],
    gradient: "from-violet-500 to-purple-500",
    stats: "15+ countries supported",
  },
  {
    id: "litigation-tech",
    title: "Tech Litigation & Disputes",
    icon: Gavel,
    description:
      "Specialized dispute resolution for technology conflicts, digital rights, and online commerce",
    shortDescription: "Tech disputes, digital litigation, online rights",
    features: ["Digital Disputes", "Online Commerce", "Tech Arbitration"],
    gradient: "from-rose-500 to-pink-500",
    stats: "95% success rate",
  },
];

function ModernBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}></div>

      {/* Floating tech elements */}
      <div className="absolute top-1/3 left-1/4">
        <div
          className="w-2 h-2 bg-[#990100]/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4">
        <div
          className="w-1 h-1 bg-[#990100]/30 rounded-full animate-float"
          style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(153,1,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(153,1,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </div>
  );
}

function PracticeAreaCard({ area, index }) {
  const Icon = area.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = `/area-of-practice/${area.id}`)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}>
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl border border-gray-200/80 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-200 group-hover:scale-[1.02] h-full">
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

        {/* Animated Border */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
          style={{
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}></div>

        <div className="relative p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`relative p-3 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-bold text-gray-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Hover Arrow */}
            <ArrowRight
              className={`w-5 h-5 text-gray-400 transition-all duration-500 group-hover:text-[#990100] group-hover:translate-x-1 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
              {area.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
              {area.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {area.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 transition-all duration-300 group-hover:bg-white group-hover:border-gray-300 group-hover:shadow-sm">
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Target className="w-4 h-4" />
              <span className="font-medium">{area.stats}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-500">
            <span className="text-sm font-semibold text-[#990100] group-hover:gap-2 transition-all duration-300 flex items-center gap-1">
              Explore Expertise
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div
              className={`w-2 h-2 bg-gradient-to-r ${
                area.gradient
              } rounded-full transition-all duration-500 ${
                isHovered ? "scale-150" : "scale-100"
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ModernBackground />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-sm">
              <div className="w-2 h-2 bg-[#990100] rounded-full animate-pulse"></div>
              <Rocket className="w-5 h-5 text-[#990100]" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">
                MODERN LEGAL EXPERTISE
              </span>
              <div className="w-2 h-2 bg-[#990100] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Future
              <span className="font-serif italic text-[#990100]">
                Forward
              </span>{" "}
              Legal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Cutting-edge legal solutions for technology innovators, blockchain
              pioneers, and digital businesses shaping tomorrow's economy
            </p>
          </div>

          {/* Innovation Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Zap, value: "9", label: "Specialized Practice Areas" },
              { icon: Cpu, value: "50+", label: "Tech Startups Supported" },
              {
                icon: Bitcoin,
                value: "$500M+",
                label: "Capital Facilitated",
              },
              { icon: Shield, value: "100%", label: "Compliance Success" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200/40 group-hover:border-[#990100]/20 transition-all duration-500">
                  <stat.icon className="w-7 h-7 text-[#990100]" />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard key={area.id} area={area} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl p-16 border border-gray-200/60 shadow-sm">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Ready to{" "}
                <span className="font-serif italic text-[#990100]">
                  Innovate
                </span>{" "}
                with Legal Excellence?
              </h2>
              <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Partner with legal experts who understand technology and speak
                the language of innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="px-12 py-4 bg-[#990100] text-white rounded-2xl font-semibold hover:bg-[#990100]/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#990100]/20 flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => (window.location.href = "/about")}
                  className="px-12 py-4 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold hover:border-[#990100] hover:text-[#990100] transition-all duration-500 hover:scale-105">
                  Our Innovation Approach
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
