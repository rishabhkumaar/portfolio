import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './whats-next.module.css';

export function WhatsNext({ id, sectionRef }) {
  return (
    <section id={id} ref={sectionRef} className={styles.whatsNextSection} tabIndex={-1}>
      <div className={styles.container}>
        {/* Presentation Slide Header */}
        <header className={styles.header}>
          <div className={styles.slideMarker}>
            <span className={styles.chapterNum}>08 // WHAT'S NEXT</span>
            <span className={styles.chapterTag}>THE FINALE</span>
          </div>

          <h2 className={styles.monumentalQuestion}>WHAT'S NEXT?</h2>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteLineOne}>
              "The story doesn't end with what I've built."
            </p>
            <div className={styles.quoteDivider} />
            <p className={styles.quoteLineTwo}>
              "It begins with what I build next."
            </p>
          </div>

          {/* Narrative Summary Vector Ticker */}
          <div className={styles.progressionSummary}>
            <span className={styles.progressionItem}>UNIVERSITY</span>
            <span className={styles.progressionArrow}>→</span>
            <span className={styles.progressionItem}>CODE</span>
            <span className={styles.progressionArrow}>→</span>
            <span className={styles.progressionItem}>PROJECTS</span>
            <span className={styles.progressionArrow}>→</span>
            <span className={styles.progressionItem}>RISHOURCE</span>
            <span className={styles.progressionArrow}>→</span>
            <span className={styles.progressionItem}>ENGINEERING</span>
            <span className={styles.progressionArrow}>→</span>
            <span className={styles.progressionItemHighlight}>NEXT</span>
          </div>
        </header>

        {/* Finale Contact Card */}
        <div className={styles.finaleCard}>
          <div className={styles.finaleBadge}>
            <span className={styles.badgePulse} />
            <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
          </div>

          <h3 className={styles.finaleName}>RISHABH KUMAR</h3>
          <p className={styles.finaleRole}>
            Computer Science Undergraduate · Software Engineer · Full-Stack Developer
          </p>

          <p className={styles.finalePrompt}>
            I am currently open to software engineering internships, systems architecture collaborations, and ambitious technical projects.
          </p>

          <div className={styles.contactDock}>
            <a
              href="mailto:kumar.r.070706@gmail.com"
              className={styles.contactPill}
              data-primary="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>kumar.r.070706@gmail.com</span>
            </a>

            <a
              href="https://github.com/rishabhkumaar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactPill}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub / rishabhkumaar</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rishabhkumaar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactPill}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn / rishabhkumaar</span>
            </a>
          </div>

          <div className={styles.resumeFooterAction}>
            <a
              href="/rishabh-kumar-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeAnchor}
            >
              <span>View Technical Curriculum Vitae (PDF) ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
