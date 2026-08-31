import { useEffect, useState } from 'react';
import { Icon } from '~/components/icon';
import styles from './presentation-hud.module.css';

export const CHAPTERS = [
  { id: 'intro', num: '01', title: 'INTRODUCTION', short: 'Introduction' },
  { id: 'journey', num: '02', title: 'THE BEGINNING', short: 'Journey' },
  { id: 'ecosystem', num: '03', title: 'LEARNING', short: 'Ecosystem' },
  { id: 'mindset', num: '04', title: 'HOW I THINK', short: 'Mindset' },
  { id: 'rishource', num: '05', title: 'RISHOURCE', short: 'Flagship' },
  { id: 'projects', num: '06', title: 'BUILDING', short: 'Projects' },
  { id: 'proof', num: '07', title: 'PROOF', short: 'Proof & Resume' },
  { id: 'whats-next', num: '08', title: "WHAT'S NEXT", short: 'The Future' },
];

export function PresentationHUD({ activeChapterId = 'intro', onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentIndex = Math.max(
    0,
    CHAPTERS.findIndex(c => c.id === activeChapterId)
  );
  const currentChapter = CHAPTERS[currentIndex] || CHAPTERS[0];

  // Global scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for presentation slides
  useEffect(() => {
    const handleKeyDown = e => {
      if (['input', 'textarea'].includes(document.activeElement?.tagName?.toLowerCase())) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIndex < CHAPTERS.length - 1) {
          e.preventDefault();
          const next = CHAPTERS[currentIndex + 1];
          onNavigate?.(next.id);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          e.preventDefault();
          const prev = CHAPTERS[currentIndex - 1];
          onNavigate?.(prev.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onNavigate]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate?.(CHAPTERS[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < CHAPTERS.length - 1) {
      onNavigate?.(CHAPTERS[currentIndex + 1].id);
    }
  };

  return (
    <nav className={styles.hud} aria-label="Story Chapter Navigation">
      {/* Dynamic linear progress line */}
      <div className={styles.progressBar} aria-hidden="true">
        <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className={styles.barContent}>
        {/* Slide Counter & Title */}
        <div className={styles.counterGroup}>
          <button
            type="button"
            className={styles.chapterBadge}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Open chapter menu"
          >
            <span className={styles.activeNumber}>{currentChapter.num}</span>
            <span className={styles.divider}>/</span>
            <span className={styles.totalNumber}>08</span>
            <span className={styles.chapterTitle}>{currentChapter.title}</span>
            <span className={styles.menuIcon}>{menuOpen ? '✕' : '▾'}</span>
          </button>
        </div>

        {/* Step dots for fast scanning */}
        <div className={styles.dotsTrack} aria-hidden="true">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              type="button"
              className={styles.dot}
              data-active={idx === currentIndex}
              data-passed={idx < currentIndex}
              onClick={() => onNavigate?.(ch.id)}
              title={`${ch.num} — ${ch.title}`}
              aria-label={`Jump to ${ch.title}`}
            />
          ))}
        </div>

        {/* Keyboard shortcut hint & controls */}
        <div className={styles.controls}>
          <span className={styles.keyHint} title="Use Arrow Up/Down or Page keys">
            <span className={styles.key}>↑</span>
            <span className={styles.key}>↓</span>
          </span>

          <button
            type="button"
            className={styles.navButton}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous Chapter"
            title="Previous Chapter (↑)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.navButton}
            onClick={handleNext}
            disabled={currentIndex === CHAPTERS.length - 1}
            aria-label="Next Chapter"
            title="Next Chapter (↓)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chapter Dropdown Popover */}
      {menuOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerLabel}>STORY CHAPTERS</span>
            <span className={styles.drawerSub}>Rishabh Kumar // Engineering Journey</span>
          </div>
          <div className={styles.drawerList}>
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                type="button"
                className={styles.drawerItem}
                data-active={idx === currentIndex}
                onClick={() => {
                  onNavigate?.(ch.id);
                  setMenuOpen(false);
                }}
              >
                <span className={styles.itemNum}>{ch.num}</span>
                <span className={styles.itemTitle}>{ch.title}</span>
                {idx === currentIndex && <span className={styles.itemTag}>CURRENT SLIDE</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
