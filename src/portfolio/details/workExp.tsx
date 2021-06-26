import React from 'react';

import { CodeWorking } from '@styled-icons/ionicons-solid/CodeWorking';
import { LocationCity } from '@styled-icons/material/LocationCity';
import { Typography } from 'antd';

import DetailCard from 'common/detailCard';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import WORKEXP from 'constants/workExp';

const { Text } = Typography;

const WorkExp = () => (
  <Container id="work_exp">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      <CodeWorking size={32} />
      &nbsp; Work Experience
    </HeaderWrapper>
    <Separator />
    {WORKEXP.map(({ title, subTitle, period, location, desc }) => (
      <DetailCard title={title} period={period} key={period}>
        <div>
          <HeaderWrapper level={4} color="black">
            {subTitle}
          </HeaderWrapper>
          <Text>
            <LocationCity size={14} />
            &nbsp; {location}
          </Text>
          <Separator />
          <Text strong> {desc}</Text>
        </div>
      </DetailCard>
    ))}
  </Container>
);

export default WorkExp;
