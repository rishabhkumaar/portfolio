import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';
import { DecoderText } from '~/components/decoder-text';
import styles from './achievements.module.css';

export function Achievements({ id, sectionRef }) {
  return (
    <section id={id} ref={sectionRef} className={styles.achievementsSection}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <Divider notchWidth="48px" notchHeight="6px" />
            <span>06 // Proof of Progress & Academic Rigor</span>
          </div>
          <Heading level={2} as="h2" className={styles.heading}>
            <DecoderText text="Consistent Problem Solving & Honors" />
          </Heading>
          <Text size="l" as="p" className={styles.subheading}>
            Pairing high academic excellence with sustained daily problem-solving across competitive programming platforms.
          </Text>
        </header>

        <div className={styles.grid}>
          {/* Card 1: 200+ Problems */}
          <div className={styles.card}>
            <div className={styles.statNumber}>200+</div>
            <h3 className={styles.cardTitle}>Coding Problems Solved</h3>
            <p className={styles.cardText}>
              Solved across LeetCode, HackerRank, and university neoPat platforms. Strong focus on asymptotic complexity, algorithmic efficiency, dynamic programming, and core graph traversals.
            </p>
            <div className={styles.cardFooter}>
              <span>Continuous Practice Discipline</span>
            </div>
          </div>

          {/* Card 2: HackerRank */}
          <div className={styles.card}>
            <div className={styles.badgesList}>
              <div className={styles.badgeRow}>
                <span className={styles.badgeName}>🥇 Python</span>
                <span className={styles.badgeTier}>Gold Badge</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeName}>🥈 C Language</span>
                <span className={styles.badgeTier}>Silver Badge</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeName}>🥈 SQL Queries</span>
                <span className={styles.badgeTier}>Silver Badge</span>
              </div>
            </div>
            <h3 className={styles.cardTitle}>HackerRank Accreditations</h3>
            <p className={styles.cardText}>
              Demonstrated verified proficiency in Python data structures, memory-conscious C programming, and relational SQL join operations.
            </p>
            <div className={styles.cardFooter}>
              <span>HackerRank Verified</span>
            </div>
          </div>

          {/* Card 3: LeetCode */}
          <div className={styles.card}>
            <div className={styles.badgesList}>
              <div className={styles.badgeRow}>
                <span className={styles.badgeName}>🏅 50 Days Badge</span>
                <span className={styles.badgeTier}>Daily Streak</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeName}>🔷 Mathematical I</span>
                <span className={styles.badgeTier}>Number Theory</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeName}>📊 Data Navigator</span>
                <span className={styles.badgeTier}>Data Structures</span>
              </div>
            </div>
            <h3 className={styles.cardTitle}>LeetCode Milestones</h3>
            <p className={styles.cardText}>
              Proof of sustained discipline, analytical stamina, and continuous problem-solving practice across algorithm categories.
            </p>
            <div className={styles.cardFooter}>
              <span>LeetCode Verified Badges</span>
            </div>
          </div>
        </div>

        {/* Formal Education Grid */}
        <div className={styles.eduGrid}>
          {/* LPU */}
          <div className={styles.eduCard}>
            <div className={styles.eduHeader}>
              <div>
                <h3 className={styles.eduSchool}>Lovely Professional University</h3>
                <span className={styles.eduLocation}>Phagwara, Punjab, India</span>
              </div>
              <span className={styles.eduScore}>CGPA: 9.89 / 10</span>
            </div>
            <div className={styles.eduDegree}>
              Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering
            </div>
            <div className={styles.eduDuration}>2025 – Present</div>
            <p className={styles.cardText}>
              Standing in the top tier of students with an outstanding <strong>9.89 CGPA</strong>. Coursework covers Object-Oriented Programming, Data Structures, Relational Database Management Systems, and Computer Networks.
            </p>
          </div>

          {/* PM Shree KV 2 */}
          <div className={styles.eduCard}>
            <div className={styles.eduHeader}>
              <div>
                <h3 className={styles.eduSchool}>PM Shree KV No. 2</h3>
                <span className={styles.eduLocation}>Ambala Cantt, Haryana, India</span>
              </div>
              <span className={styles.eduScore}>Score: 90.6%</span>
            </div>
            <div className={styles.eduDegree}>
              Higher Secondary Education (Class XII — PCM + CS)
            </div>
            <div className={styles.eduDuration}>2023 – 2024</div>
            <p className={styles.cardText}>
              Completed Senior Secondary education in the Science stream with <strong>90.6%</strong>, preceded by <strong>87.6%</strong> in Secondary Education (Class X), establishing deep analytical foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
