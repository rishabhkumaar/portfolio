import { useState } from 'react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './skills.module.css';

const ECOSYSTEM_LAYERS = [
  {
    id: 'languages',
    layerNum: '01',
    layerTitle: 'CORE LANGUAGES',
    tagline: 'Code primitives, memory control & execution semantics',
    items: [
      { name: 'Python', role: 'Primary Language', note: 'discord.py, AsyncIO, backend event loops, OpenAI automation', badge: 'HackerRank Gold' },
      { name: 'C++', role: 'Systems Foundations', note: 'OOP structures, STL algorithms, memory allocation, competitive math', badge: '200+ Solves' },
      { name: 'C', role: 'Low-Level Roots', note: 'Pointers, explicit memory layouts, procedural data structures', badge: 'HackerRank Silver' },
      { name: 'JavaScript & TypeScript', role: 'Modern Web Plane', note: 'Strict types, async/await, DOM architectures, Next.js control planes', badge: 'Production' },
      { name: 'HTML5 & CSS3', role: 'Structural Foundation', note: 'Semantic layouts, CSS variables, glassmorphic UI, responsive viewport math', badge: 'Responsive' },
    ],
  },
  {
    id: 'frameworks',
    layerNum: '02',
    layerTitle: 'FRAMEWORKS & RUNTIMES',
    tagline: 'Application engines, UI architectures & real-time sync',
    items: [
      { name: 'React & Next.js 14', role: 'Full-Stack Engine', note: 'Server Components, dynamic route handlers, client hydration, OAuth pipelines', badge: 'SSR / App Router' },
      { name: 'discord.py & discord.js', role: 'Bot Gateway Orchestration', note: 'AutoShardedBot cluster routing, event handling, modular Cogs', badge: 'AutoShardedBot' },
      { name: 'Prisma ORM', role: 'Type-Safe Data Layer', note: 'Declarative schemas, automated migrations, relational joins, connection pooling', badge: 'ORM' },
      { name: 'PDF.js', role: 'Vector Coordinate Viewport', note: 'Canvas document rendering, normalized x/y coordinate highlights', badge: 'Coordinate Engine' },
      { name: 'Chart.js', role: 'Environmental Telemetry', note: 'Dual-axis canvas plots, reactive dataset streaming, forecast charts', badge: 'Telemetry' },
    ],
  },
  {
    id: 'databases',
    layerNum: '03',
    layerTitle: 'DATABASES & STORAGE',
    tagline: 'Persistence models, ACID transactions & real-time streams',
    items: [
      { name: 'PostgreSQL', role: 'Relational Store', note: 'Guild configurations, user states, connection pooling, foreign-key indexing', badge: 'Primary DB' },
      { name: 'MySQL', role: 'Relational Queries', note: 'Complex joins, subqueries, ACID compliance, index optimization', badge: 'HackerRank Silver' },
      { name: 'MongoDB & Cloud Firestore', role: 'Document Collections', note: 'Real-time sync listeners, user-scoped security rules, dynamic notes', badge: 'Real-Time Sync' },
    ],
  },
  {
    id: 'engineering',
    layerNum: '04',
    layerTitle: 'SYSTEMS ARCHITECTURE & RELIABILITY',
    tagline: 'Concurrency, rate limiting, token buckets & failure handling',
    items: [
      { name: '15-min Node-Cache TTL', role: 'Cache Invalidation', note: 'Shields control planes from 429 rate limits, with stale-while-revalidate fallback', badge: 'Resilience' },
      { name: 'Async Concurrency & Event Loops', role: 'Asynchronous I/O', note: 'Non-blocking worker tasks, concurrent network requests, thread offloading', badge: 'High Concurrency' },
      { name: 'OAuth 2.0 & Token Exchange', role: 'Identity & Access', note: 'Discord OAuth token pipelines, Firebase Auth, role-based authorization', badge: 'Security' },
      { name: 'Modular Cogs Architecture', role: 'System Modularity', note: 'Hot-swappable Discord extensions loaded dynamically without server restarts', badge: 'Zero Downtime' },
    ],
  },
];

export function SkillsMatrix({ id, sectionRef }) {
  const [activeLayerId, setActiveLayerId] = useState('languages');
  const activeLayer = ECOSYSTEM_LAYERS.find(l => l.id === activeLayerId) || ECOSYSTEM_LAYERS[0];

  return (
    <section id={id} ref={sectionRef} className={styles.ecosystemSection} tabIndex={-1}>
      <div className={styles.container}>
        {/* Presentation Slide Header */}
        <header className={styles.header}>
          <div className={styles.slideMarker}>
            <span className={styles.chapterNum}>03 // LEARNING</span>
            <span className={styles.chapterTag}>ENGINEERING ECOSYSTEM</span>
          </div>

          <Heading level={2} as="h2" className={styles.title}>
            <DecoderText text="I Learned by Building Systems" />
          </Heading>

          <Text size="l" as="p" className={styles.subtitle}>
            Technologies are not isolated checklist items. In my work, they assemble into an interconnected engineering ecosystem where each tool solves specific architectural constraints.
          </Text>
        </header>

        {/* Layer Selector Tabs */}
        <div className={styles.layerTabs}>
          {ECOSYSTEM_LAYERS.map(layer => (
            <button
              key={layer.id}
              type="button"
              className={styles.layerTab}
              data-active={layer.id === activeLayerId}
              onClick={() => setActiveLayerId(layer.id)}
            >
              <span className={styles.tabNum}>{layer.layerNum}</span>
              <span className={styles.tabTitle}>{layer.layerTitle}</span>
            </button>
          ))}
        </div>

        {/* Active Layer Presentation Viewport */}
        <div className={styles.viewportFrame}>
          <div className={styles.viewportTop}>
            <div>
              <span className={styles.layerStepTag}>LAYER {activeLayer.layerNum}</span>
              <h3 className={styles.activeLayerName}>{activeLayer.layerTitle}</h3>
              <p className={styles.activeLayerTagline}>{activeLayer.tagline}</p>
            </div>
            <div className={styles.nodeCountBadge}>
              <span>{activeLayer.items.length} ACTIVE SYSTEM NODES</span>
            </div>
          </div>

          <div className={styles.nodesGrid}>
            {activeLayer.items.map(item => (
              <div key={item.name} className={styles.nodeCard}>
                <div className={styles.nodeCardHeader}>
                  <div className={styles.nodeTitleGroup}>
                    <h4 className={styles.nodeName}>{item.name}</h4>
                    <span className={styles.nodeRole}>{item.role}</span>
                  </div>
                  <span className={styles.nodeBadge}>{item.badge}</span>
                </div>
                <p className={styles.nodeNote}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
