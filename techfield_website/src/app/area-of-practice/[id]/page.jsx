import { practiceAreas } from "@/data/practiceAreas";
import PracticeAreaDetailClient from "./PracticeAreaDetailClient";

// Generate static params for SSG
export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    id: area.id,
  }));
}

// Generate metadata for each practice area
export async function generateMetadata({ params }) {
  // Await the params
  const { id } = await params;
  const area = practiceAreas.find((a) => a.id === id);

  if (!area) {
    return {
      title: "Practice Area Not Found - Techfield Law",
    };
  }

  return {
    title: `${area.title} - Techfield Law`,
    description: area.longDescription.substring(0, 160),
  };
}

export default async function PracticeAreaDetail({ params }) {
  // Await the params
  const { id } = await params;
  const area = practiceAreas.find((a) => a.id === id);

  if (!area) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Practice Area Not Found
          </h1>
          <a
            href="/practice-areas"
            className="px-6 py-3 bg-[#990100] text-white rounded-lg hover:bg-[#990100]/90 transition-colors inline-block">
            Go Back
          </a>
        </div>
      </div>
    );
  }

  // Create a plain object with only the data needed for the detail page
  const areaData = {
    id: area.id,
    title: area.title,
    description: area.description,
    longDescription: area.longDescription,
    services: area.services,
    benefits: area.benefits,
    caseStudy: area.caseStudy,
    timeline: area.timeline,
    team: area.team,
  };

  return <PracticeAreaDetailClient area={areaData} />;
}
