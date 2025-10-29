"use client";
import { useState } from "react";
import {
  ArrowRight,
  Cpu,
  Bitcoin,
  Shield,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import PracticeAreaCard from "../component/PracticeAreaCard";

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
