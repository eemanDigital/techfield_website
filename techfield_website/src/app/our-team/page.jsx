"use client";

import { useState } from "react";
import {
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Users,
  Target,
  FileText,
  Star,
  Scale,
} from "lucide-react";
import ElegantBackground from "../component/ElegantBackground"; // adjust path if needed

const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founding Partner",
    specialty: "Corporate & Business Law",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1200&fit=crop&q=80",
    bio: "Passionate about helping startups and small businesses navigate legal challenges with strategic corporate guidance.",
    education: "Harvard Law School, JD",
    barAdmissions: ["New York", "California"],
    achievements: [
      "50+ startups assisted with legal formation",
      "Expert in regulatory compliance",
      "Strategic business advisory",
    ],
    expertise: [
      "Business Formation",
      "Corporate Contracts",
      "Regulatory Compliance",
    ],
    email: "sarah@modernlawfirm.com",
    linkedin: "#",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Technology Partner",
    specialty: "Tech & Intellectual Property",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=1200&fit=crop&q=80",
    bio: "Combining legal expertise with technical background to protect and scale digital innovations.",
    education: "Stanford Law School, JD",
    barAdmissions: ["California"],
    achievements: [
      "Protected 30+ tech innovations",
      "Digital rights and IP strategy",
      "Tech startup mentorship",
    ],
    expertise: ["IP Protection", "Tech Contracts", "Data Privacy"],
    email: "david@modernlawfirm.com",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Legal Partner",
    specialty: "Employment Law",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&h=1200&fit=crop&q=80",
    bio: "Dedicated to creating fair workplaces and protecting employee rights through comprehensive legal strategies.",
    education: "Yale Law School, JD",
    barAdmissions: ["New York"],
    achievements: [
      "Workplace compliance architecture",
      "HR policy development",
      "Employment dispute resolution",
    ],
    expertise: ["Employment Contracts", "Workplace Compliance", "HR Advisory"],
    email: "maria@modernlawfirm.com",
    linkedin: "#",
  },
  {
    id: 4,
    name: "James Taylor",
    role: "Legal Partner",
    specialty: "Commercial Law",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=1200&fit=crop&q=80",
    bio: "Focused on helping businesses achieve growth through solid legal foundations and strategic agreements.",
    education: "Columbia Law School, JD",
    barAdmissions: ["New York"],
    achievements: [
      "Commercial agreement structuring",
      "Business negotiation expertise",
      "Growth strategy legal support",
    ],
    expertise: [
      "Commercial Agreements",
      "Business Negotiations",
      "Corporate Growth",
    ],
    email: "james@modernlawfirm.com",
    linkedin: "#",
  },
];

function TeamMemberCard({ member, isExpanded, onToggle }) {
  return (
    <div className="group bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden hover:border-[#990100]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#990100]/10">
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Image - Larger, responsive, glossy */}
          <div className="flex-shrink-0 relative">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl bg-gradient-to-br from-[#990100]/8 to-[#990100]/20">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#990100] rounded-full flex items-center justify-center shadow-md">
              <Star className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-[#990100] font-semibold text-sm mb-1 uppercase tracking-wide">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm font-medium mb-3">
              {member.specialty}
            </p>

            <p className="text-gray-500 leading-relaxed text-sm md:border-l-2 md:pl-4 md:border-[#990100]/20">
              {member.bio}
            </p>

            <div className="flex justify-center md:justify-start mt-4 md:mt-6">
              <button
                onClick={onToggle}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-[#990100] hover:bg-[#990100] hover:text-white transition-all duration-300 text-sm font-medium">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
                {isExpanded ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50/80 to-white/50 px-6 md:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6">
            {/* Left Column - Education & Expertise */}
            <div className="space-y-6">
              <div className="bg-white/60 rounded-xl p-4 border border-gray-200/40">
                <h4 className="flex items-center gap-3 text-sm font-semibold text-gray-900 mb-3">
                  <div className="w-8 h-8 bg-[#990100]/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[#990100]" />
                  </div>
                  Education & Bar Admissions
                </h4>
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  {member.education}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.barAdmissions.map((state, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#990100]/10 text-[#990100] rounded-lg text-xs font-semibold border border-[#990100]/20">
                      {state} Bar
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/60 rounded-xl p-4 border border-gray-200/40">
                <h4 className="flex items-center gap-3 text-sm font-semibold text-gray-900 mb-3">
                  <div className="w-8 h-8 bg-[#990100]/10 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#990100]" />
                  </div>
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-xs font-medium border border-gray-300/60 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Achievements & Contact */}
            <div className="space-y-6">
              <div className="bg-white/60 rounded-xl p-4 border border-gray-200/40">
                <h4 className="flex items-center gap-3 text-sm font-semibold text-gray-900 mb-3">
                  <div className="w-8 h-8 bg-[#990100]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#990100]" />
                  </div>
                  Professional Highlights
                </h4>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#990100] rounded-full mt-2"></div>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/60 rounded-xl p-4 border border-gray-200/40">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h4>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#990100] text-white rounded-xl text-sm font-semibold hover:bg-[#990100]/90 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-xl text-sm font-semibold border border-gray-300 hover:border-[#990100] hover:text-[#990100] transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState(null);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden mt-20">
      <ElegantBackground />

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-sm mb-6">
              <div className="w-2 h-2 bg-[#990100] rounded-full"></div>
              <Users className="w-5 h-5 text-[#990100]" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">
                LEGAL TEAM
              </span>
              <div className="w-2 h-2 bg-[#990100] rounded-full"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
              Our{" "}
              <span className="font-serif italic text-[#990100]">Legal</span>{" "}
              Team
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Distinguished attorneys combining deep legal expertise with
              innovative approaches to deliver exceptional client outcomes.
            </p>
          </div>

          {/* Elegant Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Scale, value: "4", label: "Expert Attorneys" },
              { icon: FileText, value: "165+", label: "Cases Handled" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Briefcase, value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200/40 group-hover:border-[#990100]/20 transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-[#990100]" />
                </div>
                <div className="text-2xl md:text-3xl font-light text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Team Members */}
          <div className="space-y-8 mb-12">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isExpanded={expandedMember === member.id}
                onToggle={() =>
                  setExpandedMember(
                    expandedMember === member.id ? null : member.id
                  )
                }
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/60 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Ready to Work With{" "}
                <span className="font-serif italic text-[#990100]">
                  Our Team
                </span>
                ?
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
                Schedule a confidential consultation to discuss your legal
                objectives with our experienced attorneys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="px-10 py-3 bg-[#990100] text-white rounded-2xl font-semibold hover:bg-[#990100]/90 transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
                <button
                  onClick={() => (window.location.href = "/practice-areas")}
                  className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold hover:border-[#990100] hover:text-[#990100] transition-all duration-300 hover:scale-105">
                  View Practice Areas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
