import type { Metadata } from "next";
import FeaturedProjects from "./FeaturedProjects";

export const metadata: Metadata = {
  title: "Featured Projects · AAA isolutions",
  description:
    "Explore projects categorized by technology: React, React Native, Windows Application, Antigravity Extension, Chrome Extension, and UI/UX Design.",
};

export default function FeaturedProjectsPage() {
  return <FeaturedProjects />;
}

