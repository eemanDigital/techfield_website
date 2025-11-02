"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Calendar,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { offices } from "@/data/info";

// const officeLocations = [
//   {
//     city: offices[0].city,
//     address: offices[0].address,
//     zip: offices[0].zip,
//     phone: offices[0].phone,
//     email:
//   },

// ];

const practiceAreas = [
  "Corporate Law",
  "Litigation",
  "Intellectual Property",
  "Employment Law",
  "Real Estate",
  "Tax Law",
  "Regulatory Compliance",
  "Other",
];

const whyChooseUs = [
  {
    icon: Shield,
    text: "Confidential & Secure",
    description: "Your information is protected",
  },
  {
    icon: Zap,
    text: "24-Hour Response",
    description: "We respond within 1 business day",
  },
  {
    icon: Users,
    text: "Expert Team",
    description: "Top-rated legal professionals",
  },
];

function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="absolute top-1/4 right-0 w-96 h-96">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border border-white/50"
            style={{
              width: `${(i + 1) * 60}px`,
              height: `${(i + 1) * 60}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              animation: `rotate ${15 + i * 3}s linear infinite`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(45deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    practiceArea: "",
    message: "",
    urgency: "normal",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          practiceArea: "",
          message: "",
          urgency: "normal",
        });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <GeometricPattern />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/90">
              Get in Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Connect with our expert legal team. We're here to provide the
            guidance and support you need.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Send Us a Message
                </h2>
                <p className="text-white/60">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-white/70 mb-6">
                    Thank you for reaching out. Our team will review your
                    message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "firstName"
                              ? "text-white"
                              : "text-white/40"
                          }`}
                        />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "lastName"
                              ? "text-white"
                              : "text-white/40"
                          }`}
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-white"
                              : "text-white/40"
                          }`}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "phone"
                              ? "text-white"
                              : "text-white/40"
                          }`}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company and Practice Area */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "company"
                              ? "text-white"
                              : "text-white/40"
                          }`}
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Practice Area *
                      </label>
                      <select
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                        required>
                        <option value="" className="bg-slate-900">
                          Select an area...
                        </option>
                        {practiceAreas.map((area, i) => (
                          <option key={i} value={area} className="bg-slate-900">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Urgency Level
                    </label>
                    <div className="flex gap-4">
                      {["normal", "urgent", "critical"].map((level) => (
                        <label key={level} className="flex-1">
                          <input
                            type="radio"
                            name="urgency"
                            value={level}
                            checked={formData.urgency === level}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div
                            className={`px-4 py-3 rounded-lg border-2 text-center cursor-pointer transition-all duration-300 ${
                              formData.urgency === level
                                ? "border-white bg-white/10 text-white"
                                : "border-white/10 bg-white/5 text-white/60 hover:border-white/20"
                            }`}>
                            <span className="font-semibold capitalize">
                              {level}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows="6"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell us about your legal needs..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/50 text-center">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Contact Info */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#990100]/20 via-[#b30000]/20 to-[#990100]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">
                          {item.text}
                        </h4>
                        <p className="text-sm text-white/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+12125550100"
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/60">Call us now</p>
                    <p className="font-semibold text-white">
                      +1 (212) 555-0100
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </a>

                <a
                  href="/schedule"
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/60">Book online</p>
                    <p className="font-semibold text-white">Schedule Meeting</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Facebook, href: "#" },
                ].map((social, i) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group">
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Visit Our Offices
            </h2>
            <p className="text-white/70">
              We have locations across the country to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/40" />
                    <div>
                      <p>{office.address}</p>
                      <p>{office.zip}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5 text-white/40" />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5 text-white/40" />
                    {office.email}
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock className="w-5 h-5 text-white/40" />
                    {office.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
