import Nav from "@/components/layout/Nav";
import Scene from "@/components/layout/Scene";
import TunnelIntro from "@/components/sections/Intro/TunnelIntro";
import Work from "@/components/sections/Work/Work";
import Certifications from "@/components/sections/Certifications/Certifications";
import DesignStack from "@/components/sections/Stack/DesignStack";
import Connect from "@/components/sections/Connect/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* HOME: 3D "AAA isolutions" tunnel entrance */}
        <Scene order={1} runway={4} id="intro" keepOnMobile>
          <TunnelIntro text="AAA isolutions" />
        </Scene>

        {/* 1. FEATURED PROJECTS */}
        <Scene order={2} runway={4.5} id="work">
          <Work />
        </Scene>

        {/* 2. CREDENTIALS */}
        <Scene order={3} runway={3.5} id="credentials">
          <Certifications />
        </Scene>

        {/* 3. TOOLKIT */}
        <Scene order={4} runway={1.5} id="stack">
          <DesignStack />
        </Scene>

        {/* Final: Let's Connect */}
        <div className="finalFrame">
          <Connect />
        </div>
      </main>
    </>
  );
}
