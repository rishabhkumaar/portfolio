import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Skills',
    pathname: '/#skills',
  },
  {
    label: 'Achievements',
    pathname: '/#achievements',
  },
  {
    label: 'Certificates',
    pathname: '/#certificates',
  },
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'email',
  },
];
