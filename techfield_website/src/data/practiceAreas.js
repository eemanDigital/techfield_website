import {
  Bitcoin,
  Brain,
  FileCode,
  Building,
  TrendingUp,
  Shield,
  Database,
  Globe,
  Gavel,
} from "lucide-react";

export const practiceAreas = [
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

    // Detailed information for practice area detail page
    longDescription:
      "Our Blockchain & Digital Assets practice provides cutting-edge legal solutions for the rapidly evolving digital economy. We help clients navigate complex regulatory landscapes while leveraging blockchain technology for business innovation.",
    services: [
      "Cryptocurrency Regulatory Compliance",
      "NFT Legal Framework Development",
      "Token Offering Advisory",
      "DeFi Protocol Legal Structure",
      "Digital Asset Custody Solutions",
      "Blockchain Intellectual Property",
    ],
    benefits: [
      "Regulatory compliance assurance",
      "Innovation-friendly legal frameworks",
      "Cross-border digital asset strategy",
      "Risk mitigation in emerging tech",
    ],
    caseStudy:
      "Successfully structured a $25M token offering for a fintech startup while ensuring full regulatory compliance across multiple jurisdictions.",
    timeline: "2-6 weeks for regulatory compliance",
    team: "4 blockchain specialists",
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

    longDescription:
      "Navigate the complex legal landscape of artificial intelligence and emerging technologies with our specialized advisory services. We help clients implement AI responsibly while maximizing innovation potential.",
    services: [
      "AI Governance Framework Development",
      "Algorithmic Accountability Compliance",
      "Machine Learning Contract Drafting",
      "Tech Due Diligence for M&A",
      "AI Ethics and Compliance",
      "Emerging Tech Regulatory Strategy",
    ],
    benefits: [
      "Future-proof legal strategies",
      "Ethical AI implementation",
      "Regulatory risk mitigation",
      "Competitive advantage in tech adoption",
    ],
    caseStudy:
      "Developed comprehensive AI governance framework for healthcare tech company handling sensitive patient data.",
    timeline: "4-8 weeks for framework development",
    team: "3 AI legal specialists",
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

    longDescription:
      "Pioneering legal solutions for decentralized organizations and automated contract systems. We bridge the gap between traditional legal frameworks and blockchain-based governance models.",
    services: [
      "DAO Formation and Governance",
      "Smart Contract Legal Review",
      "Decentralized Governance Design",
      "Token-based Voting Systems",
      "Legal Wrapper Implementation",
      "Dispute Resolution Mechanisms",
    ],
    benefits: [
      "Legal recognition for DAOs",
      "Enforceable smart contracts",
      "Transparent governance structures",
      "Regulatory compliance in decentralization",
    ],
    caseStudy:
      "Structured a global DAO with 10,000+ members while ensuring compliance with international regulations.",
    timeline: "3-5 weeks for DAO formation",
    team: "3 Web3 legal experts",
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

    longDescription:
      "Comprehensive corporate legal services designed to support your business growth from inception to global expansion. We specialize in technology-focused corporate structures.",
    services: [
      "Company Incorporation & Registration",
      "Corporate Governance Framework",
      "Shareholder Agreements",
      "Board Composition Advisory",
      "Corporate Compliance Management",
      "Scale-up Legal Infrastructure",
    ],
    benefits: [
      "Optimal corporate structure",
      "Investor-ready documentation",
      "Scalable legal frameworks",
      "Regulatory compliance assurance",
    ],
    caseStudy:
      "Guided a tech startup from formation to Series B funding, structuring for international expansion.",
    timeline: "1-3 weeks for standard incorporation",
    team: "5 corporate specialists",
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

    longDescription:
      "Expert legal counsel for venture capital transactions and investment rounds. We help startups and investors navigate complex funding landscapes with strategic legal support.",
    services: [
      "Term Sheet Negotiation",
      "Series Funding Documentation",
      "Due Diligence Management",
      "Investor Rights Protection",
      "ESOP Design and Implementation",
      "Exit Strategy Planning",
    ],
    benefits: [
      "Favorable investment terms",
      "Investor confidence building",
      "Efficient deal execution",
      "Long-term investor alignment",
    ],
    caseStudy:
      "Facilitated $15M Series A round for AI startup with complex international investor structure.",
    timeline: "4-8 weeks per funding round",
    team: "4 investment law specialists",
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

    longDescription:
      "Comprehensive intellectual property protection tailored for technology companies and digital innovators. We secure your most valuable assets in the competitive tech landscape.",
    services: [
      "Patent Filing and Prosecution",
      "Trademark Registration Strategy",
      "Copyright Protection",
      "Trade Secret Safeguarding",
      "IP Portfolio Management",
      "Technology Licensing Agreements",
    ],
    benefits: [
      "Comprehensive IP protection",
      "Competitive market advantage",
      "Revenue through IP commercialization",
      "Global IP strategy alignment",
    ],
    caseStudy:
      "Secured 45+ patents for biotech startup and established global trademark protection.",
    timeline: "6-18 months for patent approval",
    team: "6 IP specialists",
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

    longDescription:
      "Ensure your business meets all data protection requirements with our comprehensive privacy law services. We specialize in NDPA 2023 compliance and global data regulations.",
    services: [
      "NDPA 2023 Compliance Audit",
      "Data Protection Impact Assessments",
      "Privacy Policy Development",
      "Data Breach Response Planning",
      "Cross-Border Data Transfer Solutions",
      "Employee Data Protection Training",
    ],
    benefits: [
      "Full regulatory compliance",
      "Data security enhancement",
      "Customer trust building",
      "Avoidance of heavy penalties",
    ],
    caseStudy:
      "Achieved full NDPA 2023 compliance for fintech company processing 1M+ customer records.",
    timeline: "4-12 weeks for compliance implementation",
    team: "3 data protection experts",
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

    longDescription:
      "Expand your technology business globally with confidence. Our cross-border legal services ensure smooth international operations and compliance with diverse regulatory environments.",
    services: [
      "International Market Entry Strategy",
      "Cross-Border Contract Negotiation",
      "Foreign Investment Compliance",
      "International Tax Optimization",
      "Global Employment Law Advisory",
      "Multijurisdictional Dispute Resolution",
    ],
    benefits: [
      "Seamless global expansion",
      "Compliance across jurisdictions",
      "Tax efficiency optimization",
      "Risk mitigation in foreign markets",
    ],
    caseStudy:
      "Enabled tech startup expansion into 5 African markets with localized legal compliance.",
    timeline: "2-8 weeks per jurisdiction",
    team: "4 international law specialists",
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

    longDescription:
      "Protect your digital assets and resolve technology disputes with our specialized litigation services. We combine traditional legal expertise with deep understanding of digital ecosystems.",
    services: [
      "Technology Contract Disputes",
      "Digital Intellectual Property Litigation",
      "Online Commerce Dispute Resolution",
      "Cybersecurity Incident Response",
      "Tech Sector Arbitration",
      "Appellate Practice in Tech Law",
    ],
    benefits: [
      "Specialized tech dispute expertise",
      "Cost-effective resolution strategies",
      "Business continuity protection",
      "Precedent-setting case management",
    ],
    caseStudy:
      "Successfully defended e-commerce platform in $30M breach of contract case through strategic mediation.",
    timeline: "Varies by case complexity",
    team: "5 litigation specialists",
  },
];

// Helper function to get practice area by ID
export const getPracticeAreaById = (id) => {
  return practiceAreas.find((area) => area.id === id);
};

// Convert to the old format for backward compatibility (if needed)
export const practiceAreaDetails = practiceAreas.reduce((acc, area) => {
  acc[area.id] = {
    title: area.title,
    description: area.description,
    longDescription: area.longDescription,
    services: area.services,
    benefits: area.benefits,
    caseStudy: area.caseStudy,
    timeline: area.timeline,
    team: area.team,
  };
  return acc;
}, {});
