import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import About from "@/components/sections/About/About";
import Connect from "@/components/sections/Connect/Connect";

export const metadata: Metadata = {
  title: "About — From the Founder's Desk · AAA Solutions",
  description:
    "Thoughts, ideas and updates from the journey of building, learning and growing at AAA solutions. Infant Ashil A, Founder & CEO.",
};

export default function AboutPage() {
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

