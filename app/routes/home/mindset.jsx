import { useState } from 'react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './mindset.module.css';

const MINDSET_SLIDES = [
  {
    index: '01',
    statement: 'Build systems, not just interfaces.',
    elaboration:
      'A beautiful frontend is brittle without a resilient foundation. Real engineering is about concurrency, connection pooling, graceful error boundaries, and state consistency.',
    pillar: 'ARCHITECTURAL RESILIENCE',
    telemetry: 'CONCURRENCY // POOLING // RECOVERY',
  },
  {
    index: '02',
    statement: 'Turn ideas into working software.',
    elaboration:
      'Ideas are abundant; deployment is rare. The discipline is in moving from concept to executable code, handling edge cases, and delivering working software that users rely upon.',
    pillar: 'EXECUTION RIGOR',
    telemetry: 'PROTOTYPE → PRODUCTION → SCALE',
  },
  {
    index: '03',
    statement: 'Learn by solving real problems.',
    elaboration:
      'Tutorials provide syntax; reality provides constraints. Mastering Discord sharding, PDF coordinate math, and database transactions comes from debugging unyielding real-world friction.',
    pillar: 'EMPIRICAL MASTERY',
    telemetry: 'CONSTRAINT-DRIVEN LEARNING',
  },
  {
    index: '04',
    statement: 'Make complexity understandable.',
    elaboration:
      'Engineering mastery is not about writing inscrutable code. It is about distilling multi-layered distributed operations into clear modular boundaries, self-documenting APIs, and elegant tools.',
    pillar: 'SYSTEM CLARITY',
    telemetry: 'DECOUPLED // MODULAR // COGS',
  },
  {
    index: '05',
    statement: 'Keep building.',
    elaboration:
      'Every completed project is merely the baseline for what comes next. Rigor, daily algorithmic practice, and continual system prototyping are a perpetual craft.',
    pillar: 'PERPETUAL CRAFT',
    telemetry: 'ITERATION // ENDURANCE // SCALE',
  },
];

export function Mindset({ id, sectionRef }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const slide = MINDSET_SLIDES[activeIdx];

  return (
    <section id={id} ref={sectionRef} className={styles.mindsetSection} tabIndex={-1}>
      <div className={styles.container}>
        {/* Presentation Slide Header */}
        <header className={styles.header}>
          <div className={styles.slideMarker}>
            <span className={styles.chapterNum}>04 // HOW I THINK</span>
            <span className={styles.chapterTag}>ENGINEERING PRINCIPLES</span>
          </div>

          <Heading level={2} as="h2" className={styles.title}>
            <DecoderText text="The Engineering Philosophy" />
          </Heading>

          <Text size="l" as="p" className={styles.subtitle}>
            Software is an exercise in managing complexity and honoring failure modes. These principles guide every architecture I design.
          </Text>
        </header>

        {/* Monolithic Statement Card */}
        <div className={styles.stageFrame}>
          <div className={styles.stageTop}>
            <div className={styles.pillarTag}>
              <span className={styles.pillarDot} />
              <span>{slide.pillar}</span>
            </div>
            <div className={styles.telemetryTag}>{slide.telemetry}</div>
          </div>

          <div className={styles.statementWrapper}>
            <span className={styles.slideBigNumber}>{slide.index}</span>
            <h3 className={styles.statementText}>"{slide.statement}"</h3>
          </div>

          <p className={styles.elaborationText}>{slide.elaboration}</p>

          {/* Slide Navigation Selectors */}
          <div className={styles.selectorBar}>
            {MINDSET_SLIDES.map((s, idx) => (
              <button
                key={s.index}
                type="button"
                className={styles.selectorButton}
                data-active={idx === activeIdx}
                onClick={() => setActiveIdx(idx)}
              >
                <span className={styles.selectorNum}>{s.index}</span>
                <span className={styles.selectorLabel}>{s.statement.split(',')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
