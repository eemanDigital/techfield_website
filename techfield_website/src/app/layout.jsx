// ✅ Import necessary modules and components
import Header from "./component/header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer/page";
import FloatingActionButtons from "./component/FloatingActionButtons";

// ✅ Load your custom font
const myFont = localFont({
  src: "./RobotoCondensed-VariableFont_wght.ttf",
});

// ✅ Separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#990100",
};

// ✅ Full SEO metadata configuration
export const metadata = {
  metadataBase: new URL("https://techfieldlaw.com"),
  title: {
    default: "Techfield Law - Technology & Business Law Firm in Nigeria",
    template: "%s | Techfield Law",
  },
  description:
    "At Techfield Law, we combine commercial insight with innovation to deliver forward-thinking legal solutions. Based in Nigeria, we advise clients in Capital Markets, Banking and Finance, Corporate and Investment Law, FinTech, Taxation, Technology, Oil and Gas, Telecommunications, Intellectual Property, Real Estate, Maritime, Sports Law, and Dispute Resolution.",
  keywords:
    "law firm Nigeria, technology law, fintech law firm, corporate law, blockchain legal, intellectual property, capital markets, oil and gas law, dispute resolution, business lawyers Lagos",
  authors: [{ name: "Techfield Law" }],
  creator: "Techfield Law",
  publisher: "Techfield Law",
  applicationName: "Techfield Law",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Techfield Law - Technology & Business Law Firm in Nigeria",
    description:
      "Techfield Law delivers expert counsel in Capital Markets, Corporate Law, FinTech, IP, and emerging technologies. Nigerian excellence with a global mindset.",
    url: "https://techfieldlaw.com",
    siteName: "Techfield Law",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // replace with your image path
        width: 1200,
        height: 630,
        alt: "Techfield Law - Legal Excellence in Technology and Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techfield Law - Technology & Business Law Firm",
    description:
      "Techfield Law delivers forward-thinking legal solutions for businesses in FinTech, IP, Corporate, and Capital Markets.",
    creator: "@techfieldlaw",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-search-console-verification-code", // replace with your code
  },
};

// ✅ Root Layout Component
export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Techfield Law",
    url: "https://techfieldlaw.com",
    logo: "https://techfieldlaw.com/logo.png",
    description:
      "At Techfield Law, we combine commercial insight with innovation to deliver forward-thinking legal solutions. Based in Nigeria, we advise clients in Capital Markets, Banking and Finance, Corporate and Investment Law, FinTech, Taxation, Technology, Oil and Gas, Telecommunications, Intellectual Property, Real Estate, Maritime, Sports Law, and Dispute Resolution.",
    sameAs: [
      "https://www.linkedin.com/company/techfieldlaw",
      "https://twitter.com/techfieldlaw",
      "https://facebook.com/techfieldlaw",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ft8, 4th FloorAlibro Atrium Plaza 32 A.E Ekukinam Street, Utako,  Abuja. Nigeria",
      addressLocality: "Abuja",
      addressRegion: "ABJ",
      postalCode: "900108",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-812-345-6789",
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: "English",
    },
    areaServed: "NG",
    founder: {
      "@type": "Person",
      name: "Abdullahi Abdulhakeem Ago",
      jobTitle: "Principal Partner",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Icons and theme color */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#990100" />

        {/* ✅ JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className={`${myFont.className} antialiased`}>
        <Header />
        {children}
        <FloatingActionButtons />
        <Footer />
      </body>
    </html>
  );
}
