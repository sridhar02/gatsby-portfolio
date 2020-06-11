import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sridhar', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sridhar Katta',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A developer, geek, enthusiast, who loves to solve problems and fix things with technology.I am working on 💻frontend web development with Javascript and I love contributing to 🌟 open source.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project-1.png',
    title: 'Issue Tracker',
    info: 'A clone of Github with some features.',
    info2: '',
    url: 'https://issue-hub.now.sh/join',
    repo: 'https://github.com/sridhar02/issue-tracker', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project-2.png',
    title: 'Ecommerce',
    info: 'A clone of Flipkart with some basic features.',
    info2: '',
    url: 'https://ecommerce.sridhar02.now.sh/',
    repo: 'https://github.com/sridhar02/ecommerce', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project-3.png',
    title: 'Simple Todo Application',
    info: 'A simple todo application with react hooks',
    info2: '',
    url: 'https://todo-hooks-sridhar.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach me out',
  btn: 'Email',
  email: 'kattasridhar02@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/ksridhar02',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/sridhar-katta',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sridhar02',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/sridhar02',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
