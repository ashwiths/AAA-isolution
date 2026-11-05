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
  const [countdown, setCountdown] = useState(10);

  // Quick auto-fill test data
  const fillTestData = () => {
    setName("INFANT ASHIL.A");
    setEmail("727723eucs078@skcet.ac.in");
    setSubject("UI/UX Design");
    setMessage("Hi, I am interested in collaborating on a digital experience and UI/UX project with AAA isolutions!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      e.preventDefault();
      return;
    }

    // Save inquiry to localStorage for offline resilience
    try {
      const record = {
        name: name.trim(),
        email: email.trim(),
        subject,
        message: message.trim(),
        date: new Date().toISOString(),
      };
      const saved = JSON.parse(localStorage.getItem("aaa_inquiries") || "[]");
      localStorage.setItem("aaa_inquiries", JSON.stringify([record, ...saved]));
    } catch {}

    setIsSubmitting(true);

    // Fast tactile response: immediately transition in 150ms without blocking on network lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCountdown(10);
    }, 150);

    // Background server dispatch (non-blocking, keepalive)
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {}
    // Native form submission will complete simultaneously into the hidden iframe
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
      {/* Hidden target iframe: captures the submission response instantly without reloading or failing */}
      <iframe
        name="contact_hidden_iframe"
        id="contact_hidden_iframe"
        title="Form Target"
        style={{ display: "none", width: 0, height: 0, border: 0 }}
        tabIndex={-1}
        aria-hidden="true"
      />

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

              {/* Native form action POSTs to FormSubmit through the hidden iframe */}
              <form
                action="https://formsubmit.co/infantashil55@gmail.com"
                method="POST"
                target="contact_hidden_iframe"
                onSubmit={handleSubmit}
                className={styles.formGrid}
              >
                {/* Hidden FormSubmit configuration parameters */}
                <input
                  type="hidden"
                  name="_subject"
                  value={`🔔 [AAA isolutions] ${name || "New Lead"} is interested in ${subject || "UI/UX Design"}!`}
                />
                <input type="hidden" name="_replyto" value={email} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="Notification"
                  value={`${name || "User"} is interested in ${subject} and contacted AAA isolutions!`}
                />

                <div className={styles.rowTwo}>
                  {/* Name field */}
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      <span>Your Name</span>
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. INFANT ASHIL.A"
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
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. 727723eucs078@skcet.ac.in"
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
                    name="subject"
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
                    name="message"
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
                    <span>Sending...</span>
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
              <span className={styles.summaryLabel}>Notification:</span>
              <span className={styles.summaryVal}>
                {name} is interested in {subject}
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Sender:</span>
              <span>
                {name} ({email})
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Delivered To:</span>
              <span>{PERSON.email}</span>
            </div>
          </div>

          {/* Quick open in Gmail option */}
          <div style={{ marginBottom: "20px" }}>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=infantashil55@gmail.com&su=${encodeURIComponent(
                `🔔 [AAA isolutions] ${name || "Client"} is interested in ${subject}!`
              )}&body=${encodeURIComponent(
                `Client Name: ${name}\nClient Email: ${email}\nInterested In: ${subject}\n\nMessage:\n${message}\n\nStatus: ${name} is interested in ${subject} and contacted AAA isolutions!`
              )}`}
              target="_blank"
              rel="noreferrer"
              className={styles.gmailDirectCardBtn}
            >
              ✉ Open in Gmail to send / verify
            </a>
          </div>

          <div className={styles.activationNotice}>
            💡 <b>Note:</b> If this is your first submission, check your <b>Spam/Junk</b> or <b>Promotions</b> folder in <b>infantashil55@gmail.com</b> for the FormSubmit verification email and click <b>&quot;Activate Form&quot;</b> once to enable direct inbox delivery!
          </div>

          {/* Small font redirect notice at bottom as requested */}
          <div className={styles.redirectNotice}>
            <div className={styles.redirectProgress}>
              <div
                className={styles.redirectBar}
                style={{ width: `${(countdown / 10) * 100}%` }}
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
