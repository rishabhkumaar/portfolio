import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import sprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import styles from './rishource-reveal.module.css';

const CAPABILITY_CHIPS = [
  'MODERATION',
  'AI (OPENAI)',
  'WEATHER TELEMETRY',
  'TICKETING',
  'LEVELING',
  'LOGGING',
  'SERVER MANAGEMENT',
  'COGS ARCHITECTURE',
];

export function RishourceReveal({ id, sectionRef }) {
  return (
    <section id={id} ref={sectionRef} className={styles.rishourceSection} tabIndex={-1}>
      <div className={styles.container}>
        {/* Presentation Slide Header */}
        <header className={styles.header}>
          <div className={styles.slideMarker}>
            <span className={styles.chapterNum}>05 // THE CENTERPIECE</span>
            <span className={styles.chapterTag}>FLAGSHIP PRODUCT REVEAL</span>
          </div>

          <Heading level={1} as="h2" className={styles.monumentalTitle}>
            <DecoderText text="RISHOURCE" />
          </Heading>

          <p className={styles.productSubtitle}>
            Modular Discord Bot &amp; Full-Stack Server Management Platform
          </p>

          <Text size="l" as="p" className={styles.missionText}>
            A modular Discord ecosystem built to bring automation, intelligence, and server management together — engineered with AutoShardedBot concurrency, a 15-minute Node-Cache TTL, and PostgreSQL persistence.
          </Text>
        </header>

        {/* Interactive Floating Capability Tags */}
        <div className={styles.capabilitiesTrack}>
          {CAPABILITY_CHIPS.map((chip, idx) => (
            <div key={chip} className={styles.capabilityChip} style={{ animationDelay: `${idx * 120}ms` }}>
              <span className={styles.chipGlowDot} />
              <span>{chip}</span>
            </div>
          ))}
        </div>

        {/* Central Product Showcase Presentation Mockup */}
        <div className={styles.deviceShowcase}>
          <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <div className={styles.browserAddress}>
                <span>https://rishource.dev/dashboard/control-plane</span>
              </div>
              <div className={styles.browserStatus}>
                <span className={styles.statusPulse} />
                <span>SHARD 01 ONLINE</span>
              </div>
            </div>

            <div className={styles.viewport}>
              <img
                src={sprLessonBuilderDarkLarge}
                alt="Rishource Management Control Plane Dashboard"
                className={styles.dashboardImage}
                loading="lazy"
              />
              <div className={styles.viewportOverlay} />
            </div>
          </div>
        </div>

        {/* Architectural Highlights in Concise Presentation Grid */}
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <span className={styles.cardIndex}>01</span>
            <h4 className={styles.cardTitle}>AutoShardedBot Gateway</h4>
            <p className={styles.cardDesc}>
              Decoupled multi-shard gateway handling capable of scaling across thousands of guilds without latency spikes.
            </p>
          </div>

          <div className={styles.highlightCard}>
            <span className={styles.cardIndex}>02</span>
            <h4 className={styles.cardTitle}>15-min Node-Cache TTL</h4>
            <p className={styles.cardDesc}>
              Shields the Next.js control plane from Discord API 429 rate limits, with stale-while-revalidate fallbacks.
            </p>
          </div>

          <div className={styles.highlightCard}>
            <span className={styles.cardIndex}>03</span>
            <h4 className={styles.cardTitle}>Modular Hot-Reload Cogs</h4>
            <p className={styles.cardDesc}>
              Dynamic extension architecture allowing features to update in real time with zero downtime.
            </p>
          </div>

          <div className={styles.highlightCard}>
            <span className={styles.cardIndex}>04</span>
            <h4 className={styles.cardTitle}>PostgreSQL &amp; Prisma ORM</h4>
            <p className={styles.cardDesc}>
              High-efficiency connection pooling and structured schema management for high write frequencies.
            </p>
          </div>
        </div>

        {/* Action Anchor Row */}
        <div className={styles.actionRow}>
          <a
            href="/projects/smart-sparrow"
            className={styles.primaryAction}
          >
            <span>Read Architecture Breakdown</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://github.com/rishabhkumaar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryAction}
          >
            <span>GitHub Repository ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
