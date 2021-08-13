import React from 'react';

import { Typography, Col } from 'antd';
import styled from 'styled-components';

import SlideInBottomBox from 'common/framerMotion/slideInBottomBox';
import StyledTitle from 'commonStyles/header';
import { Row, Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import { SKILLS } from 'constants/technologies';

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

const Skills = () => (
  <StyledContainer id="skill_set">
    <StyledTitle level={3} border={1} color="white" fontWeight={1}>
      Skills
    </StyledTitle>
    <Separator height={4} />
    <Row gutter={[24, 36]} justify="center">
      {SKILLS.map(({ title, list }) => (
        <SkillCol sm={{ span: 10, offset: 2 }} xs={24} key={title}>
          <StyledTitle color="white" level={4}>
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
