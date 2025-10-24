import {
  Scale,
  Brain,
  FileCode,
  Building2,
  TrendingUp,
  Shield,
  Lock,
  Globe,
} from "lucide-react";

export const practiceAreas = [
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
