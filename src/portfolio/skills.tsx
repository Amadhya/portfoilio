import React from 'react';

import { Tools } from '@styled-icons/entypo/Tools';
import { Typography, Col } from 'antd';
import SlideInBottomBox from 'common/framerMotion/slideInBottomBox';
import SlideInLeftBox from 'common/framerMotion/slideInLeftBox';
import SlideInRightBox from 'common/framerMotion/slideInRightBox';
import HeaderWrapper from 'commonStyles/header';
import { Row, Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled from 'styled-components';

const { Text } = Typography;

const TextWrapper = styled(Text)`
  text-align: center;
  color: white;
`;

const Wrapper = styled(Container)`
  background: linear-gradient(
    0deg,
    ${Colors.DEEP_SPACE_GRADIENT.PRIMARY_COLOR},
    ${Colors.DEEP_SPACE_GRADIENT.SECONDARY_COLOR}
  );
`;

const UlWrapper = styled.ul`
  color: #8c8c8c;
`;

const skills = {
  languages: ['Cpp', 'C', 'Python', 'Java'],
  frontend: ['ReactJS', 'D3', 'HTML', 'CSS', 'Javascript', 'Typescript', 'Material-UI', 'Antd'],
  backend: ['DJango', 'Node.js', 'Express.js', 'Firebase', 'PostgreSQL'],
  tools_used: ['Git', 'npm', 'Nivo.rocks', 'ESlint'],
};

const Skills = () => (
  <Wrapper id="skill_set">
    <HeaderWrapper level={3} border={1} color="white" fontWeight={1}>
      <Tools size={24} />
      &nbsp; Skill Set
    </HeaderWrapper>
    <Separator height={4} />
    <Row gutter={[24, 12]}>
      <Col lg={{ span: 3, offset: 5 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInLeftBox>
          <HeaderWrapper level={4} color="white">
            Languages
          </HeaderWrapper>
          <Separator />
          <UlWrapper>
            {skills.languages.map((skill: string) => (
              <li key={skill}>
                <TextWrapper strong>{skill}</TextWrapper>
              </li>
            ))}
          </UlWrapper>
        </SlideInLeftBox>
      </Col>
      <Col lg={{ span: 3, offset: 1 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInBottomBox>
          <HeaderWrapper level={4} color="white">
            Frontend
          </HeaderWrapper>
          <Separator />
          <UlWrapper>
            {skills.frontend.map((skill: string) => (
              <li key={skill}>
                <TextWrapper strong>{skill}</TextWrapper>
              </li>
            ))}
          </UlWrapper>
        </SlideInBottomBox>
      </Col>
      <Col lg={{ span: 4, offset: 1 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInBottomBox>
          <HeaderWrapper level={4} color="white">
            Backend
          </HeaderWrapper>
          <Separator />
          <UlWrapper>
            {skills.backend.map((skill: string) => (
              <li key={skill}>
                <TextWrapper strong>{skill}</TextWrapper>
              </li>
            ))}
          </UlWrapper>
        </SlideInBottomBox>
      </Col>
      <Col lg={{ span: 3, offset: 0 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInRightBox xOffset={10}>
          <HeaderWrapper level={4} color="white">
            Tools Used
          </HeaderWrapper>
          <Separator />
          <UlWrapper>
            {skills.tools_used.map((skill: string) => (
              <li key={skill}>
                <TextWrapper strong>{skill}</TextWrapper>
              </li>
            ))}
          </UlWrapper>
        </SlideInRightBox>
      </Col>
    </Row>
  </Wrapper>
);

export default Skills;
