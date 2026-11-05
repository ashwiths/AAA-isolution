import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import About from "@/components/sections/About/About";
import Connect from "@/components/sections/Connect/Connect";

export const metadata: Metadata = {
  title: "Founder's Desk — Products that feel obvious. Design that isn't. · AAA isolutions",
  description:
    "Thoughts, ideas and updates from the journey of building, learning and growing at AAA isolutions. Infant Ashil A, Founder & CEO.",
};

export default function FoundersDeskPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#ffffff", minHeight: "100svh" }}>
        <About />
        <div className="finalFrame">
          <Connect />
        </div>
      </main>
    </>
  );
}

