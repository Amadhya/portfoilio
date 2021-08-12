import React from 'react';

import { OpenBook } from '@styled-icons/entypo/OpenBook';
import { GraduationCap } from '@styled-icons/fa-solid/GraduationCap';
import { Grading } from '@styled-icons/material-rounded/Grading';
import { LocationCity } from '@styled-icons/material/LocationCity';
import { Typography } from 'antd';
import styled from 'styled-components';

import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import { Timeline, TimelineItem } from 'commonStyles/timeline';
import Colors from 'constants/colors';
import EDUCATION from 'constants/education';

const { Text } = Typography;

const StyledIcon = styled(GraduationCap)`
  background: linear-gradient(0deg, ${Colors.BIG_STONE}, ${Colors.CLOUD_BURST});
  color: white;
  border-radius: 50%;
  padding: 6px;
`;

const StyledContainer = styled(Container)`
  background: ${Colors.ALABASTER};
`;

const Education = () => (
  <StyledContainer id="education">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      Education
    </HeaderWrapper>
    <Separator height={3} />
    <Timeline mode="left">
      {EDUCATION.map(({ title, subTitle, name, location, result, extra, period }, index) => (
        <TimelineItem
          isLast={index + 1 === EDUCATION.length}
          key={`${title}-${period}`}
          label={
            <>
              <HeaderWrapper level={4} color="black">
                {title}
              </HeaderWrapper>
              <Text>{period}</Text>
            </>
          }
          dot={<StyledIcon size={32} />}
        >
          <div>
            <HeaderWrapper level={4} color="black">
              {subTitle}
            </HeaderWrapper>
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
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  </StyledContainer>
);

export default Education;
