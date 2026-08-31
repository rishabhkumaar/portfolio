import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';
import { DecoderText } from '~/components/decoder-text';
import styles from './certificates.module.css';

const CERTIFICATES = [
  {
    title: 'Modern Database Systems (CS403)',
    issuer: 'Saylor Academy',
    tags: ['Grade: 86%', '29 hrs'],
    description:
      'Relational schema design, SQL query optimizations, ACID transaction guarantees, and indexing.',
    img: '/certificates/cs403-dbms.png',
  },
  {
    title: 'Computer Programming (iamneo)',
    issuer: 'LPU / iamneo',
    tags: ['150 hrs', 'NeoPat'],
    description:
      'Intensive algorithmic programming, data structure implementations, and competitive assessments.',
    img: '/certificates/computer-programming.png',
  },
  {
    title: 'Programming Fundamentals using Python',
    issuer: 'Infosys Springboard',
    tags: ['Enterprise Training', 'Python'],
    description:
      'Object-oriented Python design patterns, algorithmic logic, file I/O, and data processing.',
    img: '/certificates/python-basic.png',
  },
  {
    title: 'Introduction to Python (CS105)',
    issuer: 'Saylor Academy',
    tags: ['Grade: 100%', 'Perfect Score'],
    description:
      'Demonstrated complete 100% score mastery in core Python language constructs and computational execution.',
    img: '/certificates/cs105-python.png',
  },
  {
    title: 'OpenAI Hackathon Engineering',
    issuer: 'OpenAI / Node',
    tags: ['Hackathon', 'AI Integration'],
    description:
      'Hands-on application development leveraging OpenAI APIs, prompt orchestration, and intelligent workflows.',
    img: '/certificates/openai-hack-node.png',
  },
  {
    title: 'Python Programming (Part 1 & 2)',
    issuer: 'Cisco / Academy',
    tags: ['Core Modules', 'Algorithms'],
    description:
      'Algorithmic foundations, control flows, functions, data collections, and standard libraries.',
    img: '/certificates/python-part-1.jpg',
  },
];

export function CertificatesShowcase({ id, sectionRef }) {
  return (
    <section id={id} ref={sectionRef} className={styles.certSection}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <Divider notchWidth="48px" notchHeight="6px" />
            <span>07 // Credentials &amp; Accreditations</span>
          </div>
          <Heading level={2} as="h2" className={styles.heading}>
            <DecoderText text="Verified Certifications" />
          </Heading>
          <Text size="l" as="p" className={styles.subheading}>
            Inspected and verified credentials spanning database systems, algorithmic programming, and AI development.
          </Text>
        </header>

        <div className={styles.grid}>
          {CERTIFICATES.map(cert => (
            <div key={cert.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className={cert.certImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <h3 className={styles.title}>{cert.title}</h3>
                <div className={styles.tags}>
                  {cert.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.description}>{cert.description}</p>
                <a
                  href={cert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inspectLink}
                >
                  Inspect Certificate &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
