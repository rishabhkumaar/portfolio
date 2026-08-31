import config from '~/config.json';

export const navLinks = [
  {
    label: '01 Intro',
    pathname: '/#intro',
  },
  {
    label: '02 Journey',
    pathname: '/#journey',
  },
  {
    label: '03 Learning',
    pathname: '/#ecosystem',
  },
  {
    label: '04 Mindset',
    pathname: '/#mindset',
  },
  {
    label: '05 Rishource',
    pathname: '/#rishource',
  },
  {
    label: '06 Built',
    pathname: '/#projects',
  },
  {
    label: '07 Proof & Resume',
    pathname: '/#proof',
  },
  {
    label: "08 What's Next",
    pathname: '/#whats-next',
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
