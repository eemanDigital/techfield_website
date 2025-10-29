"use client";

import { useState } from "react";
import { Award, Briefcase, Users, FileText, Scale } from "lucide-react";
import ElegantBackground from "../component/ElegantBackground"; // adjust path if needed
import { teamMembers } from "@/data/teamMembers";
import TeamMemberCard from "../component/TeamMemberCard";

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
