import React from 'react';

import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/fa-brands/Github';
import { Hackerrank } from '@styled-icons/fa-brands/Hackerrank';
import { Email } from '@styled-icons/material-rounded/Email';
import { Typography, Tooltip } from 'antd';
import styled from 'styled-components';

import { Separator, Row, Col } from 'commonStyles/layouts';
import CodingIcon from 'comps/coding';
import ABOUT from 'constants/about';
import COLORS from 'constants/colors';

const { Title, Text } = Typography;

const Background = styled.div`
  background: linear-gradient(0deg, ${COLORS.BIG_STONE}, ${COLORS.CLOUD_BURST});
  height: 100%;
  min-height: 100vh;
  padding: 2rem 4rem;
  display: flex;
  @media (max-width: 767px) {
    padding: 2rem 0.5rem;
    text-align: center;
  }
`;

const StyledLink = styled.a`
  color: ${COLORS.WHITE};
  &: hover {
    color: ${COLORS.CERULEAN};
  }
`;

const StyledTitle = styled(Title)`
  color: ${COLORS.WHITE} !important;
  margin: 12px 0px !important;
`;

const StyledRow = styled(Row)`
  width: 300px;
  @media (max-width: 767px) {
    margin: auto;
  }
`;

const StyledText = styled(Text)`
  color: ${COLORS.WHITE} !important;
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
  <Background id="home">
    <Row align="middle">
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <StyledTitle level={4}>Hi!</StyledTitle>
        <StyledTitle level={1}>I&apos;m {ABOUT.name}</StyledTitle>
        <StyledTitle level={2}>{ABOUT.profession.toUpperCase()}</StyledTitle>
        <Separator height={3} />
        <StyledText>&quot;{ABOUT.quote}&quot;</StyledText>
        <Separator height={6} />
        <StyledRow justify="space-between">
          {links.map(({ title, href, Icon }) => (
            <Tooltip title={title} key={title}>
              <StyledLink href={href} aria-label={title} target="_blank" rel="noopener noreferrer">
                {Icon && <Icon size={36} />}
              </StyledLink>
            </Tooltip>
          ))}
        </StyledRow>
      </Col>
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <CodingIcon />
      </Col>
    </Row>
  </Background>
);

export default Home;
