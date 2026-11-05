import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation · AAA isolutions",
  description:
    "Get in touch with AAA isolutions. Share your project, ideas, or collaboration inquiries with Infant Ashil A and the team.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className={styles.pageWrap}>
        <div className={styles.bgGlowTop} aria-hidden="true" />
        <ContactForm />
      </main>
    </>
  );
}

