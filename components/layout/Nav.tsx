"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollToHash, getLenis } from "@/lib/lenis";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "@/lib/i18n";
import styles from "./Nav.module.css";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isFoundersDesk = pathname === "/founders-desk" || pathname === "/about";
  const isContactPage = pathname === "/contact";
  const [active, setActive] = useState<string | null>(
    isFoundersDesk ? "founders-desk" : isContactPage ? "contact" : null
  );
  /* mobile drawer — the desktop pill can't hold four links plus the toggle
     at phone widths, so below 900px navigation lives behind a menu button
     rather than being hidden entirely (which is what it was doing) */
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { key: "nav.home", href: isHome ? "#home" : "/", watch: null },
    { key: "nav.work", href: isHome ? "#work" : "/#work", watch: "work" },
    { key: "nav.credentials", href: isHome ? "#credentials" : "/#credentials", watch: "credentials" },
    { key: "nav.contact", href: "/contact", watch: "contact" },
    { key: "nav.foundersDesk", href: "/founders-desk", watch: "founders-desk" },
  ];

  const handleLinkClick = (l: (typeof links)[0]) => {
    if (menuOpen) setMenuOpen(false);

    if (l.watch === null && isHome) {
      scrollToHash("#home");
    } else if (l.watch === "work" && isHome) {
      scrollToHash("#work");
    } else if (l.watch === "credentials" && isHome) {
      scrollToHash("#credentials");
    } else if (l.watch === "contact" && isContactPage) {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0, { duration: 0.8 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (l.watch === "founders-desk" && isFoundersDesk) {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0, { duration: 0.8 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* sync active state if route changes */
  useEffect(() => {
    if (isFoundersDesk) {
      setActive("founders-desk");
    } else if (isContactPage) {
      setActive("contact");
    }
  }, [isFoundersDesk, isContactPage]);

  /* close on Escape, and lock the page behind the open drawer */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* never leave the drawer open behind a resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const close = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      /* The header is PERSISTENT: it never hides. It only condenses slightly
         once the page has been scrolled, which keeps it feeling part of the
         page rather than a floating panel. */
      ScrollTrigger.create({
        start: "top top-=40",
        onUpdate: (self) => {
          nav.classList.toggle(styles.scrolled, self.scroll() > 40);
        },
        onLeaveBack: () => nav.classList.remove(styles.scrolled),
      });

      /* scroll-spy: the nav reflects where you actually are on the home page */
      if (isHome) {
        const spies = links
          .filter(
            (l) =>
              l.watch &&
              l.watch !== "founders-desk" &&
              l.watch !== "about" &&
              document.getElementById(l.watch)
          )
          .map((l) =>
            ScrollTrigger.create({
              trigger: `#${l.watch}`,
              start: "top 55%",
              end: "bottom 45%",
              onToggle: (self) => {
                if (self.isActive) setActive(l.watch);
              },
            })
          );
        const top = ScrollTrigger.create({
          start: 0,
          end: () => window.innerHeight * 1.2,
          onToggle: (self) => {
            if (self.isActive) setActive(null);
          },
        });

        return () => {
          spies.forEach((s) => s.kill());
          top.kill();
        };
      }
    }, nav);

    return () => ctx.revert();
  }, [isHome]);

  return (
    <header className={styles.wrap} ref={ref}>
      <div className={styles.cap}>
        <Link
          href={isHome ? "#home" : "/"}
          className={styles.logo}
          aria-label={t("nav.home")}
          onClick={() => {
            if (isHome) scrollToHash("#home");
          }}
        >
          AAA isolutions<i>.</i>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => {
            const isOn = isFoundersDesk
              ? l.watch === "founders-desk"
              : isContactPage
              ? l.watch === "contact"
              : l.watch
              ? l.watch === active
              : !active && isHome;
            return (
              <Link
                key={l.key}
                href={l.href}
                className={isOn ? styles.on : ""}
                aria-current={isOn ? "page" : undefined}
                onClick={() => handleLinkClick(l)}
              >
                <span className={styles.roll}>
                  <span>{t(l.key)}</span>
                  <span aria-hidden="true">{t(l.key)}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.right}>
          <LanguageToggle />
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <div
        className={`${styles.sheet} ${menuOpen ? styles.sheetOpen : ""}`}
        id="mobile-nav"
        hidden={!menuOpen}
      >
        <nav aria-label="Primary mobile">
          {links.map((l) => {
            const isOn = isFoundersDesk
              ? l.watch === "founders-desk"
              : isContactPage
              ? l.watch === "contact"
              : l.watch
              ? l.watch === active
              : !active && isHome;
            return (
              <Link
                key={l.key}
                href={l.href}
                className={isOn ? styles.sheetOn : ""}
                aria-current={isOn ? "page" : undefined}
                onClick={() => handleLinkClick(l)}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>
      </div>
      <button
        type="button"
        className={`${styles.scrim} ${menuOpen ? styles.scrimOn : ""}`}
        aria-label={t("nav.close")}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
