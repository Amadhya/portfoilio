import React from 'react';

import { Laptop } from '@styled-icons/fa-solid/Laptop';
import { Typography } from 'antd';
import styled from 'styled-components';

import DetailCard from 'common/detailCard';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';

const { Text } = Typography;

const UlWrapper = styled.ul`
  color: ${Colors.GRAY};
`;

const projects = [
  {
    period: 'Apr, 2020 - Sep, 2020',
    title: 'SwyftCart E-commerce',
    link: 'http://demo.swyftcart.com/',
    under: 'SwyftCart',
    desc: [
      'SwyftCart E-commerce is an ecommerce website.',
      'User can buy products from various shops near them by adding items to cart, pay online or can choose cash on delivery option.',
      "Also, user's can track their orders and cancel them.",
      'Technologies Used: ReactJS, Redux, Node.js, Express.js, Antd, Firebase.',
    ],
  },
  {
    period: 'Jun, 2020 - Oct, 2020',
    title: 'SwyftCart Admin',
    under: 'SwyftCart',
    desc: [
      'SwyftCart admin is an  application for shops to manage their orders and products.',
      'User can view their statistics, view orders, change its status and manage their inventory.',
      'Technologies Used: ReactJS, Redux, Node.js, Express.js, Antd, Firebase.',
    ],
  },
  {
    period: 'Dec, 2019 - Apr, 2020',
    title: 'Suvidham',
    link: 'http://suvidham.now.sh/',
    under: 'Punjab Engineering College',
    desc: [
      'Suvidham is a smart parking web and android app.',
      'User can view slot occupancy of a parking, do online payment for parking ticket and view their parking history.',
      'Technologies Used: DJango, ReactJS, Redux, Kotlin, XML, Material-UI, Cpp.',
    ],
  },
  {
    period: 'Sept, 2019 - Oct, 2019',
    title: 'Patralaya',
    link: 'https://patralaya.herokuapp.com/',
    under: 'Punjab Engineering College',
    desc: [
      'Patralaya is a blogging website.',
      'Users can post blogs, add tags to it and categorise it. Also, users can view other user profiles, filter their feed and share blogs on Facebook, Reddit and Twitter.',
      'Technologies used: React, Redux, Django, Material-UI, PostgreSQL.',
    ],
  },
];

const Projects = () => (
  <Container id="projects">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      <Laptop size={24} />
      &nbsp; Projects
    </HeaderWrapper>
    <Separator />
    {projects.map(({ title, under, period, desc, link }) => (
      <DetailCard title={title} period={period} key={title} link={link}>
        <div>
          <HeaderWrapper level={4} color="black">
            {under}
          </HeaderWrapper>
          <Separator />
          <UlWrapper>
            {desc.map((d: string) => (
              <li key={d}>
                <Text strong>{d}</Text>
              </li>
            ))}
          </UlWrapper>
        </div>
      </DetailCard>
    ))}
  </Container>
);

export default Projects;
