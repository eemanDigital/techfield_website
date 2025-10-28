import { getAllPosts } from "@/lib/allPost";
import About from "./about-us/page";
import PracticeAreas from "./area-of-practice/page";
import BlogPage from "./blog/page";

import FAQSection from "./faq/page";
import Hero from "./component/hero/Hero";

const blogPosts = getAllPosts();

const Page = () => {
  return (
    <main>
      <Hero />

      <div className="container mx-auto px-4 py-16">
        <About />

        <PracticeAreas />
        {/* <TeamSection /> */}
        <BlogPage blogPosts={blogPosts} />
        <FAQSection />
      </div>
    </main>
  );
};

export default Page;
