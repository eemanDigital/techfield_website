import About from "./about-us/page";
import PracticeAreas from "./area-of-practice/page";
import BlogPage from "./blog/page";
import TextCarousel from "./component/carousel/textCarousel";

const Page = () => {
  return (
    <main>
      <TextCarousel />

      <div className="container mx-auto px-4 py-16">
        <p className="text-lg leading-relaxed text-primary-hover">
          <About />
          <PracticeAreas />
          <BlogPage />
        </p>
      </div>
    </main>
  );
};

export default Page;
