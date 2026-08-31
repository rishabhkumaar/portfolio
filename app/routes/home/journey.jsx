import { useState } from 'react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './journey.module.css';

const PROGRESSION_STAGES = [
  {
    step: '01',
    phase: 'LEARNING',
    title: 'Curiosity, Math & Foundations',
    year: '2023 – 2024',
    institution: 'PM Shree KV No. 2 Ambala Cantt',
    metric: '90.6%',
    metricLabel: 'CBSE XII (PCM + CS)',
    description:
      'Grounded in mathematics, physics, and computational thinking. Secured 90.6% with merit recognition, discovering a passion for how code controls hardware and logic.',
    tags: ['Mathematics', 'Physics', 'Python Basics', 'Algorithms'],
  },
  {
    step: '02',
    phase: 'PROGRAMMING',
    title: 'The Algorithmic Crucible',
    year: '2024',
    institution: 'Competitive Problem Solving',
    metric: '200+',
    metricLabel: 'Problems Solved',
    description:
      'Mastered memory layouts and pointer arithmetic in C/C++, object-oriented structures, and asymptotic optimizations. Earned HackerRank Gold in Python and Silver in C & SQL.',
    tags: ['C++', 'C', 'Python', 'LeetCode 50-Days', 'HackerRank Gold'],
  },
  {
    step: '03',
    phase: 'BUILDING PROJECTS',
    title: 'Turning Theory Into Software',
    year: '2024 – 2025',
    institution: 'Full-Stack Web Engineering',
    metric: '3',
    metricLabel: 'Production Systems',
    description:
      'Engineered interactive user tools: Weather Now (canvas telemetry), Courses Glance (PDF.js vector engine), and Portfolio 2.0 (an Ubuntu web desktop window manager).',
    tags: ['React', 'Next.js', 'PDF.js', 'Chart.js', 'Firestore'],
  },
  {
    step: '04',
    phase: 'ENGINEERING SYSTEMS',
    title: 'Concurrency, Caching & Failure Modes',
    year: '2025 – Present',
    institution: 'Lovely Professional University (LPU)',
    metric: '9.89',
    metricLabel: 'CGPA / 10',
    description:
      'Enrolled in B.Tech CSE at LPU. Shifted focus from isolated algorithms to distributed reliability: asynchronous event loops, PostgreSQL pooling, connection lifecycle, and rate limits.',
    tags: ['AsyncIO', 'PostgreSQL', 'Prisma ORM', 'Node-Cache', 'REST APIs'],
  },
  {
    step: '05',
    phase: 'RISHOURCE',
    title: 'The Flagship Concurrency Climax',
    year: '2025 – 2026',
    institution: 'Community & Bot Engineering',
    metric: 'AutoShard',
    metricLabel: 'Architecture',
    description:
      'Architected Rishource: a modular Discord automation bot and Next.js control plane with 15-minute Node-Cache TTL, token bucket rate limit handling, and hot-swappable Cogs.',
    tags: ['discord.py', 'Next.js 14', 'PostgreSQL', 'OpenAI', 'Modular Cogs'],
  },
  {
    step: '06',
    phase: "WHAT'S NEXT",
    title: 'Large-Scale Distributed Software',
    year: '2026 & Beyond',
    institution: 'Future Horizons',
    metric: 'Scale',
    metricLabel: 'High-Impact Systems',
    description:
      'Expanding into high-throughput distributed microservices, low-latency stream architectures, autonomous agent workflows, and mission-critical cloud infrastructure.',
    tags: ['Distributed Systems', 'Cloud Native', 'AI Workflows', 'Resilience'],
  },
];

export function Journey({ id, sectionRef }) {
  const [activeStageIndex, setActiveStageIndex] = useState(3);
  const activeStage = PROGRESSION_STAGES[activeStageIndex];

  return (
    <section id={id} ref={sectionRef} className={styles.journeySection} tabIndex={-1}>
      <div className={styles.container}>
        {/* Presentation Slide Header */}
        <header className={styles.header}>
          <div className={styles.slideMarker}>
            <span className={styles.chapterNum}>02 // THE BEGINNING</span>
            <span className={styles.chapterTag}>NARRATIVE TIMELINE</span>
          </div>

          <Heading level={2} as="h2" className={styles.title}>
            <DecoderText text="Where I Started & How I Progressed" />
          </Heading>

          <Text size="l" as="p" className={styles.subtitle}>
            A continuous progression from self-directed curiosity and academic discipline to production-grade distributed architectures.
          </Text>
        </header>

        {/* Horizontal Progression Flow Bar */}
        <div className={styles.progressionNav}>
          {PROGRESSION_STAGES.map((st, idx) => (
            <button
              key={st.step}
              type="button"
              className={styles.progressionPill}
              data-active={idx === activeStageIndex}
              onClick={() => setActiveStageIndex(idx)}
            >
              <span className={styles.pillStep}>{st.step}</span>
              <span className={styles.pillPhase}>{st.phase}</span>
              {idx < PROGRESSION_STAGES.length - 1 && (
                <span className={styles.pillArrow} aria-hidden="true">→</span>
              )}
            </button>
          ))}
        </div>

        {/* Main Stage Presentation Showcase */}
        <div className={styles.stageDisplay}>
          <div className={styles.stageCard}>
            <div className={styles.stageTop}>
              <div className={styles.phaseBadgeGroup}>
                <span className={styles.stageStepTag}>PHASE {activeStage.step}</span>
                <span className={styles.stagePhaseName}>{activeStage.phase}</span>
                <span className={styles.stageYear}>{activeStage.year}</span>
              </div>

              <div className={styles.metricCallout}>
                <span className={styles.metricValue}>{activeStage.metric}</span>
                <span className={styles.metricLabel}>{activeStage.metricLabel}</span>
              </div>
            </div>

            <h3 className={styles.stageTitle}>{activeStage.title}</h3>
            <p className={styles.stageOrg}>{activeStage.institution}</p>
            <p className={styles.stageDesc}>{activeStage.description}</p>

            <div className={styles.tagsRow}>
              {activeStage.tags.map(t => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Formal Education Highlights */}
        <div className={styles.educationGrid}>
          {/* LPU Card */}
          <div className={styles.eduCard} data-highlight="true">
            <div className={styles.eduHeader}>
              <span className={styles.eduYear}>2025 — PRESENT</span>
              <span className={styles.eduCgpaBadge}>CGPA: 9.89 / 10</span>
            </div>
            <h4 className={styles.eduInstitution}>Lovely Professional University</h4>
            <p className={styles.eduDegree}>Bachelor of Technology (B.Tech) — Computer Science & Engineering</p>
            <p className={styles.eduDetails}>
              Coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Operating Systems.
            </p>
          </div>

          {/* KV Ambala Card */}
          <div className={styles.eduCard}>
            <div className={styles.eduHeader}>
              <span className={styles.eduYear}>2023 — 2024</span>
              <span className={styles.eduScoreBadge}>90.6% SCORE</span>
            </div>
            <h4 className={styles.eduInstitution}>PM Shree Kendriya Vidyalaya No. 2, Ambala Cantt</h4>
            <p className={styles.eduDegree}>Senior Secondary Education (Class XII CBSE — PCM + Computer Science)</p>
            <p className={styles.eduDetails}>
              Awarded Merit Scholarship for high academic performance in science and computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
