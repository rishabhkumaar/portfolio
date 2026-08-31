import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'Portfolio 2.0: Ubuntu OS Web Desktop Environment';
const description =
  'An interactive Ubuntu 20.04-inspired operating desktop in the browser built with Next.js, React, and Tailwind CSS. Features a multi-window management engine with drag-and-drop mechanics, z-index hierarchy resolution, and responsive taskbar menus.';
const roles = [
  'Frontend Systems Engineering',
  'Window Manager State Logic',
  'Responsive Desktop UI Architecture',
  'Component Lifecycle Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: #E95420;
              --accent: #E95420;
            }
            [data-theme='light'] {
              --primary: #E95420;
              --accent: #E95420;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Explore Codebase"
          url="https://github.com/rishabhkumaar"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="Ubuntu 20.04 browser desktop interface with multiple draggable application windows."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${volkiharBook} 490w, ${volkiharBookLarge} 960w`}
              width={480}
              height={300}
              placeholder={volkiharBookPlaceholder}
              alt="Architecture diagrams for dynamic z-index window stacking"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Suspense>
                <Armor alt="3D interactive asset demonstration" />
              </Suspense>
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Custom Window Management Engine</ProjectSectionHeading>
              <ProjectSectionText>
                Simulating an OS desktop within a web document requires meticulous window state management. Portfolio 2.0 implements a central window controller managing coordinate offsets, minimized dock trays, maximized full-screen modes, and dynamic z-index stacking so clicked windows always rise to the foreground without stutter.
              </ProjectSectionText>
              <ProjectSectionText>
                Each desktop application—including the bash Terminal, Code Editor, File Browser, and System Settings—runs as an encapsulated sub-component with independent life-cycle hooks and persistent sessionStorage memory.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <VolkiharLogo
                role="img"
                aria-label="Ubuntu OS operating system emblem"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Human Interface Guidelines</ProjectSectionHeading>
              <ProjectSectionText>
                The visual identity faithfully honors Canonical’s Yaru dark theme and Ubuntu typography. Buttons, title bar traffic lights, orange active badges, and drop shadows were precisely recreated using Tailwind CSS utilities and custom backdrop filters.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Active terminal window executing command diagnostics.',
                  },
                  {
                    srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Code editor component with syntax highlighting.',
                  },
                  {
                    srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'System settings and visual appearance customization panel.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="Ubuntu desktop environment operating background."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Technical Accomplishments</ProjectSectionHeading>
              <ProjectSectionText>
                Portfolio 2.0 demonstrates advanced mastery over client-side state machines, event listener cleanup, window coordinate bounds detection, and immersive desktop emulation in modern web standards.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://github.com/rishabhkumaar"
              >
                View on GitHub
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
