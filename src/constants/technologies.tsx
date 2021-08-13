import React from 'react';

import { Git } from '@styled-icons/boxicons-logos/Git';
import { Figma } from '@styled-icons/fa-brands/Figma';
import { NodeJs } from '@styled-icons/fa-brands/NodeJs';
import { Npm } from '@styled-icons/fa-brands/Npm';
import { Antdesign } from '@styled-icons/simple-icons/Antdesign';
import { Css3 } from '@styled-icons/simple-icons/Css3';
import { D3dotjs } from '@styled-icons/simple-icons/D3DotJs';
import { Django } from '@styled-icons/simple-icons/Django';
import { Eslint } from '@styled-icons/simple-icons/Eslint';
import { Express } from '@styled-icons/simple-icons/Express';
import { Firebase } from '@styled-icons/simple-icons/Firebase';
import { Flask } from '@styled-icons/simple-icons/Flask';
import { Html5 } from '@styled-icons/simple-icons/Html5';
import { Java } from '@styled-icons/simple-icons/Java';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Kotlin } from '@styled-icons/simple-icons/Kotlin';
import { Materialui } from '@styled-icons/simple-icons/MaterialUi';
import { Postgresql } from '@styled-icons/simple-icons/Postgresql';
import { Postman } from '@styled-icons/simple-icons/Postman';
import { Python } from '@styled-icons/simple-icons/Python';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { Redis } from '@styled-icons/simple-icons/Redis';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Visualstudiocode } from '@styled-icons/simple-icons/Visualstudiocode';

import CppIcon from 'assets/c++-icon.svg';
import Colors from 'constants/colors';

export const TECHNOLOGIES_ICONS = {
  ANTD: { Icon: Antdesign, text: 'Antd', color: Colors.CORNFLOWER_BLUE },
  CPP: { image: CppIcon, text: 'Cpp', color: Colors.ENDEAVOUR },
  CSS: { Icon: Css3, text: 'Css3', color: Colors.CERULEAN },
  D3_JS: { Icon: D3dotjs, text: 'D3', color: Colors.JAFA },
  DJANGO: { Icon: Django, text: 'Django', color: Colors.BUSH },
  ESLINT: { Icon: Eslint, text: 'Eslint', color: Colors.PORTAGE },
  EXPRESS: { Icon: Express, text: 'ExpressJS', color: Colors.ROLLING_STONE },
  FIGMA: { Icon: Figma, text: 'Figma', color: Colors.BURNING_ORANGE },
  FIREBASE: { Icon: Firebase, text: 'Firebase', color: Colors.LIGHTNING_YELLOW },
  FLASK: { Icon: Flask, text: 'Flask', color: Colors.ROLLING_STONE },
  GIT: { Icon: Git, text: 'Git', color: Colors.POMEGRANATE },
  HTML: { Icon: Html5, text: 'Html5', color: Colors.BLAZE_ORANGE },
  JAVA: { Icon: Java, text: 'Java', color: Colors.DENIM },
  JAVASCRIPT: { Icon: Javascript, text: 'Javascript', color: Colors.SUNGLOW },
  KOTLIN: { Icon: Kotlin, text: 'Kotlin', color: Colors.TERRACOTTA },
  MATERIAL_UI: { Icon: Materialui, text: 'Material-ui', color: Colors.DODGER_BLUE },
  NODEJS: { Icon: NodeJs, text: 'NodeJs', color: Colors.FRUIT_SALAD },
  NPM: { Icon: Npm, text: 'Npm', color: Colors.GUARDSMAN_RED },
  POSTGRESQL: { Icon: Postgresql, text: 'Postgresql', color: Colors.LOCHMARA },
  POSTMAN: { Icon: Postman, text: 'Postman', color: Colors.CRUSTA },
  PYTHON: { Icon: Python, text: 'Python', color: Colors.LOCHMARA },
  REACT: { Icon: ReactLogo, text: 'React', color: Colors.MALIBU },
  REDIS: { Icon: Redis, text: 'Redis', color: Colors.CINNABAR },
  REDUX: { Icon: Redux, text: 'Redux', color: Colors.FUCHSIA_BLUE },
  TYPESCRIPT: { Icon: Typescript, text: 'Typescript', color: Colors.DENIM },
  VS_CODE: { Icon: Visualstudiocode, text: 'VS Code', color: Colors.DODGER_BLUE },
};

const LANGUAGES_ICONS = [
  TECHNOLOGIES_ICONS.CPP,
  TECHNOLOGIES_ICONS.PYTHON,
  TECHNOLOGIES_ICONS.JAVASCRIPT,
  TECHNOLOGIES_ICONS.TYPESCRIPT,
  TECHNOLOGIES_ICONS.JAVA,
];

const TOOLS_ICONS = [
  TECHNOLOGIES_ICONS.ESLINT,
  TECHNOLOGIES_ICONS.FIGMA,
  TECHNOLOGIES_ICONS.GIT,
  TECHNOLOGIES_ICONS.NPM,
  TECHNOLOGIES_ICONS.POSTMAN,
  TECHNOLOGIES_ICONS.VS_CODE,
];

const BACKEND_ICONS = [
  TECHNOLOGIES_ICONS.DJANGO,
  TECHNOLOGIES_ICONS.FLASK,
  TECHNOLOGIES_ICONS.NODEJS,
  TECHNOLOGIES_ICONS.FIREBASE,
  TECHNOLOGIES_ICONS.POSTGRESQL,
  TECHNOLOGIES_ICONS.REDIS,
];

const FRONTEND_ICONS = [
  TECHNOLOGIES_ICONS.REACT,
  TECHNOLOGIES_ICONS.REDUX,
  TECHNOLOGIES_ICONS.D3_JS,
  TECHNOLOGIES_ICONS.HTML,
  TECHNOLOGIES_ICONS.CSS,
  TECHNOLOGIES_ICONS.MATERIAL_UI,
  TECHNOLOGIES_ICONS.ANTD,
];

type SkilsType = { Icon?: React.ElementType; image?: string; text: string }[];

export const SKILLS: { title: string; list: SkilsType }[] = [
  {
    title: 'Languages',
    list: LANGUAGES_ICONS,
  },
  {
    title: 'Frontend',
    list: FRONTEND_ICONS,
  },
  {
    title: 'Backend',
    list: BACKEND_ICONS,
  },
  {
    title: 'Tools Used',
    list: TOOLS_ICONS,
  },
];
