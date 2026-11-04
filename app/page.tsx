import Nav from "@/components/layout/Nav";
import Scene from "@/components/layout/Scene";
import TunnelIntro from "@/components/sections/Intro/TunnelIntro";
import Work from "@/components/sections/Work/Work";
import DesignStack from "@/components/sections/Stack/DesignStack";
import Certifications from "@/components/sections/Certifications/Certifications";
import Hero from "@/components/sections/Hero/Hero";
import Connect from "@/components/sections/Connect/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Intro: 3D "AAA isolutions" tunnel entrance */}
        <Scene order={1} runway={4} id="intro" keepOnMobile>
          <TunnelIntro text="AAA isolutions" />
        </Scene>

        {/* 1: Featured Work */}
        <Scene order={2} runway={4.5} id="work">
          <Work />
        </Scene>

        {/* 2: My Design Stack (Image 1) */}
        <Scene order={3} runway={1.5} id="stack">
          <DesignStack />
        </Scene>

        {/* 3: Credentials (Image 2) */}
        <Scene order={4} runway={3.5} id="credentials">
          <Certifications />
        </Scene>

        {/* 4: Hero / Profile (Image 3) */}
        <Scene order={5} runway={1.5} id="hero">
          <Hero />
        </Scene>

        {/* Final: 08 Let's Connect */}
        <div className="finalFrame">
          <Connect />
        </div>
      </main>
    </>
  );
}
