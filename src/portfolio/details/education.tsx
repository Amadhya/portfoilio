import React from 'react';

import { OpenBook } from '@styled-icons/entypo/OpenBook';
import { GraduationCap } from '@styled-icons/fa-solid/GraduationCap';
import { Grading } from '@styled-icons/material-rounded/Grading';
import { LocationCity } from '@styled-icons/material/LocationCity';
import { Typography } from 'antd';
import styled from 'styled-components';

import StyledTitle from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import { Timeline, TimelineItem } from 'commonStyles/timeline';
import SlideInLeftBox from 'comps/framerMotion/slideInLeftBox';
import SlideInRightBox from 'comps/framerMotion/slideInRightBox';
import COLORS from 'constants/colors';
import EDUCATION from 'constants/education';

const { Text } = Typography;

const StyledIcon = styled(GraduationCap)`
  background: linear-gradient(0deg, ${COLORS.BIG_STONE}, ${COLORS.CLOUD_BURST});
  color: ${COLORS.WHITE};
  border-radius: 50%;
  padding: 6px;
`;

const StyledContainer = styled(Container)`
  background: ${COLORS.ALABASTER};
`;

const Education = () => (
  <StyledContainer id="education">
    <StyledTitle level={3} border={1} fontWeight={1}>
      Education
    </StyledTitle>
    <Separator height={3} />
    <Timeline mode="left">
      {EDUCATION.map(({ title, subTitle, name, location, result, extra, period }, index) => (
        <TimelineItem
          islast={index + 1 === EDUCATION.length ? 1 : 0}
          key={`${title}-${period}`}
          label={
            <SlideInLeftBox xOffset={20}>
              <StyledTitle level={4} color="black">
                {title}
              </StyledTitle>
              <Text>{period}</Text>
            </SlideInLeftBox>
          }
          dot={<StyledIcon size={32} />}
        >
          <SlideInRightBox xOffset={10}>
            <StyledTitle level={4} color="black">
              {subTitle}
            </StyledTitle>
            <Text strong>
              <OpenBook size={14} />
              &nbsp; {name}
            </Text>
            <Separator />
            <Text>
              <LocationCity size={14} />
              &nbsp; {location}
            </Text>
            <Separator />
            <Text strong>
              <Grading size={14} />
              &nbsp; {result}
            </Text>
            <Separator />
            {extra && <Text strong>{extra}</Text>}
          </SlideInRightBox>
        </TimelineItem>
      ))}
    </Timeline>
  </StyledContainer>
);

export default Education;
