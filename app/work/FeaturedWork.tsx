"use client";

import Link from "next/link";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLang } from "@/lib/i18n";
import styles from "./featured-work.module.css";

type Metric = { label: string; value: string };
type FeaturedProject = {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: Metric[];
  liveUrl: string;
  sourceUrl: string;
};

type DirectoryProject = {
  name: string;
  url: string;
  download?: boolean;
  unavailable?: boolean;
};

type DirectoryGroup = {
  category: string;
  description: string;
  projects: DirectoryProject[];
};

/* Featured projects and verified destinations. */
const projects: FeaturedProject[] = [
  {
    number: "01",
    title: "Website Development",
    category: "High-Performance Web & Digital Experiences",
    description:
      "We build high-performance, visually stunning websites that not only look great but also drive results. From simple brochure sites to complex web applications, our team uses the latest technologies to ensure your online presence is robust, secure, and scalable. We focus on user experience, SEO, and conversion optimization to help your business grow.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "SEO & CRO", "Three.js", "Vite"],
    metrics: [
      { label: "Core focus", value: "UX, SEO & Conversion Optimization" },
      { label: "Capabilities", value: "Brochure sites to complex web apps" },
      { label: "Architecture", value: "Robust, secure & scalable" },
    ],
    liveUrl: "https://www.myheeding.com/en",
    sourceUrl: "/work/heeding-marketplace",
  },
  {
    number: "02",
    title: "Software Development",
    category: "Custom Software Solutions & Enterprise Systems",
    description:
      "Our software development services are designed to solve complex business challenges. We develop custom software solutions that streamline operations, improve efficiency, and foster innovation. Whether you need a CRM, ERP, or a custom internal tool, we deliver reliable and scalable software tailored to your specific requirements.",
    tech: ["Node.js", "TypeScript", "Python", "Tauri / Rust", "PostgreSQL", "REST APIs", "Systems Architecture"],
    metrics: [
      { label: "Solutions", value: "CRM, ERP & custom internal tools" },
      { label: "Mission", value: "Streamline operations & efficiency" },
      { label: "Delivery", value: "Reliable & scalable software" },
    ],
    liveUrl: "/work/lockai",
    sourceUrl: "/work/lockai",
  },
  {
    number: "03",
    title: "Mobile App Development",
    category: "iOS & Android Cross-Platform Applications",
    description:
      "Reach your customers wherever they are with our top-tier mobile app development services. We create intuitive, engaging, and high-performance mobile applications for both iOS and Android platforms. Using technologies like React Native and Flutter, as well as native languages, we ensure a seamless user experience across all devices.",
    tech: ["React Native", "Flutter", "iOS", "Android", "TypeScript", "Mobile UI/UX", "Native Modules"],
    metrics: [
      { label: "Platforms", value: "iOS & Android cross-platform" },
      { label: "Stack", value: "React Native, Flutter & Native" },
      { label: "Experience", value: "Intuitive, engaging & high-performance" },
    ],
    liveUrl: "/work/price-intelligence",
    sourceUrl: "/work/price-intelligence",
  },
  {
    number: "04",
    title: "E-commerce Development",
    category: "Modern E-Commerce Platforms & Payment Integration",
    description:
      "Transform your retail business with our comprehensive e-commerce solutions. We build secure, scalable, and user-friendly online stores that provide an exceptional shopping experience. From platform selection (Shopify, WooCommerce, Magento) to custom payment gateway integration, we handle everything to get you selling online effectively.",
    tech: ["Shopify", "WooCommerce", "Magento", "Stripe API", "Next.js Commerce", "Security & PCI-DSS"],
    metrics: [
      { label: "Platforms", value: "Shopify, WooCommerce & Magento" },
      { label: "Integrations", value: "Custom payment gateways & checkout" },
      { label: "Standard", value: "Secure, scalable & high-converting" },
    ],
    liveUrl: "/work/oigetit-hitl",
    sourceUrl: "/work/oigetit-hitl",
  },
  {
    number: "05",
    title: "UI/UX Design",
    category: "User-Centered Digital Product Design",
    description:
      "Great design is about more than just aesthetics; it's about how it works. Our UI/UX design process centers on understanding your users and their needs. We create intuitive interfaces and seamless user journeys that increase engagement and satisfaction. From wireframing to high-fidelity prototyping, we bring your vision to life.",
    tech: ["Figma", "Design Systems", "Wireframing", "Interactive Prototyping", "User Research", "Usability Testing"],
    metrics: [
      { label: "Focus", value: "User-centric engaging digital experiences" },
      { label: "Deliverables", value: "Wireframes to high-fidelity prototypes" },
      { label: "Impact", value: "Increased engagement & satisfaction" },
    ],
    liveUrl: "/work/seo-growth",
    sourceUrl: "/work/seo-growth",
  },
  {
    number: "06",
    title: "SEO",
    category: "Data-Driven Search Engine Optimization",
    description:
      "Increase your visibility and drive organic traffic with our expert SEO services. We use data-driven strategies to improve your search engine rankings. Our comprehensive approach includes technical SEO, on-page optimization, content strategy, and link building to ensure long-term growth and higher ROI.",
    tech: ["Technical SEO", "Google Search Console", "Keyword Strategy", "On-Page Optimization", "Link Building", "Analytics"],
    metrics: [
      { label: "Strategy", value: "Data-driven rankings & visibility" },
      { label: "Pillars", value: "Technical, on-page & link building" },
      { label: "Result", value: "Long-term organic traffic & high ROI" },
    ],
    liveUrl: "/work/avengers-doomsday",
    sourceUrl: "/work/avengers-doomsday",
  },
  {
    number: "07",
    title: "Graphic Design",
    category: "Visual Identity, Branding & Marketing Materials",
    description:
      "Make a lasting impression with our creative graphic design services. We craft visual identities that resonate with your target audience. From brochures and flyers to social media graphics and packaging, our designs are tailored to communicate your brand's message effectively and stylishly.",
    tech: ["Adobe Illustrator", "Photoshop", "Brand Identity", "Print & Packaging", "Marketing Collateral", "Social Media"],
    metrics: [
      { label: "Identity", value: "Branding that resonates with audiences" },
      { label: "Assets", value: "Brochures, packaging & social graphics" },
      { label: "Execution", value: "Effective, stylish & lasting impression" },
    ],
    liveUrl: "/work/got-cinematic",
    sourceUrl: "/work/got-cinematic",
  },
  {
    number: "08",
    title: "Logo Design",
    category: "Brand Marks & Iconic Visual Identity",
    description:
      "Your logo is the face of your brand. We design memorable, timeless logos that encapsulate your brand's values and mission. Our process involves deep research and creative exploration to deliver a unique mark that sets you apart from the competition.",
    tech: ["Vector Illustration", "Typography Design", "Symbol Crafting", "Brand Guidelines", "Color Theory"],
    metrics: [
      { label: "Quality", value: "Memorable & timeless brand marks" },
      { label: "Process", value: "Deep research & creative exploration" },
      { label: "Outcome", value: "Sets you apart from competition" },
    ],
    liveUrl: "/work/baahubali",
    sourceUrl: "/work/baahubali",
  },
  {
    number: "09",
    title: "Business Card Design",
    category: "Print Collateral & Professional Networking",
    description:
      "Even in the digital age, a well-designed business card is a powerful networking tool. We create professional, eye-catching business cards that represent your brand with elegance. Whether you prefer a minimalist look or something bold, we design cards that people want to keep.",
    tech: ["Print Layout", "Special Finishes (Foil/Emboss)", "Typography", "Paper Selection", "Vector Assets"],
    metrics: [
      { label: "Purpose", value: "Powerful networking & lasting impression" },
      { label: "Styles", value: "Minimalist to bold & elegant" },
      { label: "Appeal", value: "Cards that people want to keep" },
    ],
    liveUrl: "/work/ghost-rider",
    sourceUrl: "/work/ghost-rider",
  },
  {
    number: "10",
    title: "Sticker Design",
    category: "Custom Stickers, Branding & Merchandise",
    description:
      "Add a fun, tangible element to your brand with custom sticker designs. Ideal for merchandise, packaging, or guerrilla marketing, our stickers are designed to be stuck everywhere. We create vibrant, durable designs that fans and customers will love to display.",
    tech: ["Vector Art", "Die-Cut Layout", "Packaging Design", "Vinyl Specifications", "Merchandise Branding"],
    metrics: [
      { label: "Application", value: "Merchandise, packaging & marketing" },
      { label: "Quality", value: "Vibrant, durable & weather-resistant" },
      { label: "Appeal", value: "Designs fans love to display" },
    ],
    liveUrl: "/work/habu",
    sourceUrl: "/work/habu",
  },
  {
    number: "11",
    title: "Poster Design",
    category: "Promotional Collateral & Event Visuals",
    description:
      "Grab attention instantly with our dynamic poster designs. Perfect for events, product launches, or promotional campaigns, our posters are designed to stop people in their tracks. We combine compelling visuals with persuasive copy to drive your message home.",
    tech: ["Large-Format Print", "Editorial Layout", "Typography", "Visual Hierarchy", "Event Marketing"],
    metrics: [
      { label: "Impact", value: "Stops people in their tracks" },
      { label: "Use-cases", value: "Events, launches & campaigns" },
      { label: "Balance", value: "Compelling visuals & persuasive copy" },
    ],
    liveUrl: "/work/vistarail",
    sourceUrl: "/work/vistarail",
  },
  {
    number: "12",
    title: "Presentation Design",
    category: "Executive Decks & Investor Keynotes",
    description:
      "Win your audience over with professionally designed presentations. We turn complex data and ideas into clear, visually engaging slides. Whether it's a pitch deck, a corporate report, or a conference keynote, we ensure your presentation looks polished and persuasive.",
    tech: ["Pitch Decks", "Figma Slides", "Keynote / PowerPoint", "Data Visualization", "Infographics"],
    metrics: [
      { label: "Formats", value: "Pitch decks, corporate reports & keynotes" },
      { label: "Transformation", value: "Complex data into clear visuals" },
      { label: "Delivery", value: "Polished, persuasive & engaging" },
    ],
    liveUrl: "/work/reverie",
    sourceUrl: "/work/reverie",
  },
  {
    number: "13",
    title: "Email Design",
    category: "Responsive Email Templates & Campaign CRO",
    description:
      "Boost your email marketing campaigns with custom-designed email templates. We create responsive, on-brand emails that look great on any device. Focus on readability and call-to-action placement to maximize open rates and conversions.",
    tech: ["HTML Email", "Responsive Design", "Figma", "Mailchimp / Klaviyo", "Conversion Rate Optimization"],
    metrics: [
      { label: "Design standard", value: "Responsive & on-brand on any device" },
      { label: "Optimization", value: "Readability & CTA placement" },
      { label: "Goal", value: "Maximized open rates & click-through" },
    ],
    liveUrl: "/work/workflow-automation",
    sourceUrl: "/work/workflow-automation",
  },
  {
    number: "14",
    title: "Landing Page Design",
    category: "High-Performance CRO Landing Pages",
    description:
      "Turn visitors into leads with our high-converting landing page designs. We adhere to best practices in CRO (Conversion Rate Optimization) to create focused, persuasive pages. From headline to footer, every element is crafted to guide the user towards taking action.",
    tech: ["Next.js", "Tailwind CSS", "Figma", "CRO Architecture", "A/B Testing", "Web Vitals Optimization"],
    metrics: [
      { label: "Conversion", value: "Turn visitors into high-value leads" },
      { label: "Methodology", value: "Proven CRO best practices" },
      { label: "Craft", value: "Action-oriented headline-to-footer flow" },
    ],
    liveUrl: "/work/spider-man",
    sourceUrl: "/work/spider-man",
  },
  {
    number: "15",
    title: "Custon",
    category: "Productivity / Shortcut Engine",
    description:
      "A keyboard shortcut and workflow automation platform for building custom command palettes, instant macros, and key bindings that make complex tasks quicker.",
    tech: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Keyboard API", "REST APIs", "Vite"],
    metrics: [
      { label: "Function", value: "Macro & shortcut engine" },
      { label: "Execution", value: "Instant trigger" },
      { label: "Domain", value: "custon.savee.space" },
    ],
    liveUrl: "https://custon.savee.space/",
    sourceUrl: "https://github.com/ashwiths/Custon",
  },
  {
    number: "16",
    title: "Antigravity Switcher",
    category: "Antigravity IDE Extension / Utility",
    description:
      "An account management assistant for Google Antigravity IDE, with secure multi-account storage and quick switching without separate IDE instances or profile folders.",
    tech: ["TypeScript", "React.js", "Vite", "Tailwind CSS", "VS Code API", "SecretStorage", "Open VSX"],
    metrics: [
      { label: "Performance", value: "Instant hotkeys (Ctrl+1–4)" },
      { label: "Security", value: "VS Code SecretStorage" },
      { label: "Distribution", value: "Open VSX v0.5.5" },
    ],
    liveUrl: "https://open-vsx.org/extension/ashil/custom-switcher",
    sourceUrl: "https://github.com/ashwiths",
  },
  {
    number: "17",
    title: "Heal & Play",
    category: "Social Impact / Fintech Gaming",
    description:
      "A social impact and micro-donation platform combining browser mini-games with verified pediatric treatment funding and transparent settlement tracking.",
    tech: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Micro-payments", "REST APIs", "Vite"],
    metrics: [
      { label: "Mission", value: "Pediatric care fund" },
      { label: "Model", value: "Micro-donations" },
      { label: "Domain", value: "www.savee.space" },
    ],
    liveUrl: "https://www.savee.space/",
    sourceUrl: "https://github.com/ashwiths/Goodthing",
  },
  {
    number: "18",
    title: "3D Bible Experience",
    category: "3D Web Experience / WebGL",
    description:
      "An immersive Bible reading experience with spatial typography, WebGL lighting, camera choreography, focused reading layouts, and fluid chapter navigation.",
    tech: ["Three.js", "WebGL", "React.js", "GLSL Shaders", "Framer Motion", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Render engine", value: "Three.js / WebGL" },
      { label: "Domain", value: "bible.savee.space" },
      { label: "Interaction", value: "3D spatial reading" },
    ],
    liveUrl: "https://bible.savee.space/",
    sourceUrl: "https://github.com/ashwiths/Bible",
  },
];

