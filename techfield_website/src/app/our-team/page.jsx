"use client";
import { useState, useRef, useEffect } from "react";
import {
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Star,
  Zap,
  Target,
  Users,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founding Partner",
    specialty: "Corporate & Business Law",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Passionate about helping startups and small businesses navigate legal challenges",
    education: "Harvard Law School, JD",
    barAdmissions: ["New York", "California"],
    achievements: [
      "Helped 50+ startups with legal formation",
      "Expert in business compliance",
      "Startup advisory specialist",
    ],
    expertise: ["Business Formation", "Contracts", "Compliance"],
    email: "sarah@modernlawfirm.com",
    linkedin: "#",
    stats: { clients: 50, focus: "Startups" },
  },
  {
    id: 2,
    name: "David Chen",
    role: "Technology Partner",
    specialty: "Tech & Intellectual Property",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Combining legal expertise with tech background to protect digital innovations",
    education: "Stanford Law School, JD",
    barAdmissions: ["California"],
    achievements: [
      "Protected 30+ tech innovations",
      "Digital rights advocacy",
      "Tech startup mentor",
    ],
    expertise: ["IP Protection", "Tech Contracts", "Data Privacy"],
    email: "david@modernlawfirm.com",
    linkedin: "#",
    stats: { clients: 30, focus: "Tech" },
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Legal Partner",
    specialty: "Employment Law",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Dedicated to creating fair workplaces and protecting employee rights",
    education: "Yale Law School, JD",
    barAdmissions: ["New York"],
    achievements: [
      "Workplace compliance expert",
      "HR policy development",
      "Employment dispute resolution",
    ],
    expertise: ["Employment Contracts", "Workplace Compliance", "HR Advisory"],
    email: "maria@modernlawfirm.com",
    linkedin: "#",
    stats: { clients: 40, focus: "Businesses" },
  },
  {
    id: 4,
    name: "James Taylor",
    role: "Legal Partner",
    specialty: "Commercial Law",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Focused on helping businesses grow through solid legal foundations",
    education: "Columbia Law School, JD",
    barAdmissions: ["New York"],
    achievements: [
      "Commercial agreement specialist",
      "Business negotiation expert",
      "Growth strategy legal support",
    ],
    expertise: ["Commercial Agreements", "Negotiations", "Business Growth"],
    email: "james@modernlawfirm.com",
    linkedin: "#",
    stats: { clients: 45, focus: "SMEs" },
  },
];

function FloatingOrbits() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-cyan-500/10 rounded-full"
          style={{
            width: `${600 + i * 150}px`,
            height: `${600 + i * 150}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: `rotate ${25 + i * 8}s linear infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}></div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${12 + Math.random() * 15}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(
                ${Math.random() * 60 - 30}px,
                ${Math.random() * 60 - 30}px
              )
              rotate(120deg);
          }
          66% {
            transform: translate(
                ${Math.random() * 60 - 30}px,
                ${Math.random() * 60 - 30}px
              )
              rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
}

function TeamMemberCard({ member, index, isExpanded, onToggle }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative min-h-[400px] perspective-1000 ${
        isVisible ? "animate-in" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 200}ms`,
        animationFillMode: "forwards",
      }}>
      {/* Main Container with Angled Design */}
      <div
        className={`relative transform-style-3d transition-all duration-700 ${
          isExpanded ? "scale-105" : "scale-100"
        }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine" />
        </div>

        {/* Angled Image Container */}
        <div className="absolute top-6 left-6 w-40 h-52 transform -rotate-6 overflow-hidden rounded-xl shadow-lg shadow-cyan-500/10 group-hover:rotate-0 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
          />

          {/* Decorative Corner Elements */}
          <div className="absolute top-3 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 transform rotate-45" />
          <div className="absolute bottom-3 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 transform rotate-45" />
        </div>

        {/* Content Container */}
        <div className="relative pt-64 pl-8 pr-6 pb-6">
          {/* Stats Badges */}
          <div className="flex gap-2 mb-4">
            <div className="flex items-center gap-1 px-2 py-1 bg-cyan-500/15 rounded-full backdrop-blur-sm">
              <Users className="w-3 h-3 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-300">
                {member.stats.clients}+
              </span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/15 rounded-full backdrop-blur-sm">
              <Target className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300">
                {member.stats.focus}
              </span>
            </div>
          </div>

          {/* Name and Role */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-cyan-400 font-semibold text-sm mb-1">
              {member.role}
            </p>
            <p className="text-white/60 text-xs">{member.specialty}</p>
          </div>

          {/* Bio */}
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Expand Button */}
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
            <span>{isExpanded ? "Show Less" : "Learn More"}</span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-90" : "group-hover/btn:translate-x-1"
              }`}
            />
          </button>

          {/* Expanded Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}>
            <div className="space-y-4">
              {/* Key Focus Areas */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Key Focus Areas
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-xs text-white/60 flex items-start gap-2">
                      <Zap className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise & Contact */}
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-300">
                    <Mail className="w-3 h-3" />
                    Contact
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30 transition-all duration-300">
                    <Linkedin className="w-3 h-3" />
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(-5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% -100%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        .animate-shine {
          animation: shine 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingOrbits />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/90">OUR TEAM</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Team
            </span>
          </h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/70 leading-relaxed">
              A modern legal team dedicated to providing innovative solutions
              for today's businesses
            </p>

            {/* Simple Stats */}
            <div className="flex justify-center gap-6 mt-8">
              {[
                { value: "4", label: "Expert Lawyers" },
                { value: "165+", label: "Clients Served" },
                { value: "100%", label: "Client Focused" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              onClick={() =>
                setSelectedMember(
                  selectedMember === member.id ? null : member.id
                )
              }>
              <TeamMemberCard
                member={member}
                index={index}
                isExpanded={selectedMember === member.id}
                onToggle={() =>
                  setSelectedMember(
                    selectedMember === member.id ? null : member.id
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 p-12">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Let's discuss how our modern approach to law can help your
              business thrive
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
              <button
                onClick={() => (window.location.href = "/about")}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                Learn About Our Approach
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
