import React from 'react';

import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/fa-brands/Github';
import { Hackerrank } from '@styled-icons/fa-brands/Hackerrank';
import { Email } from '@styled-icons/material-rounded/Email';
import { Typography, Row, Tooltip } from 'antd';
import { Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const { Title, Text } = Typography;

const DivWrapper = styled.div`
  height: 100vh;
`;
const Wrapper = styled(Container)`
  z-index: 2;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  @media (max-width: 767px) {
    padding: 0rem 1rem;
  }
`;
const LinkWrapper = styled.a`
  color: white;
  &: hover {
    color: ${Colors.BLUE};
  }
`;
const TitleWrapper = styled(Title)`
  color: white !important;
  margin: 12px 0px !important;
`;
const RowWapper = styled(Row)`
  width: 300px;
`;
const TextWrapper = styled(Text)`
  color: white !important;
  font-size: 16px;
  padding: 0 4px;
  font-weight: 500;
`;

const links = [
  {
    title: 'Mail',
    Icon: Email,
    href: 'mailto:amadhya.anand@gmail.com',
  },
  {
    title: 'Github',
    Icon: Github,
    href: 'https://github.com/Amadhya',
  },
  {
    title: 'LinkedIn',
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
  },
  {
    title: 'HackerRank',
    Icon: Hackerrank,
    href: 'https://www.hackerrank.com/eshuanand07',
  },
];

const Home = () => (
  <DivWrapper>
    <Particles
      id="tsparticles"
      height="100vh"
      options={{
        background: {
          color: {
            value: Colors.DARK_OCEAN_GRADIENT.SECONDARY_COLOR,
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    <Wrapper id="home">
      <TitleWrapper level={1}>Amadhya Anand</TitleWrapper>
      <TitleWrapper level={4}>SOFTWARE DEVELOPMENT ENGINEER</TitleWrapper>
      <Separator height={3} />
      <TextWrapper>
        &quot;Life is not a game to be won, but a game to be played with zeal and enjoyment in every
        moment till the end.&quot;
      </TextWrapper>
      <Separator height={6} />
      <RowWapper justify="space-between">
        {links.map(({ title, href, Icon }) => (
          <Tooltip title={title} key={title}>
            <LinkWrapper href={href}>{Icon && <Icon size={36} />}</LinkWrapper>
          </Tooltip>
        ))}
      </RowWapper>
    </Wrapper>
  </DivWrapper>
);

export default Home;