const projectGroups: DirectoryGroup[] = [
  {
    category: "React",
    description: "Web applications and product platforms",
    projects: [
      { name: "Bible", url: "https://bible.savee.space/" },
      { name: "MalwareScan", url: "https://safe.savee.space/" },
      { name: "AshDrop", url: "https://drop.savee.space/" },
      { name: "FontPair", url: "https://font.savee.space/" },
      { name: "TypeMaster", url: "https://type.savee.space/" },
      { name: "Heal & Play", url: "https://www.savee.space/" },
      { name: "BlueLab", url: "https://www.bluelabtech.space/" },
      { name: "NetCheck", url: "https://check.bluelabtech.space/" },
      { name: "DevKit", url: "https://dev.bluelabtech.space/" },
      { name: "ProjectHub", url: "https://projecthub.bluelabtech.space/" },
      { name: "SheetHub", url: "https://sheethub.bluelabtech.space/" },
    ],
  },
  {
    category: "React Native",
    description: "Android apps",
    projects: [
      { name: "Crickstreet", url: "https://www.ashil.space/crickstreet.apk", download: true, unavailable: true },
      { name: "Todo", url: "https://www.ashil.space/todo.apk", download: true, unavailable: true },
    ],
  },
  {
    category: "Windows Application",
    description: "Desktop app · Tauri, Rust, Vite",
    projects: [{ name: "Custon", url: "https://custon.savee.space/" }],
  },
  {
    category: "Antigravity Extension",
    description: "IDE account switcher · TypeScript, VS Code API",
    projects: [{ name: "Custom Switcher", url: "https://open-vsx.org/extension/ashil/custom-switcher" }],
  },
  {
    category: "Chrome Extension",
    description: "Browser profile switcher · Manifest V3",
    projects: [{ name: "ChromeSwitch", url: "https://chromeswitch.savee.space/" }],
  },
  {
    category: "UI/UX Design",
    description: "Figma · Design systems · Wireframing · Prototyping · User research",
    projects: [
      { name: "Website Development", url: "/work/heeding-marketplace" },
      { name: "Software Development", url: "/work/lockai" },
      { name: "Mobile App Development", url: "/work/price-intelligence" },
      { name: "E-commerce Development", url: "/work/oigetit-hitl" },
      { name: "UI/UX Design", url: "/work/seo-growth" },
      { name: "SEO", url: "/work/avengers-doomsday" },
      { name: "Graphic Design", url: "/work/got-cinematic" },
      { name: "Logo Design", url: "/work/baahubali" },
      { name: "Business Card Design", url: "/work/ghost-rider" },
      { name: "Sticker Design", url: "/work/habu" },
      { name: "Poster Design", url: "/work/vistarail" },
      { name: "Presentation Design", url: "/work/reverie" },
      { name: "Email Design", url: "/work/workflow-automation" },
      { name: "Landing Page Design", url: "/work/spider-man" },
    ],
  },
];

