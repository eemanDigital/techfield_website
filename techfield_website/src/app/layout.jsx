import Header from "./component/header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer/page";
import ScrollToTop from "./component/ScrollToTop";
import FloatingActionButtons from "./component/FloatingActionButtons";

export const metadata = {
  title: "Techfield Law",
  description: "Tech-driven legal solutions",
};

const myFont = localFont({
  src: "./RobotoCondensed-VariableFont_wght.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
        <Header />
        {children}
        <FloatingActionButtons />
        {/* <ScrollToTop /> */}
        <Footer />
      </body>
    </html>
  );
}
