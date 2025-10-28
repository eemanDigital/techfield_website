const phoneNumber = "+234-703-874-5047";
const logoName = "Techfield Law";
const email = "techfieldlaw@gmail.com";

const logoInitials = "TL";
const logoTagline = "bridging law and tech...";

const offices = [
  {
    city: "Abuja",
    address:
      "Ft8, 4th FloorAlibro Atrium Plaza 32 A.E Ekukinam Street, Utako,  Abuja. Nigeria",
    zip: "99099",
    phone: "+234-703-874-5047",
  },
  {
    city: "Ilorin",
    address: "no 123 Ilorin",
    zip: "",
    phone: "234-703-874-5047",
  },
];

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

//area of practice details
const practiceAreaDetails = {
  "corporate-law": {
    title: "Corporate Law",
    description:
      "Comprehensive corporate legal services designed to support your business growth and ensure regulatory compliance.",
    longDescription:
      "Our corporate law practice provides strategic counsel to businesses of all sizes, from startups to established enterprises. We specialize in helping clients navigate complex corporate structures, regulatory requirements, and strategic transactions.",
    services: [
      "Mergers & Acquisitions Advisory",
      "Corporate Governance & Compliance",
      "Contract Drafting & Negotiation",
      "Business Formation & Structuring",
      "Shareholder Agreements",
      "Corporate Restructuring",
    ],
    benefits: [
      "Strategic business guidance",
      "Risk mitigation strategies",
      "Regulatory compliance assurance",
      "Transaction support",
    ],
    caseStudy:
      "Recently guided a tech startup through a $50M acquisition while ensuring compliance with international regulations.",
    timeline: "2-4 weeks for standard incorporations",
    team: "3 specialized attorneys",
  },
  litigation: {
    title: "Litigation & Dispute Resolution",
    description:
      "Expert representation in complex commercial litigation and alternative dispute resolution methods.",
    longDescription:
      "Our litigation team brings decades of courtroom experience combined with innovative dispute resolution strategies. We focus on achieving favorable outcomes while minimizing business disruption.",
    services: [
      "Commercial Litigation",
      "Arbitration & Mediation",
      "Trial Advocacy",
      "Appellate Practice",
      "Class Action Defense",
      "Contract Disputes",
    ],
    benefits: [
      "Experienced trial attorneys",
      "Alternative dispute resolution",
      "Business disruption minimization",
      "Cost-effective strategies",
    ],
    caseStudy:
      "Successfully defended a manufacturing company in a $30M breach of contract case through strategic mediation.",
    timeline: "Varies by case complexity",
    team: "5 litigation specialists",
  },
  "intellectual-property": {
    title: "Intellectual Property",
    description:
      "Comprehensive protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    longDescription:
      "In today's innovation-driven economy, protecting intellectual assets is crucial. Our IP practice helps clients secure and enforce their rights across all types of intellectual property.",
    services: [
      "Patent Filing & Prosecution",
      "Trademark Registration",
      "Copyright Protection",
      "IP Portfolio Management",
      "Infringement Litigation",
      "Licensing Agreements",
    ],
    benefits: [
      "Asset protection strategies",
      "Global IP management",
      "Enforcement support",
      "Portfolio optimization",
    ],
    caseStudy:
      "Secured 45+ patents for a biotech startup and successfully defended against infringement claims.",
    timeline: "6-12 months for patent approvals",
    team: "4 IP specialists",
  },
  // Add other practice areas similarly...
};

export {
  phoneNumber,
  email,
  address,
  offices,
  faqData,
  practiceAreaDetails,
  logoName,
  logoInitials,
  logoTagline,
};
