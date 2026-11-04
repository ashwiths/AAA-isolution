"use client";

import Link from "next/link";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLang } from "@/lib/i18n";
import styles from "@/app/work/featured-work.module.css";

type ProjectItem = {
  name: string;
  url: string;
  tech: string;
  type: "live" | "download";
  badge?: string;
  downloadUnavailable?: boolean;
};

type ProjectGroup = {
  category: string;
  description: string;
  projects: ProjectItem[];
  skills?: string[];
};

const PROJECT_GROUPS: ProjectGroup[] = [
  {
    category: "React",
    description: "Interactive web applications, utilities, and high-performance WebGL/creative experiences",
    projects: [
      { name: "Bible", url: "https://bible.savee.space/", tech: "React · Three.js", type: "live" },
      { name: "MalwareScan", url: "https://safe.savee.space/", tech: "React · Security API", type: "live" },
      { name: "AshDrop", url: "https://drop.savee.space/", tech: "React · File Transfer", type: "live" },
      { name: "FontPair", url: "https://font.savee.space/", tech: "React · Typography", type: "live" },
      { name: "TypeMaster", url: "https://type.savee.space/", tech: "React · Speed Test", type: "live" },
      { name: "Heal & Play", url: "https://www.savee.space/", tech: "React · Micro-donations", type: "live" },
      { name: "BlueLab", url: "https://www.bluelabtech.space/", tech: "React · Lab Tech", type: "live" },
      { name: "NetCheck", url: "https://check.bluelabtech.space/", tech: "React · Network Utility", type: "live" },
      { name: "DevKit", url: "https://dev.bluelabtech.space/", tech: "React · Dev Tools", type: "live" },
      { name: "ProjectHub", url: "https://projecthub.bluelabtech.space/", tech: "React · Workspace", type: "live" },
      { name: "SheetHub", url: "https://sheethub.bluelabtech.space/", tech: "React · Data Engine", type: "live" },
    ],
  },
  {
    category: "React Native",
    description: "Mobile applications built for Android",
    projects: [
      {
        name: "Crickstreet",
        url: "https://www.ashil.space/crickstreet.apk",
        tech: "React Native · APK",
        type: "download",
        downloadUnavailable: true,
      },
      {
        name: "Todo",
        url: "https://www.ashil.space/todo.apk",
        tech: "React Native · APK",
        type: "download",
        downloadUnavailable: true,
      },
    ],
  },
  {
    category: "Windows Application",
    description: "Native desktop performance built with modern systems tools (Tauri, Rust, Vite)",
    projects: [
      {
        name: "Custon",
        url: "https://custon.savee.space/",
        tech: "Tauri · Rust · Vite",
        type: "live",
      },
    ],
  },
  {
    category: "Antigravity Extension",
    description: "Account management extension for Google Antigravity IDE (TypeScript, VS Code API)",
    projects: [
      {
        name: "Custom Switcher",
        url: "https://open-vsx.org/extension/ashil/custom-switcher",
        tech: "TypeScript · VS Code API",
        type: "live",
      },
    ],
  },
  {
    category: "Chrome Extension",
    description: "Browser profile and session management built on Manifest V3",
    projects: [
      {
        name: "ChromeSwitch",
        url: "https://chromeswitch.savee.space/",
        tech: "Manifest V3",
        type: "live",
      },
    ],
  },
  {
    category: "UI/UX Design",
    description: "End-to-end product design, verified design systems, KPI dashboards, and AI interaction models",
    projects: [
      {
        name: "Website Development",
        url: "/work/heeding-marketplace",
        tech: "React · Next.js · UX & SEO Optimization",
        type: "live",
      },
      {
        name: "Software Development",
        url: "/work/lockai",
        tech: "Node.js · Python · Custom Systems & CRM",
        type: "live",
        badge: "🏆 Enterprise Ready",
      },
      {
        name: "Mobile App Development",
        url: "/work/price-intelligence",
        tech: "React Native · Flutter · iOS & Android",
        type: "live",
      },
      {
        name: "E-commerce Development",
        url: "/work/oigetit-hitl",
        tech: "Shopify · WooCommerce · Magento · Payment Gateways",
        type: "live",
      },
      {
        name: "UI/UX Design",
        url: "/work/seo-growth",
        tech: "Figma · Design Systems · Wireframing & Prototyping",
        type: "live",
      },
      {
        name: "SEO",
        url: "/work/avengers-doomsday",
        tech: "Technical SEO · Organic Growth · On-Page & Link Building",
        type: "live",
      },
      {
        name: "Graphic Design",
        url: "/work/got-cinematic",
        tech: "Visual Identity · Branding · Marketing Collateral",
        type: "live",
      },
      {
        name: "Logo Design",
        url: "/work/baahubali",
        tech: "Brand Marks · Typography · Vector Guidelines",
        type: "live",
      },
      {
        name: "Business Card Design",
        url: "/work/ghost-rider",
        tech: "Print Collateral · Premium Finishes · Brand Identity",
        type: "live",
      },
      {
        name: "Sticker Design",
        url: "/work/habu",
        tech: "Vector Art · Die-Cut · Merchandise & Vinyl Print",
        type: "live",
      },
      {
        name: "Poster Design",
        url: "/work/vistarail",
        tech: "Large-Format Print · Editorial Layout · Event Visuals",
        type: "live",
      },
      {
        name: "Presentation Design",
        url: "/work/reverie",
        tech: "Pitch Decks · Executive Slides · Data Visualization",
        type: "live",
      },
      {
        name: "Email Design",
        url: "/work/workflow-automation",
        tech: "Responsive HTML Email · Klaviyo/Mailchimp · CRO",
        type: "live",
      },
      {
        name: "Landing Page Design",
        url: "/work/spider-man",
        tech: "High-Converting Pages · CRO · A/B Testing & Speed",
        type: "live",
      },
    ],
    skills: [
      "Figma",
      "Design systems",
      "Wireframing",
      "Prototyping",
      "User research",
    ],
  },
];

