"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion, EASE } from "@/lib/gsap";
import styles from "./About.module.css";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(`.${styles.bannerImg}`, {
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

  return (
    <section className={styles.about} id="about" ref={root}>
      {/* Anchor for any backwards-compatible #hero link */}
      <span id="hero" style={{ position: "absolute", top: 0, left: 0 }} aria-hidden="true" />

      {/* Full-bleed stage fitting to screen */}
      <div className={styles.stage}>
        <div className={styles.frame}>
          <Image
            src="/images/about/founder-ultra.png"
            alt="From the Founder's Desk — Infant Ashil A, Founder & CEO, AAA Solutions. Building products that make a difference."
            width={3072}
            height={1659}
            priority
            unoptimized
            className={styles.bannerImg}
          />
        </div>
      </div>

      {/* Screen-reader accessible transcript of the exact graphic */}
      <div className={styles.srOnly}>
        <p>From the Founder&apos;s Desk</p>
        <h2>Building products that make a difference.</h2>
        <p>
          Thoughts, ideas and updates from the journey of building, learning and growing at AAA solutions.
        </p>
        <p>Infant Ashil A — Founder &amp; CEO, AAA Solutions</p>
        <p>Build · Ship · Scale | Tech for a Better Tomorrow</p>
      </div>
    </section>
  );
}
