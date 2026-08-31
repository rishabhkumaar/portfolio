import { useState } from 'react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './achievements.module.css';

const CERTIFICATES = [
  {
    title: 'Modern Database Systems (CS403)',
    issuer: 'Saylor Academy',
    badge: 'Grade: 86% · 29 hrs',
    description: 'Relational schema design, SQL query optimizations, ACID transaction guarantees, and indexing.',
    img: '/certificates/cs403-dbms.png',
  },
  {
    title: 'Computer Programming (iamneo)',
    issuer: 'LPU / iamneo',
    badge: '150 hrs · NeoPat Assessment',
    description: 'Intensive algorithmic problem solving, memory models, data structures, and timed execution.',
    img: '/certificates/computer-programming.png',
  },
  {
    title: 'Programming Fundamentals using Python',
    issuer: 'Infosys Springboard',
    badge: 'Enterprise Certification',
    description: 'Python design patterns, modular architecture, algorithmic logic, and data processing.',
    img: '/certificates/python-basic.png',
  },
  {
    title: 'Introduction to Python (CS105)',
    issuer: 'Saylor Academy',
    badge: '100% Perfect Score',
    description: 'Perfect score mastery in Python computational execution, data structures, and standard libraries.',
    img: '/certificates/cs105-python.png',
  },
  {
    title: 'OpenAI Hackathon Engineering',
    issuer: 'OpenAI / Node',
    badge: 'AI Systems Integration',
    description: 'Autonomous workflows, OpenAI API integrations, streaming responses, and prompt systems.',
    img: '/certificates/openai-hack-node.png',
  },
  {
    title: 'Python Programming (Part 1 & 2)',
    issuer: 'Cisco Networking Academy',
    badge: 'Core Modules Verified',
    description: 'Algorithms, data collections, object-oriented semantics, and functional paradigms.',
    img: '/certificates/python-part-1.jpg',
  },
];

export function ProofAndResume({ id, sectionRef }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id={id} ref={sectionRef} className={styles.proofSection} tabIndex={-1}>
      <div className={styles.container}>
        {/* Presentation Slide Header */}
        <header className={styles.header}>
          <div className={styles.slideMarker}>
            <span className={styles.chapterNum}>07 // PROOF</span>
            <span className={styles.chapterTag}>RIGOR &amp; ACCREDITATION</span>
          </div>

          <Heading level={2} as="h2" className={styles.title}>
            <DecoderText text="Verified Rigor, Honors &amp; Credentials" />
          </Heading>

          <Text size="l" as="p" className={styles.subtitle}>
            Academic standing, competitive problem-solving endurance, and industry certifications backed by tangible proof.
          </Text>
        </header>

        {/* Big Telemetry Numbers Grid */}
        <div className={styles.telemetryGrid}>
          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statNumber}>9.89</span>
              <span className={styles.statScale}>/10</span>
            </div>
            <h3 className={styles.statTitle}>CGPA at Lovely Professional University</h3>
            <p className={styles.statSub}>
              B.Tech in Computer Science &amp; Engineering. Maintaining highest tier academic excellence.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statScale}>Solves</span>
            </div>
            <h3 className={styles.statTitle}>Algorithmic Problems</h3>
            <p className={styles.statSub}>
              Solved across LeetCode, HackerRank, and neoPat platforms with continuous daily practice.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statNumber}>Gold</span>
              <span className={styles.statScale}>Python</span>
            </div>
            <h3 className={styles.statTitle}>HackerRank Gold Badge</h3>
            <p className={styles.statSub}>
              Verified proficiency in Python data structures, plus HackerRank Silver in C Language and SQL Queries.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statNumber}>50</span>
              <span className={styles.statScale}>Days</span>
            </div>
            <h3 className={styles.statTitle}>LeetCode Streak Badge</h3>
            <p className={styles.statSub}>
              Consistent algorithmic discipline, data structure navigations, and mathematical reasoning.
            </p>
          </div>
        </div>

        {/* Certificate Gallery Header */}
        <div className={styles.certHeader}>
          <h3 className={styles.certSectionTitle}>Interactive Certificate Gallery</h3>
          <p className={styles.certSectionSub}>Click any certificate to inspect verified accreditation records.</p>
        </div>

        {/* Certificate Cards Grid */}
        <div className={styles.certGrid}>
          {CERTIFICATES.map(cert => (
            <div
              key={cert.title}
              className={styles.certCard}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedCert(cert)}
            >
              <div className={styles.certImageWrap}>
                <img src={cert.img} alt={cert.title} className={styles.certImg} loading="lazy" />
                <div className={styles.certOverlay}>
                  <span>Click to Inspect 🔍</span>
                </div>
              </div>
              <div className={styles.certBody}>
                <span className={styles.certIssuer}>{cert.issuer}</span>
                <h4 className={styles.certCardTitle}>{cert.title}</h4>
                <span className={styles.certBadge}>{cert.badge}</span>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inspection Modal */}
        {selectedCert && (
          <div className={styles.modalOverlay} onClick={() => setSelectedCert(null)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img src={selectedCert.img} alt={selectedCert.title} className={styles.modalImage} />
              <div className={styles.modalFooter}>
                <div>
                  <h4 className={styles.modalTitle}>{selectedCert.title}</h4>
                  <p className={styles.modalIssuer}>{selectedCert.issuer} — {selectedCert.badge}</p>
                </div>
                <a
                  href={selectedCert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  Open Full Resolution ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Want the Full Story? Resume Slide */}
        <div className={styles.resumeSlide}>
          <div className={styles.resumeInner}>
            <div className={styles.resumeTextSide}>
              <span className={styles.resumeTag}>THE COMPLETE SUPPORTING RECORD</span>
              <h3 className={styles.resumeTitle}>WANT THE FULL STORY?</h3>
              <p className={styles.resumeDesc}>
                Download or inspect the official technical curriculum vitae detailing Rishabh Kumar's complete education, systems engineering experience, coursework, and algorithmic accreditations.
              </p>
              <div className={styles.resumeActions}>
                <a
                  href="/rishabh-kumar-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnViewResume}
                >
                  <span>View Resume (PDF)</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <a
                  href="/rishabh-kumar-resume.pdf"
                  download="Rishabh_Kumar_Resume.pdf"
                  className={styles.btnDownloadResume}
                >
                  <span>Download PDF</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.resumePreviewSide}>
              <div className={styles.docFrame}>
                <div className={styles.docTop}>
                  <span className={styles.docCircle} />
                  <span>rishabh-kumar-resume.pdf</span>
                </div>
                <div className={styles.docThumb}>
                  <img src="/cv_img_0.png" alt="Curriculum Vitae Preview" className={styles.docPreviewImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
