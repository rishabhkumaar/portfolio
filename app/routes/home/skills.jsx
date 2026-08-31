import { useState } from 'react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';
import { DecoderText } from '~/components/decoder-text';
import styles from './skills.module.css';

const SKILLS_DATA = [
  // Languages
  {
    name: 'Python',
    badge: 'HackerRank Gold',
    detail: 'discord.py, AsyncIO, backend event loops, OpenAI integrations, data processing, automation.',
    origin: 'Rishource, LeetCode, Scripting',
    category: 'languages',
  },
  {
    name: 'C++',
    badge: 'Core Foundations',
    detail: 'Object-oriented programming, STL data structures, memory models, algorithmic problem solving.',
    origin: '200+ Solved Challenges, NeoPat',
    category: 'languages',
  },
  {
    name: 'C',
    badge: 'HackerRank Silver',
    detail: 'Pointers, memory management, foundational data structures, low-level execution semantics.',
    origin: 'System Fundamentals, NeoPat',
    category: 'languages',
  },
  {
    name: 'JavaScript & TypeScript',
    badge: 'Advanced ESNext',
    detail: 'Strict typing, modern async/await patterns, DOM manipulation, Next.js dashboard architecture.',
    origin: 'Rishource, Courses Glance, Weather Now',
    category: 'languages',
  },
  {
    name: 'HTML5 & CSS3',
    badge: 'Responsive Layouts',
    detail: 'Semantic HTML, CSS variables, glassmorphic styling, responsive flex/grid architectures.',
    origin: 'Weather Now, Portfolio 2.0, Web Systems',
    category: 'languages',
  },
  // Frameworks & Libs
  {
    name: 'React & Next.js',
    badge: 'SSR / App Router',
    detail: 'Server Components, dynamic API endpoints, custom hooks, reactive state, Discord OAuth flows.',
    origin: 'Rishource Dashboard, Portfolio 2.0',
    category: 'frameworks',
  },
  {
    name: 'discord.py & discord.js',
    badge: 'AutoShardedBot',
    detail: 'Multi-shard gateway handling, modular Cogs, command handlers, interaction components.',
    origin: 'Rishource Flagship Bot',
    category: 'frameworks',
  },
  {
    name: 'Prisma ORM',
    badge: 'Type-Safe DB',
    detail: 'Relational data modeling, schema migrations, relation mapping, pooled connection management.',
    origin: 'Rishource Next.js Backend',
    category: 'frameworks',
  },
  {
    name: 'PDF.js',
    badge: 'Custom Viewport',
    detail: 'Canvas document rendering, page navigation, resolution-independent coordinate text highlights.',
    origin: 'Courses Glance Academic Hub',
    category: 'frameworks',
  },
  {
    name: 'Chart.js',
    badge: 'Telemetry Visuals',
    detail: 'Dual-axis canvas plots, dynamic dataset mutations, responsive environmental telemetry graphs.',
    origin: 'Weather Now Telemetry Graph',
    category: 'frameworks',
  },
  {
    name: 'Tailwind CSS & Redux',
    badge: 'UI Architecture',
    detail: 'Design system utilities, state management slices, dispatch actions, persistent window states.',
    origin: 'Portfolio 2.0 Desktop',
    category: 'frameworks',
  },
  // Databases
  {
    name: 'PostgreSQL',
    badge: 'Relational Core',
    detail: 'Relational database design, connection pooling, indexing, foreign keys, schema normalization.',
    origin: 'Rishource Guild Storage',
    category: 'databases',
  },
  {
    name: 'MySQL',
    badge: 'HackerRank Silver',
    detail: 'Complex joins, aggregations, database transactions, ACID guarantees, relational queries.',
    origin: 'Saylor Database Systems (86%)',
    category: 'databases',
  },
  {
    name: 'MongoDB & Firestore',
    badge: 'Document & Realtime',
    detail: 'Document collections, real-time sync listeners, user-scoped security rules, cloud storage.',
    origin: 'Courses Glance Realtime Sync',
    category: 'databases',
  },
  // Systems & Architecture
  {
    name: 'Caching & Rate Limiting',
    badge: 'Systems Design',
    detail: '15-minute Node-Cache TTL, token bucket throttling, graceful fallback handling on 429 errors.',
    origin: 'Rishource Discord API Gateway',
    category: 'systems',
  },
  {
    name: 'OAuth 2.0 & Auth Flows',
    badge: 'Security',
    detail: 'Discord OAuth token exchanges, Firebase Auth, JWT verification, role-based access control.',
    origin: 'Rishource Dashboard, Courses Glance',
    category: 'systems',
  },
  {
    name: 'Async Programming',
    badge: 'Concurrency',
    detail: 'Event loops, non-blocking asynchronous I/O, promise concurrency, distributed worker tasks.',
    origin: 'discord.py AutoSharding, REST clients',
    category: 'systems',
  },
  {
    name: 'Structured Logging',
    badge: 'Observability',
    detail: 'Multi-level logging, caller metadata injection, file rotation, structured error diagnostics.',
    origin: 'Rishource Engine Core',
    category: 'systems',
  },
  // Tools & APIs
  {
    name: 'REST APIs & Integrations',
    badge: 'Integration',
    detail: 'Discord REST API, OpenAI API, OpenWeatherMap API, clean API boundary contracts.',
    origin: 'Rishource, Weather Now',
    category: 'tools',
  },
  {
    name: 'Git & GitHub',
    badge: 'Version Control',
    detail: 'Branching workflows, semantic versioning, commit hygiene, pull requests, release packaging.',
    origin: 'All repositories & platforms',
    category: 'tools',
  },
  {
    name: 'Cloud Deployment',
    badge: 'Edge & CI/CD',
    detail: 'Cloudflare Pages, Vercel, Netlify CDN, environment secrets, automated deployment pipelines.',
    origin: 'Production deployments',
    category: 'tools',
  },
];

export function SkillsMatrix({ id, sectionRef }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills =
    activeFilter === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter(skill => skill.category === activeFilter);

  return (
    <section id={id} ref={sectionRef} className={styles.skillsSection}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <Divider notchWidth="48px" notchHeight="6px" />
            <span>05 // Technical Capabilities</span>
          </div>
          <Heading level={2} as="h2" className={styles.heading}>
            <DecoderText text="Engineered Stack & Systems" />
          </Heading>
          <Text size="l" as="p" className={styles.subheading}>
            Practical competence across programming languages, backend frameworks, distributed databases, systems design, and cloud deployments.
          </Text>
        </header>

        <div className={styles.filterBar}>
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'languages', label: 'Languages' },
            { id: 'frameworks', label: 'Frameworks & Libs' },
            { id: 'databases', label: 'Databases' },
            { id: 'systems', label: 'Systems & Architecture' },
            { id: 'tools', label: 'APIs & Tools' },
          ].map(btn => (
            <button
              key={btn.id}
              className={styles.filterButton}
              data-active={activeFilter === btn.id}
              onClick={() => setActiveFilter(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredSkills.map(skill => (
            <div key={skill.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{skill.name}</h3>
                <span className={styles.cardBadge}>{skill.badge}</span>
              </div>
              <p className={styles.cardDetail}>{skill.detail}</p>
              <div className={styles.cardOrigin}>Used in: {skill.origin}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
