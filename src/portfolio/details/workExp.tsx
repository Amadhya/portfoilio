import React from 'react';

import { CodeWorking } from '@styled-icons/ionicons-solid/CodeWorking';
import { LocationCity } from '@styled-icons/material/LocationCity';
import { Typography } from 'antd';
import DetailCard from 'common/detailCard';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';

const { Text } = Typography;

const education = [
  {
    period: 'July, 2020 - PRESENT',
    title: 'Cuemath',
    subTitle: 'Software Developer',
    location: 'Bangalore, India',
    desc:
      'Develop and maintain features for the online teaching platform for teachers and students. Working on improving the overall demo experience of teachers and students. Worked on improving the classroom experience for teachers.',
  },
  {
    period: 'Jan, 2019 - Jun, 2019',
    title: 'Cuemath',
    subTitle: 'Software Developer Intern',
    location: 'Bangalore, India',
    desc:
      "FullStack developer for the Cuemath website. Developed various landing pages, services and api's.",
  },
  {
    period: 'May, 2018 - Sep, 2018',
    title: 'Coding Ninjas',
    subTitle: 'Teaching Assistant',
    location: 'New Delhi, India',
    desc:
      'Mentored a group of fifteen to twenty students in completing their course and other career related queries. Worked over different Data structures and algorithm problems.',
  },
];

const WorkExp = () => (
  <Container id="work_exp">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      <CodeWorking size={32} />
      &nbsp; Work Experience
    </HeaderWrapper>
    <Separator />
    {education.map(({ title, subTitle, period, location, desc }) => (
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
