import React from 'react';

import { Typography, Col } from 'antd';
import styled from 'styled-components';

import SlideInBottomBox from 'common/framerMotion/slideInBottomBox';
import SlideInLeftBox from 'common/framerMotion/slideInLeftBox';
import SlideInRightBox from 'common/framerMotion/slideInRightBox';
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

const StyledUl = styled.ul`
  color: #8c8c8c;
`;

const skills = {
  languages: ['Cpp', 'C', 'Python', 'Java'],
  frontend: ['ReactJS', 'D3', 'HTML', 'CSS', 'Javascript', 'Typescript', 'Material-UI', 'Antd'],
  backend: ['DJango', 'Node.js', 'Express.js', 'Firebase', 'PostgreSQL'],
  tools_used: ['Git', 'npm', 'Nivo.rocks', 'ESlint', 'Figma', 'Postman'],
};

const Skills = () => (
  <StyledContainer id="skill_set">
    <StyledTitle level={3} border={1} color="white" fontWeight={1}>
      Skill Set
    </StyledTitle>
    <Separator height={4} />
    <Row gutter={[24, 12]}>
      <Col lg={{ span: 3, offset: 5 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInLeftBox>
          <StyledTitle level={4} color="white">
            Languages
          </StyledTitle>
          <Separator />
          <StyledUl>
            {skills.languages.map((skill: string) => (
              <li key={skill}>
                <StyledText strong>{skill}</StyledText>
              </li>
            ))}
          </StyledUl>
        </SlideInLeftBox>
      </Col>
      <Col lg={{ span: 3, offset: 1 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInBottomBox>
          <StyledTitle level={4} color="white">
            Frontend
          </StyledTitle>
          <Separator />
          <StyledUl>
            {skills.frontend.map((skill: string) => (
              <li key={skill}>
                <StyledText strong>{skill}</StyledText>
              </li>
            ))}
          </StyledUl>
        </SlideInBottomBox>
      </Col>
      <Col lg={{ span: 4, offset: 1 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInBottomBox>
          <StyledTitle level={4} color="white">
            Backend
          </StyledTitle>
          <Separator />
          <StyledUl>
            {skills.backend.map((skill: string) => (
              <li key={skill}>
                <StyledText strong>{skill}</StyledText>
              </li>
            ))}
          </StyledUl>
        </SlideInBottomBox>
      </Col>
      <Col lg={{ span: 3, offset: 0 }} sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <SlideInRightBox xOffset={10}>
          <StyledTitle level={4} color="white">
            Tools Used
          </StyledTitle>
          <Separator />
          <StyledUl>
            {skills.tools_used.map((skill: string) => (
              <li key={skill}>
                <StyledText strong>{skill}</StyledText>
              </li>
            ))}
          </StyledUl>
        </SlideInRightBox>
      </Col>
    </Row>
  </StyledContainer>
);

export default Skills;
