import React from 'react';

import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/fa-brands/Github';
import { Hackerrank } from '@styled-icons/fa-brands/Hackerrank';
import { Email } from '@styled-icons/material-rounded/Email';
import { Typography, Row, Tooltip } from 'antd';
import styled from 'styled-components';

import FadeInBox from 'common/framerMotion/fadeInBox';
import { Separator, Container } from 'commonStyles/layouts';
import ABOUT from 'constants/about';
import Colors from 'constants/colors';

const { Title, Text } = Typography;

const DivWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(0deg, ${Colors.BIG_STONE}, ${Colors.CLOUD_BURST});
`;
const Wrapper = styled(Container)`
  height: 100%;
  width: 100%;
  text-align: center;
  @media (max-width: 767px) {
    padding: 0rem 1rem;
  }
`;
const LinkWrapper = styled.a`
  color: white;
  &: hover {
    color: ${Colors.CERULEAN};
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
    <Wrapper id="home">
      <FadeInBox>
        <TitleWrapper level={1}>Hi! I&apos;m {ABOUT.name}</TitleWrapper>
        <TitleWrapper level={2}>{ABOUT.profession.toUpperCase()}</TitleWrapper>
        <Separator height={3} />
        <TextWrapper>&quot;{ABOUT.quote}&quot;</TextWrapper>
        <Separator height={6} />
        <RowWapper justify="space-between">
          {links.map(({ title, href, Icon }) => (
            <Tooltip title={title} key={title}>
              <LinkWrapper href={href} aria-label={title} target="_blank" rel="noopener noreferrer">
                {Icon && <Icon size={36} />}
              </LinkWrapper>
            </Tooltip>
          ))}
        </RowWapper>
      </FadeInBox>
    </Wrapper>
  </DivWrapper>
);

export default Home;
