"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import styles from "./ServicesTicker.module.css";

const SERVICES = [
  "App Development",
  "UI/UX Design",
  "Graphic Design",
  "SEO",
  "Software Development",
  "Landing Page Design",
];

export default function ServicesTicker({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    let x = 0;
    const baseSpeed = 70; // px per second continuous drift
    let lastY = window.scrollY;
    let lastT = performance.now();
    let scrollBoost = 0;

    const wrap = gsap.utils.wrap(-50, 0);

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;

      // Read scroll velocity
      const y = window.scrollY;
      const vRaw = dt > 0 ? (y - lastY) / dt : 0;
      lastY = y;

      scrollBoost += (gsap.utils.clamp(-2500, 2500, vRaw) - scrollBoost) * 0.12;

      // Scrolling down accelerates leftward; scrolling up reverses
      const accel = 1 + Math.abs(scrollBoost) / 1000;
      const dir = scrollBoost < -30 ? -1 : 1;

      // Total delta in pixels
      const deltaPx = baseSpeed * dir * accel * dt;

      // 50% translation = half track width (one full group)
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) {
        x -= (deltaPx / halfWidth) * 50;
        gsap.set(track, { xPercent: wrap(x) });
      }
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div
      className={`${styles.ticker} ${className || ""}`}
      ref={root}
      aria-label="Services: App Development, UI/UX Design, Graphic Design, SEO, Software Development, Landing Page Design"
    >
      <div className={styles.track} ref={trackRef}>
        {/* Group 1 */}
        <div className={styles.group}>
          {SERVICES.map((s, i) => (
            <span key={`g1-${i}`} className={styles.item}>
              {s}
              <span className={styles.sep} aria-hidden="true" />
            </span>
          ))}
        </div>

        {/* Group 2 (seamless clone for 50% wrap) */}
        <div className={styles.group} aria-hidden="true">
          {SERVICES.map((s, i) => (
            <span key={`g2-${i}`} className={styles.item}>
              {s}
              <span className={styles.sep} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