export default function FeaturedProjects() {
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
          <Link href="/work">{isFrench ? "Projets à la une" : "Featured Work"}</Link>
          <Link href="/projects" aria-current="page" className={styles.current}>
            {isFrench ? "Annuaire projets" : "Featured Projects"}
          </Link>
        </nav>
        <LanguageToggle />
      </header>

      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            <span>01</span> / {isFrench ? "PROJETS EN VEDETTE" : "FEATURED PROJECTS"}
          </p>
          <h1>
            {isFrench ? (
              <>
                Projets classés.<br />
                <em>Technologie &amp; valeur.</em>
              </>
            ) : (
              <>
                Featured Projects.<br />
                <em>Grouped by technology.</em>
              </>
            )}
          </h1>
          <p className={styles.intro}>
            {isFrench
              ? "Chaque projet avec sa catégorie, sa technologie, et son lien direct vers la page en ligne ou son téléchargement."
              : "Every project categorized with its technology and working destination to its live application or download."}
          </p>
        </div>

        <section className={styles.ecosystem} aria-label={isFrench ? "Groupes de projets" : "Project Groups"}>
          <p className={styles.eyebrow}>
            <span>06</span> / {isFrench ? "CATÉGORIES" : "CATEGORIES"}
          </p>
          <h2>{isFrench ? "Tous les projets par technologie" : "All Projects by Category"}</h2>
          <p>
            {isFrench
              ? "Cliquez sur chaque titre de projet pour ouvrir sa page en ligne, son étude de cas ou son téléchargement."
              : "Click any project title to open its live application, case study, or download page. Numbered sequentially within each group."}
          </p>

          <div className={styles.directoryGroups}>
            {PROJECT_GROUPS.map((group) => (
              <section className={styles.directoryGroup} key={group.category} aria-label={group.category}>
                <div className={styles.groupHeading}>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                </div>

                {group.projects.length > 0 && (
                  <ol className={styles.projectList}>
                    {group.projects.map((project, index) => (
                      <li key={project.name} className={styles.projectItem}>
                        <div className={styles.projectLeft}>
                          <span className={styles.projectIndex}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <a
                            href={project.url}
                            target={project.url.startsWith("http") ? "_blank" : undefined}
                            rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                            className={styles.projectTitle}
                            download={project.type === "download" && !project.downloadUnavailable ? true : undefined}
                          >
                            {project.name}
                          </a>
                          {project.badge && (
                            <span className={styles.badgeTag}>{project.badge}</span>
                          )}
                        </div>

                        <div className={styles.projectMeta}>
                          <span className={styles.techTag}>{project.tech}</span>

                          {project.downloadUnavailable ? (
                            <span
                              className={styles.unavailableBadge}
                              title={
                                isFrench
                                  ? "Le fichier de téléchargement est actuellement indisponible"
                                  : "Download file is currently unavailable"
                              }
                            >
                              ⚠ {isFrench ? "Téléchargement indisponible" : "Download unavailable"}
                            </span>
                          ) : project.type === "download" ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              download
                              className={`${styles.linkAction} ${styles.downloadLink}`}
                              aria-label={`${project.name} ${isFrench ? "Télécharger" : "Download"}`}
                            >
                              {isFrench ? "Télécharger" : "Download"} ↓
                            </a>
                          ) : (
                            <a
                              href={project.url}
                              target={project.url.startsWith("http") ? "_blank" : undefined}
                              rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                              className={`${styles.linkAction} ${styles.liveLink}`}
                              aria-label={`${project.name} ${isFrench ? "Ouvrir" : "Live"}`}
                            >
                              {project.url.startsWith("/work")
                                ? (isFrench ? "Étude de cas" : "Case Study")
                                : (isFrench ? "Visiter" : "Live")} ↗
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                )}

                {group.skills && (
                  <div style={{ marginTop: group.projects.length > 0 ? 20 : 0 }}>
                    <p className={styles.noLinkedProjects}>
                      {isFrench ? "Compétences de design répertoriées :" : "Listed design skills & capabilities:"}
                    </p>
                    <ul className={styles.skillsList} aria-label="UI/UX Design Skills">
                      {group.skills.map((skill) => (
                        <li key={skill} className={styles.skillBadge}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>

        <div className={styles.back}>
          <Link href="/work">
            {isFrench ? "← Voir les projets à la une" : "← View Featured Work"}
          </Link>
          <Link href="/">
            {isFrench ? "← Retour à l’accueil" : "← Back to Home"}
          </Link>
        </div>
      </div>
    </main>
  );
}
