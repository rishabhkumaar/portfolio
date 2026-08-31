import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { PresentationHUD } from '~/components/presentation-hud';
import { Intro } from './intro';
import { Journey } from './journey';
import { SkillsMatrix } from './skills';
import { Mindset } from './mindset';
import { RishourceReveal } from './rishource-reveal';
import { ProjectSummary } from './project-summary';
import { ProofAndResume } from './achievements';
import { WhatsNext } from './whats-next';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'The Engineering Journey of Rishabh Kumar',
    description: `An interactive cinematic presentation of Rishabh Kumar's software engineering journey — Computer Science undergraduate at LPU (9.89 CGPA) building distributed systems, Discord bot platforms, and resilient architectures.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState('intro');

  // Chapter section references
  const introRef = useRef();
  const journeyRef = useRef();
  const ecosystemRef = useRef();
  const mindsetRef = useRef();
  const rishourceRef = useRef();
  const projectsRef = useRef();
  const projectCoursesRef = useRef();
  const projectUbuntuRef = useRef();
  const projectWeatherRef = useRef();
  const proofRef = useRef();
  const whatsNextRef = useRef();

  const handleNavigateToChapter = chapterId => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const chapterMap = [
      { id: 'intro', ref: introRef },
      { id: 'journey', ref: journeyRef },
      { id: 'ecosystem', ref: ecosystemRef },
      { id: 'mindset', ref: mindsetRef },
      { id: 'rishource', ref: rishourceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'proof', ref: proofRef },
      { id: 'whats-next', ref: whatsNextRef },
    ];

    const chapterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveChapterId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0.1 }
    );

    chapterMap.forEach(ch => {
      if (ch.ref.current) {
        chapterObserver.observe(ch.ref.current);
      }
    });

    // Visible sections for animations
    const animatedSections = [
      projectCoursesRef,
      projectUbuntuRef,
      projectWeatherRef,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    animatedSections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    if (introRef.current) {
      indicatorObserver.observe(introRef.current);
    }

    return () => {
      chapterObserver.disconnect();
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      {/* Persistent Keynote Presentation HUD */}
      <PresentationHUD
        activeChapterId={activeChapterId}
        onNavigate={handleNavigateToChapter}
      />

      {/* CHAPTER 01: INTRODUCTION — "This is Rishabh" */}
      <Intro
        id="intro"
        sectionRef={introRef}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      {/* CHAPTER 02: THE BEGINNING — Journey Timeline & Formal Education */}
      <Journey id="journey" sectionRef={journeyRef} />

      {/* CHAPTER 03: LEARNING — "I Learned by Building" Interactive Ecosystem */}
      <SkillsMatrix id="ecosystem" sectionRef={ecosystemRef} />

      {/* CHAPTER 04: HOW I THINK — Engineering Mindset Slides */}
      <Mindset id="mindset" sectionRef={mindsetRef} />

      {/* CHAPTER 05: RISHOURCE — Flagship Product Reveal Centerpiece */}
      <RishourceReveal id="rishource" sectionRef={rishourceRef} />

      {/* CHAPTER 06: WHAT I BUILT — Concise Visual Showcase */}
      <div id="projects" ref={projectsRef}>
        <ProjectSummary
          id="project-courses"
          sectionRef={projectCoursesRef}
          visible={visibleSections.includes(projectCoursesRef.current)}
          index={1}
          title="Courses Glance: Academic Hub & Coordinate Engine"
          description="Centralized academic study platform for 9 university courses. Integrated custom PDF.js canvas rendering, persistent normalized vector coordinate text highlights, and real-time Firestore synchronization."
          buttonText="Explore Courses Glance"
          buttonLink="/projects/slice"
          model={{
            type: 'laptop',
            alt: 'Courses Glance interactive study platform',
            textures: [
              {
                srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
                placeholder: sliceTexturePlaceholder,
              },
            ],
          }}
        />

        <ProjectSummary
          id="project-ubuntu"
          alternate
          sectionRef={projectUbuntuRef}
          visible={visibleSections.includes(projectUbuntuRef.current)}
          index={2}
          title="Portfolio 2.0: Ubuntu OS Web Operating Desktop"
          description="In-browser operating environment styled after Ubuntu 20.04 Yaru dark theme. Built an extensible window management engine supporting dragging, minimizing, maximizing, focus management, and dynamic z-index stacking."
          buttonText="Explore Portfolio 2.0"
          buttonLink="/projects/volkihar-knight"
          model={{
            type: 'laptop',
            alt: 'Portfolio 2.0 browser operating environment',
            textures: [
              {
                srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
                placeholder: sprTexturePlaceholder,
              },
            ],
          }}
        />

        <ProjectSummary
          id="project-weather"
          sectionRef={projectWeatherRef}
          visible={visibleSections.includes(projectWeatherRef.current)}
          index={3}
          title="Weather Now: Dual-Axis Meteorological Telemetry"
          description="Real-time environmental dashboard retrieving 5-day / 3-hour forecasts with a dual-axis Chart.js visualization engine and rule-based weather recommendation heuristics."
          buttonText="View Telemetry Source"
          buttonLink="https://github.com/rishabhkumaar"
          model={{
            type: 'phone',
            alt: 'Weather Now meteorological telemetry app',
            textures: [
              {
                srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
                placeholder: gamestackTexturePlaceholder,
              },
              {
                srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
                placeholder: gamestackTexture2Placeholder,
              },
            ],
          }}
        />
      </div>

      {/* CHAPTER 07: PROOF — Telemetry, Interactive Certificates & Resume Slide */}
      <ProofAndResume id="proof" sectionRef={proofRef} />

      {/* CHAPTER 08: WHAT'S NEXT — Finale & Contact Dock */}
      <WhatsNext id="whats-next" sectionRef={whatsNextRef} />

      <Footer />
    </div>
  );
};