export default function FeaturedWork() {
  const { lang } = useLang();
  const isFrench = lang === "fr";

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.logo}>
          AAA isolutions<i>.</i>
        </Link>
        <nav aria-label={isFrench ? "Navigation principale" : "Main navigation"}>
          <Link href="/">{isFrench ? "Accueil" : "Home"}</Link>
          <Link href="/work" aria-current="page" className={styles.current}>
            {isFrench ? "Projets à la une" : "Featured Work"}
          </Link>
          <Link href="/projects">
            {isFrench ? "Annuaire projets" : "Featured Projects"}
          </Link>
        </nav>
        <LanguageToggle />
      </header>

      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}><span>02</span> / {isFrench ? "PROJETS SÉLECTIONNÉS" : "FEATURED WORK"}</p>
          <h1>{isFrench ? <>Projets sélectionnés.<br /><em>Valeur concrète.</em></> : <>Selected works.<br /><em>Engineered value.</em></>}</h1>
          <p className={styles.intro}>
            {isFrench
              ? "Des produits et plateformes conçus pour résoudre des besoins réels, avec une attention portée à l’architecture et à l’expérience."
              : "Products and platforms built to solve real needs, with care for architecture, performance, and the people using them."}
          </p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article className={styles.card} key={project.number}>
              <span className={styles.number} aria-hidden="true">{project.number}</span>
              <div className={styles.topline}>
                <span className={styles.index}>{project.number} //</span>
                <span className={styles.category}>{project.category}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.summary}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <ul className={styles.tech} aria-label={isFrench ? "Technologies" : "Technologies used"}>
                    {project.tech.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className={styles.details}>
                  <p className={styles.metricsLabel}>// {isFrench ? "DÉTAILS DU PROJET" : "PROJECT DETAILS"}</p>
                  <dl>
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt>{metric.label}</dt>
                        <dd>{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className={styles.actions}>
                    <a
                      href={
                        project.sourceUrl.startsWith("/work")
                          ? project.sourceUrl
                          : project.liveUrl.startsWith("/work")
                          ? project.liveUrl
                          : `/work/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
                      }
                    >
                      {isFrench ? "Voir l’étude de cas" : "View Case Study"}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.ecosystem} aria-labelledby="ecosystem-title">
          <p className={styles.eyebrow}><span>16</span> / {isFrench ? "ANNUAIRE DES PROJETS" : "PROJECT DIRECTORY"}</p>
          <h2 id="ecosystem-title">All apps &amp; projects</h2>
          <p>
            {isFrench
              ? "Parcourez les applications par technologie. Chaque titre ouvre le projet ou son téléchargement."
              : "Browse the apps by technology. Each project title opens its live page or download."}
          </p>
          <div className={styles.directoryGroups}>
            {projectGroups.map((group) => (
              <section className={styles.directoryGroup} key={group.category} aria-label={group.category}>
                <div className={styles.groupHeading}>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                </div>
                {group.projects.length > 0 ? (
                  <ol className={styles.projectList}>
                    {group.projects.map((project, index) => (
                      <li key={project.name}>
                        <span className={styles.projectIndex}>{String(index + 1).padStart(2, "0")}</span>
                        <a
                          href={project.url}
                          target={project.url.startsWith("http") ? "_blank" : undefined}
                          rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                          download={project.download || undefined}
                        >
                          {project.name}
                          <span aria-hidden="true">{project.download ? " ↓" : " ↗"}</span>
                        </a>
                        {project.unavailable && (
                          <span className={styles.unavailableBadge}>
                            {isFrench ? "Indisponible" : "Unavailable"}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className={styles.noLinkedProjects}>Design practice and capabilities</p>
                )}
              </section>
            ))}
          </div>
        </section>

        <div className={styles.back}>
          <Link href="/projects" style={{ marginRight: 24 }}>
            {isFrench ? "→ Voir tous les projets classés" : "→ View Categorized Projects"}
          </Link>
          <Link href="/">{isFrench ? "← Retour au portfolio" : "← Back to the portfolio"}</Link>
        </div>
      </div>
    </main>
  );
}
