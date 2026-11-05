"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Contact.module.css";
import { PERSON } from "@/lib/site";

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("UI/UX Design");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const fillTestData = () => {
    setName("Infant Ashil");
    setEmail("infantashil55@gmail.com");
    setMessage(
      "Hi, I'd like to discuss a digital experience, design, and development project with AAA isolutions!"
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate sending / processing (400ms for realistic tactile feedback)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCountdown(3);
    }, 400);
  };

  // 3-second live countdown and automatic redirect to Home page
  useEffect(() => {
    if (!isSubmitted) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((c) => c - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      router.push("/");
    }
  }, [isSubmitted, countdown, router]);

  return (
    <div className={styles.container}>
      {!isSubmitted ? (
        <>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.eyebrow}>
              <span>✦</span> Let&apos;s Connect · Start a Conversation
            </span>
            <h1 className={styles.title}>
              Let&apos;s build something <span className={styles.titleEm}>exceptional.</span>
            </h1>
            <p className={styles.subtitle}>
              Have an idea, project, or need design and engineering expertise?
              Send us a message and our team will get right back to you.
            </p>
          </div>

          {/* Form & Side Panel Layout */}
          <div className={styles.layout}>
            {/* Main Form Card */}
            <div className={styles.formCard}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#111111" }}>Send a Direct Inquiry</span>
                <button
                  type="button"
                  onClick={fillTestData}
                  style={{
                    background: "rgba(235, 65, 45, 0.08)",
                    border: "none",
                    color: "#eb412d",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                  title="Click to automatically fill with test email and message"
                >
                  ⚡ Auto-fill Test Data
                </button>
              </div>

              <form onSubmit={handleSubmit} className={styles.formGrid}>
                <div className={styles.rowTwo}>
                  {/* Name field */}
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      <span>Your Name</span>
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Infant Ashil"
                      className={styles.input}
                    />
                  </div>

                  {/* Email field */}
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      <span>Email Address</span>
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. test@example.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Subject / Service Selection */}
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>
                    <span>What can we help you with?</span>
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={styles.select}
                  >
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="App Development">App Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Software Development">Software Development</option>
                    <option value="SEO Optimization">SEO &amp; Growth</option>
                    <option value="General Inquiry">Other / General Collaboration</option>
                  </select>
                </div>

                {/* Message Text Box */}
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    <span>Your Message</span>
                    <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, goals, timeline, or whatever you have in mind..."
                    className={styles.textarea}
                  />
                </div>

                {/* Submit Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Side Information Panel */}
            <div className={styles.sidePanel}>
              <div className={styles.infoCard}>
                <h3>Direct Contact</h3>
                <p>
                  Prefer email or quick correspondence? Feel free to reach out directly anytime.
                </p>

                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉</span>
                    <div>
                      <div style={{ fontSize: "11px", color: "#888888", textTransform: "uppercase" }}>Gmail</div>
                      <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon} style={{ fontWeight: 800, fontSize: "14px" }}>in</span>
                    <div>
                      <div style={{ fontSize: "11px", color: "#888888", textTransform: "uppercase" }}>LinkedIn</div>
                      <a href={PERSON.sameAs[0]} target="_blank" rel="noreferrer">
                        Infant Ashil A
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon} style={{ fontWeight: 800, fontSize: "14px" }}>⌥</span>
                    <div>
                      <div style={{ fontSize: "11px", color: "#888888", textTransform: "uppercase" }}>GitHub</div>
                      <a href={PERSON.sameAs[1]} target="_blank" rel="noreferrer">
                        github.com/ashwiths
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📍</span>
                    <div>
                      <div style={{ fontSize: "11px", color: "#888888", textTransform: "uppercase" }}>Location</div>
                      <span>{PERSON.location} · Global Delivery</span>
                    </div>
                  </div>
                </div>

                <div className={styles.responseBadge}>
                  <span className={styles.pulseDot} />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* ============ SUCCESS CONFIRMATION SCREEN ============ */
        <div className={styles.successCard}>
          <div className={styles.successIconWrap}>
            <span>✓</span>
          </div>

          <h2 className={styles.successHeading}>
            Congrats! Thanks for contacting!
          </h2>

          <p className={styles.successSubheading}>
            We will shortly contact you.
          </p>

          <div className={styles.submittedSummary}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Sender:</span>
              <span>{name} ({email})</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Subject:</span>
              <span className={styles.summaryVal}>{subject}</span>
            </div>
          </div>

          {/* Small font redirect notice at bottom as requested */}
          <div className={styles.redirectNotice}>
            <div className={styles.redirectProgress}>
              <div
                className={styles.redirectBar}
                style={{ width: `${(countdown / 3) * 100}%` }}
              />
            </div>
            <p className={styles.redirectText}>
              Redirecting to home page in{" "}
              <span className={styles.redirectCountdown}>{countdown}s</span>...
            </p>
            <Link href="/" className={styles.homeLinkBtn}>
              Click here to go to Home now →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}