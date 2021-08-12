import React from 'react';

import { CodeWorking } from '@styled-icons/ionicons-solid/CodeWorking';
import { LocationCity } from '@styled-icons/material/LocationCity';
import { Typography } from 'antd';
import styled from 'styled-components';

import SlideInLeftBox from 'common/framerMotion/slideInLeftBox';
import SlideInRightBox from 'common/framerMotion/slideInRightBox';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import { Timeline, TimelineItem } from 'commonStyles/timeline';
import Colors from 'constants/colors';
import WORKEXP from 'constants/workExp';

const { Text } = Typography;

const StyledIcon = styled(CodeWorking)`
  background: linear-gradient(0deg, ${Colors.BIG_STONE}, ${Colors.CLOUD_BURST});
  color: white;
  border-radius: 50%;
  padding: 6px;
`;

const WorkExp = () => (
  <Container id="work_exp">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      Work Experience
    </HeaderWrapper>
    <Separator height={3} />
    <Timeline mode="left">
      {WORKEXP.map(({ title, subTitle, period, location, desc }, index) => (
        <TimelineItem
          islast={index + 1 === WORKEXP.length ? 1 : 0}
          key={`${title}-${period}`}
          label={
            <SlideInLeftBox xOffset={20}>
              <HeaderWrapper level={4} color="black">
                {title}
              </HeaderWrapper>
              <Text>{period}</Text>
            </SlideInLeftBox>
          }
          dot={<StyledIcon size={32} />}
        >
          <SlideInRightBox xOffset={10}>
            <HeaderWrapper level={4} color="black">
              {subTitle}
            </HeaderWrapper>
            <Text>
              <LocationCity size={14} />
              &nbsp; {location}
            </Text>
            <Separator />
            <Text strong> {desc}</Text>
          </SlideInRightBox>
        </TimelineItem>
      ))}
    </Timeline>
  </Container>
);

export default WorkExp;
