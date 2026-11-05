"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, prefersReducedMotion, EASE } from "@/lib/gsap";
import styles from "./About.module.css";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(`.${styles.canvas}`, {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: EASE.outExpo,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const scrollToContact = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className={styles.about} id="about" ref={root}>
      {/* Anchor for any backwards-compatible #hero link */}
      <span id="hero" style={{ position: "absolute", top: 0, left: 0 }} aria-hidden="true" />

      {/* Full-bleed stage fitting to screen */}
      <div className={styles.stage}>
        <div className={styles.canvas}>
          <Image
            src="/images/about/founder-desk-crisp.png"
            alt="From the Founder's Desk — Products that feel obvious. Design that isn't. Infant Ashil A, Founder & CEO, AAA isolutions."
            width={3414}
            height={1842}
            priority
            unoptimized
            className={styles.bannerImg}
          />

          {/* Interactive Button: "Explore Our Work →" */}
          <Link
            href="/#work"
            className={`${styles.hotspot} ${styles.btnWork}`}
            aria-label="Explore Our Work"
            title="Explore Our Work"
          >
            <span className={styles.srOnly}>Explore Our Work</span>
          </Link>

          {/* Interactive "Scroll to explore" */}
          <button
            type="button"
            onClick={scrollToContact}
            className={`${styles.hotspot} ${styles.btnScroll}`}
            aria-label="Scroll to explore"
            title="Scroll to explore"
          >
            <span className={styles.srOnly}>Scroll to explore</span>
          </button>
        </div>
      </div>

      {/* Screen-reader accessible transcript of the exact graphic */}
      <div className={styles.srOnly}>
        <p>Founder&apos;s Desk</p>
        <h2>Products that feel obvious. Design that isn&apos;t.</h2>
        <p>
          We build thoughtful digital experiences — where innovation meets simplicity.
        </p>
        <p>Infant Ashil A — Founder &amp; CEO, AAA isolutions</p>
        <p>20+ Projects Delivered · 10+ Countries Visited · 100% Client Satisfaction</p>
      </div>
    </section>
  );
}
