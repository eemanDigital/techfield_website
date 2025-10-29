import {
  Linkedin,
  Mail,
  Award,
  GraduationCap,
  ChevronDown,
  Target,
  Star,
} from "lucide-react";

export default function TeamMemberCard({ member, isExpanded, onToggle }) {
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
