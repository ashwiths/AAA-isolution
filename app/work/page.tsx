import type { Metadata } from "next";
import FeaturedWork from "./FeaturedWork";

export const metadata: Metadata = {
  title: "Featured Work",
  description: "Selected products and platforms built by AAA isolutions.",
};

export default function FeaturedWorkPage() {
  return <FeaturedWork />;
}
