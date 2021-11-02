import { TECHNOLOGIES_ICONS } from 'constants/technologies';

const PROJECTS = [
  {
    period: 'Apr, 2020 - Sep, 2020',
    title: 'SwyftCart E-commerce',
    link: 'http://demo.swyftcart.com/',
    under: 'SwyftCart',
    desc: [
      'SwyftCart E-commerce is an e-commerce website.',
      'Users can buy products from various shops near them by adding listed products to their cart. They have an option to pay online or can choose cash on delivery option.',
      "Also, user's can track their orders and cancel them.",
    ],
    technologies: [
      TECHNOLOGIES_ICONS.TYPESCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.NODEJS,
      TECHNOLOGIES_ICONS.EXPRESS,
      TECHNOLOGIES_ICONS.FIREBASE,
      TECHNOLOGIES_ICONS.ANTD,
    ],
  },
  {
    period: 'Jun, 2020 - Oct, 2020',
    title: 'SwyftCart Admin',
    link: 'https://demoshop.swyftcart.com/',
    under: 'SwyftCart',
    desc: [
      'SwyftCart admin is an application for shops to manage their orders and products.',
      'User can view their statistics, view orders, change their status, and manage their inventory.',
    ],
    technologies: [
      TECHNOLOGIES_ICONS.TYPESCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.NODEJS,
      TECHNOLOGIES_ICONS.EXPRESS,
      TECHNOLOGIES_ICONS.FIREBASE,
      TECHNOLOGIES_ICONS.ANTD,
    ],
  },
  {
    period: 'Dec, 2019 - Apr, 2020',
    title: 'Suvidham',
    link: 'http://suvidham.now.sh/',
    under: 'Punjab Engineering College',
    desc: [
      'Suvidham is a smart parking web and android app.',
      'Users can create an account or sign in with Google.',
      'Users can view the parking layout to check slot occupancy and can pay parking tickets.',
      'User can edit their profile and view their payment history.',
    ],
    technologies: [
      TECHNOLOGIES_ICONS.JAVASCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.DJANGO,
      TECHNOLOGIES_ICONS.CPP,
      TECHNOLOGIES_ICONS.KOTLIN,
      TECHNOLOGIES_ICONS.MATERIAL_UI,
    ],
  },
  {
    period: 'Sept, 2019 - Oct, 2019',
    title: 'Patralaya',
    link: 'https://patralaya.herokuapp.com/',
    under: 'Punjab Engineering College',
    desc: [
      'Patralaya is a blogging website.',
      'Users can post blogs, add tags to them and categorize them. Further, users can view other user profiles, filter their feed, and share blogs on Facebook, Reddit and Twitter.',
    ],
    technologies: [
      TECHNOLOGIES_ICONS.JAVASCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.DJANGO,
      TECHNOLOGIES_ICONS.POSTGRESQL,
      TECHNOLOGIES_ICONS.MATERIAL_UI,
    ],
  },
  {
    period: 'Aug, 2019 - Sep, 2019',
    title: 'Chatroom',
    link: 'https://github.com/EightBitGod/TheDevCom_ProjectChatroom',
    under: 'The Developer Community',
    desc: [
      'Worked with in a team to develop chatroom application.',
      'Features supported by application are emoji, users can join room to chat, last activity of user, and timestamp of message.',
    ],
    technologies: [
      TECHNOLOGIES_ICONS.JAVASCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.DJANGO,
      TECHNOLOGIES_ICONS.REDIS,
    ],
  },
];

export default PROJECTS;
