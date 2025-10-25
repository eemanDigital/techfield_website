"use client";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Shield,
  CheckCircle,
  FileText,
  Briefcase,
} from "lucide-react";

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

export default function PracticeAreaDetail() {
  const params = useParams();
  const area = practiceAreaDetails[params.id];

  if (!area) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Practice Area Not Found
          </h1>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-[#990100] text-white rounded-lg hover:bg-[#990100]/90 transition-colors">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white  mt-24">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-[#990100] transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Practice Areas
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#990100]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#990100]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{area.title}</h1>
              <p className="text-gray-600 mt-2">{area.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {area.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {area.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#990100] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Client Benefits
              </h3>
              <div className="bg-[#990100]/5 rounded-2xl p-6 mb-8">
                <ul className="space-y-3">
                  {area.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#990100] rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Case Study
              </h3>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#990100]">
                <p className="text-gray-700 italic">{area.caseStudy}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Practice Area Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#990100]" />
                  <div>
                    <p className="text-sm text-gray-600">Typical Timeline</p>
                    <p className="font-semibold text-gray-900">
                      {area.timeline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#990100]" />
                  <div>
                    <p className="text-sm text-gray-600">Team Size</p>
                    <p className="font-semibold text-gray-900">{area.team}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-[#990100]" />
                  <div>
                    <p className="text-sm text-gray-600">Experience Level</p>
                    <p className="font-semibold text-gray-900">
                      Senior Attorneys
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Ready to Get Started?
                </h4>
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full px-6 py-3 bg-[#990100] text-white rounded-lg font-semibold hover:bg-[#990100]/90 transition-colors">
                  Schedule Consultation
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Free initial consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
