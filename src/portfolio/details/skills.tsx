import React from 'react';



import { Git } from '@styled-icons/boxicons-logos/Git';
import { Figma } from '@styled-icons/fa-brands/Figma';
import { NodeJs } from '@styled-icons/fa-brands/NodeJs';
import { Npm } from '@styled-icons/fa-brands/Npm';
import { Antdesign } from '@styled-icons/simple-icons/Antdesign';
import { Css3 } from '@styled-icons/simple-icons/Css3';
import { D3DotJs } from '@styled-icons/simple-icons/D3DotJs';
import { Django } from '@styled-icons/simple-icons/Django';
import { Eslint } from '@styled-icons/simple-icons/Eslint';
import { Firebase } from '@styled-icons/simple-icons/Firebase';
import { Flask } from '@styled-icons/simple-icons/Flask';
import { Html5 } from '@styled-icons/simple-icons/Html5';
import { Java } from '@styled-icons/simple-icons/Java';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { MaterialUi } from '@styled-icons/simple-icons/MaterialUi';
import { Postgresql } from '@styled-icons/simple-icons/Postgresql';
import { Postman } from '@styled-icons/simple-icons/Postman';
import { Python } from '@styled-icons/simple-icons/Python';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Visualstudiocode } from '@styled-icons/simple-icons/Visualstudiocode';
import { Typography, Col } from 'antd';
import styled from 'styled-components';

import CppIcon from 'assets/c++-icon.svg';
import SlideInBottomBox from 'common/framerMotion/slideInBottomBox';
import StyledTitle from 'commonStyles/header';
import { Row, Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';

const { Text } = Typography;

const StyledText = styled(Text)`
  text-align: center;
  color: white;
`;

const StyledContainer = styled(Container)`
  background: linear-gradient(0deg, ${Colors.BLACK}, ${Colors.TUNDORA});
`;

const StyledCol = styled(Col)`
  background: ${Colors.MINE_SHAFT} !important;
  border-radius: 8px;
  padding: 12px 16px !important;
  margin: 8px 0px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
`;

const SkillCol = styled(Col)`
  padding: 8px 12px;
`;

const LANGUAGES_ICONS = [
  { image: CppIcon, text: 'C++' },
  { Icon: Python, text: 'Python' },
  { Icon: Javascript, text: 'Javascript' },
  { Icon: Typescript, text: 'Typescript' },
  { Icon: Java, text: 'Java' },
];

const TOOLS_ICONS = [
  { Icon: Eslint, text: 'Eslint' },
  { Icon: Figma, text: 'Figma' },
  { Icon: Git, text: 'Git' },
  { Icon: Npm, text: 'Npm' },
  { Icon: Postman, text: 'Postman' },
  { Icon: Visualstudiocode, text: 'VS Code' },
];

const BACKEND_ICONS = [
  { Icon: Django, text: 'Django' },
  { Icon: Flask, text: 'Flask' },
  { Icon: NodeJs, text: 'NodeJs' },
  { Icon: Firebase, text: 'Firebase' },
  { Icon: Postgresql, text: 'Postgresql' },
];

const FRONTEND_ICONS = [
  { Icon: ReactLogo, text: 'React' },
  { Icon: Redux, text: 'Redux' },
  { Icon: D3DotJs, text: 'D3' },
  { Icon: Html5, text: 'Html5' },
  { Icon: Css3, text: 'Css3' },
  { Icon: MaterialUi, text: 'MaterialUi' },
  { Icon: Antdesign, text: 'Antd' },
];

type SkilsType = { Icon?: React.ElementType; image?: string; text: string }[];

const SKILLS: { title: string; list: SkilsType }[] = [
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

const Skills = () => (
  <StyledContainer id="skill_set">
    <StyledTitle level={3} border={1} color="white" fontWeight={1}>
      Skills
    </StyledTitle>
    <Separator height={4} />
    <Row gutter={[24, 36]} justify="center">
      {SKILLS.map(({ title, list }) => (
        <SkillCol sm={{ span: 10, offset: 2 }} xs={24} key={title}>
          <StyledTitle color="white" level={5}>
            {title}
          </StyledTitle>
          <Separator height={1.5} />
          <Row align="middle">
            {list.map(({ Icon, image, text }) => (
              <SlideInBottomBox key={text}>
                <StyledCol>
                  {Icon ? (
                    <Icon size={32} color="white" style={{ margin: 'auto' }} />
                  ) : (
                    <img src={image} width={32} height={32} alt={text} />
                  )}
                  <Separator height={1.5} />
                  <StyledText>{text}</StyledText>
                </StyledCol>
              </SlideInBottomBox>
            ))}
          </Row>
        </SkillCol>
      ))}
    </Row>
  </StyledContainer>
);

export default Skills;
