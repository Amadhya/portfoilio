import React from 'react';

import { OpenBook } from '@styled-icons/entypo/OpenBook';
import { GraduationCap } from '@styled-icons/fa-solid/GraduationCap';
import { Grading } from '@styled-icons/material-rounded/Grading';
import { LocationCity } from '@styled-icons/material/LocationCity';
import { Typography } from 'antd';

import DetailCard from 'common/detailCard';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import EDUCATION from 'constants/education';

const { Text } = Typography;

const Education = () => (
  <Container id="education">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      <GraduationCap size={24} />
      &nbsp; Education
    </HeaderWrapper>
    <Separator />
    {EDUCATION.map(({ title, subTitle, name, location, result, extra, period }) => (
      <DetailCard title={title} key={name} period={period}>
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
      </DetailCard>
    ))}
  </Container>
);

export default Education;
