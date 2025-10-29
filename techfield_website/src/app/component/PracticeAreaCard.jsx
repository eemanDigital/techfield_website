import { useState } from "react";
import { ArrowRight, Target } from "lucide-react";

export default function PracticeAreaCard({ area, index }) {
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
