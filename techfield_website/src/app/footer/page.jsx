"use client";
import { useState } from "react";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Clock,
  Award,
  Shield,
} from "lucide-react";
import { logoInitials, logoName, logoTagline, offices } from "@/data/info";

const footerLinks = {
  services: [
    { name: "Corporate Law", href: "/practice-areas/corporate-law" },
    { name: "Litigation", href: "/practice-areas/litigation" },
    { name: "Intellectual Property", href: "/practice-areas/ip" },
    { name: "Employment Law", href: "/practice-areas/employment" },
    { name: "Real Estate", href: "/practice-areas/real-estate" },
    { name: "Tax Law", href: "/practice-areas/tax" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "News & Insights", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
  ],
  resources: [
    { name: "Legal Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

const certifications = [
  { icon: Award, text: "AV Rated Preeminent" },
  { icon: Shield, text: "ISO 27001 Certified" },
  { icon: Scale, text: "BBB A+ Accredited" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/20"
              style={{
                width: `${(i + 1) * 80}px`,
                height: `${(i + 1) * 80}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-3">Stay Informed</h3>
              <p className="text-white/70 text-lg">
                Subscribe to receive legal insights, industry updates, and
                expert analysis delivered to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                  {subscribed ? "Subscribed!" : "Subscribe"}
                  {!subscribed && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-white/50">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#990100] to-[#660000] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 text-white font-extrabold">
                  {" "}
                  {logoInitials}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{logoName}</h3>
                <p className="text-xs text-white/50">{logoTagline}</p>
              </div>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              A leading legal technology firm combining decades of legal
              expertise with innovative solutions to deliver exceptional results
              for our clients.
            </p>

            {/* Certifications */}
            {/* <div className="space-y-3 mb-6">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white/60" />
                    </div>
                    <span className="text-sm text-white/60">{cert.text}</span>
                  </div>
                );
              })}
            </div> */}

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map((social, i) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                    <Icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-8 text-white/90">
            Our Offices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <div key={i} className="space-y-3">
                <h5 className="font-bold text-lg text-white">{office.city}</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-white/60">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                    <div>
                      <p>{office.address}</p>
                      <p>{office.zip}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300">
                    <Phone className="w-4 h-4 text-white/40" />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-white/40" />
              <div className="text-sm">
                <span className="text-white/90 font-semibold">
                  Business Hours:{" "}
                </span>
                <span className="text-white/60">
                  Monday - Friday, 9:00 AM - 6:00 PM EST
                </span>
              </div>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/50">
            <p>
              © {new Date().getFullYear()} Techfield Law. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/attorney-advertising"
                className="hover:text-white transition-colors duration-300">
                Attorney Advertising
              </a>
              <a
                href="/disclaimer"
                className="hover:text-white transition-colors duration-300">
                Disclaimer
              </a>
              <a
                href="/sitemap"
                className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/5"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/5"></div>
    </footer>
  );
}
