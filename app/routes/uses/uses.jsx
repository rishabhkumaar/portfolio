import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'Hardware, software, and development environment used by Rishabh Kumar',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A breakdown of tools, frameworks, hardware, and engineering environments that I use daily to architect backends, build responsive interfaces, and test systems."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development &amp; Engineering</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> is
                    my core editor, paired with One Dark Pro / Tokyo Night, WSL2 terminal
                    integration, and essential extensions for Python, TypeScript, and Docker.
                  </ListItem>
                  <ListItem>
                    For backend scripting, bots, and automation,{' '}
                    <Link href="https://www.python.org/">Python 3.11+</Link> with AsyncIO
                    and <Link href="https://discordpy.readthedocs.io/">discord.py</Link> are my go-to
                    tools for high-concurrency event loops.
                  </ListItem>
                  <ListItem>
                    <Link href="https://react.dev/">React</Link> and{' '}
                    <Link href="https://nextjs.org/">Next.js</Link> are my standard stack for web
                    applications, utilizing Server Components, App Router, and API routes.
                  </ListItem>
                  <ListItem>
                    For algorithmic problem solving and low-level understanding, I work with{' '}
                    <strong>C++ (GCC/Clang)</strong>, taking advantage of the STL and deterministic memory models.
                  </ListItem>
                  <ListItem>
                    For databases, I work primarily with{' '}
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link> managed via{' '}
                    <Link href="https://www.prisma.io/">Prisma ORM</Link>, and{' '}
                    <Link href="https://firebase.google.com/">Firebase Firestore</Link> for real-time document sync.
                  </ListItem>
                  <ListItem>
                    For testing and inspecting APIs, I rely on Postman and the Discord Developer Portal.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design &amp; Prototyping</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com/@rishabhkumaar">Figma</Link> is my
                    primary tool for UI wireframing, layout architecture, and interactive prototyping before writing code.
                  </ListItem>
                  <ListItem>
                    I utilize modern CSS features including CSS custom variables, CSS Grid, flexbox, and glassmorphic depth effects for dynamic web interfaces.
                  </ListItem>
                  <ListItem>
                    For visualization and telemetry rendering, I use{' '}
                    <Link href="https://www.chartjs.org/">Chart.js</Link> and{' '}
                    <Link href="https://mozilla.github.io/pdf.js/">PDF.js</Link> for resolution-independent document viewports.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System &amp; Workstation</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 11 with Ubuntu 22.04 LTS (WSL2)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Primary browser</TableHeadCell>
                    <TableCell>Google Chrome &amp; Brave (DevTools)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Version Control</TableHeadCell>
                    <TableCell>Git &amp; GitHub (CLI + Web)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud Hosting</TableHeadCell>
                    <TableCell>Vercel, Cloudflare Pages, Netlify</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Terminal</TableHeadCell>
                    <TableCell>Windows Terminal with PowerShell &amp; Bash</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
