import { DecoderText } from '~/components/decoder-text';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import profileImg from '~/assets/profile.jpg';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);


export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const currentDiscipline = disciplines[disciplineIndex] || disciplines[0];
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    4500,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={2500}>
        {({ visible, status }) => (
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}

            <div className={styles.container}>
              {/* Presentation Slide Metadata Header */}
              <div className={styles.slideMarker} data-status={status}>
                <span className={styles.chapterNum}>01 // INTRODUCTION</span>
                <span className={styles.chapterTag}>KEYNOTE SLIDE</span>
              </div>

              <div className={styles.contentGrid}>
                {/* Left Column: Monumental Presentation Typography */}
                <div className={styles.textColumn}>
                  <h1 className={styles.heroName} data-visible={visible} id={titleId}>
                    <DecoderText text={config.name} delay={300} />
                  </h1>

                  <div className={styles.subtitleGroup} data-status={status}>
                    <span className={styles.undergradLabel}>Computer Science Undergraduate</span>
                    <div className={styles.rotatingRoleWrapper}>
                      <span className={styles.rolePrefix}>Specializing as //</span>
                      <span className={styles.activeRole}>{currentDiscipline}</span>
                    </div>
                  </div>

                  {/* The Core Story Thesis Statements */}
                  <div className={styles.thesisContainer} data-status={status}>
                    <div className={styles.thesisBlock}>
                      <span className={styles.thesisQuote}>"I learn by building."</span>
                      <span className={styles.thesisDivider}>—</span>
                      <span className={styles.thesisQuoteHighlight}>"I build by engineering."</span>
                    </div>
                    <p className={styles.thesisBio}>
                      Computer Science undergraduate at Lovely Professional University (<strong>9.89 / 10 CGPA</strong>) engineering distributed Discord bot platforms, asynchronous backends, and full-stack software systems with resilience and precision.
                    </p>
                  </div>

                  {/* Slide Action / Navigation Anchor */}
                  <div className={styles.actionRow} data-status={status}>
                    <a
                      href="#journey"
                      className={styles.actionButton}
                      onClick={handleScrollClick}
                    >
                      <span>Begin Story (The Journey)</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="#rishource"
                      className={styles.actionButtonSecondary}
                      onClick={handleScrollClick}
                    >
                      <span>Jump to Flagship (Rishource)</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Hero Portrait Staged as Engineering Identity HUD */}
                <div className={styles.visualColumn} data-status={status}>
                  <div className={styles.portraitFrame}>
                    <div className={styles.frameCornerTL} />
                    <div className={styles.frameCornerTR} />
                    <div className={styles.frameCornerBL} />
                    <div className={styles.frameCornerBR} />

                    <div className={styles.portraitStatus}>
                      <span className={styles.statusDot} />
                      <span>ENGINEER HUD // CLUSTER ALPHA</span>
                    </div>

                    <div className={styles.imageWrap}>
                      <img
                        src={profileImg}
                        alt="Rishabh Kumar - Software Engineer"
                        className={styles.portraitImage}
                        loading="eager"
                      />
                      <div className={styles.imageOverlay} />
                    </div>

                    {/* Floating HUD Telemetry Chips */}
                    <div className={styles.floatingChipLeft}>
                      <span className={styles.chipPulse} />
                      <span className={styles.chipText}>LPU B.Tech CSE // 9.89 CGPA</span>
                    </div>
                    <div className={styles.floatingChipRight}>
                      <span className={styles.chipPulseCyan} />
                      <span className={styles.chipText}>200+ Algorithmic Solves</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Scroll Prompt */}
            <RouterLink
              to="/#journey"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to next chapter</VisuallyHidden>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}

