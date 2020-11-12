import React from 'react';

import { Typography, Avatar, Row, Tooltip } from 'antd';
import MailIcon from 'assets/email_icon.png';
import GithubIcon from 'assets/github_icon.png';
import HackerRankIcon from 'assets/hackerrank_icon.png';
import LinkedInIcon from 'assets/linkedIn_icon.png';
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
const AvatarWrapper = styled(Avatar)`
    background: white;
    padding: 4px;
    &: hover: {
        pointer: cursor;
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
`;

const links = [
    {
        title: 'Mail',
        src: MailIcon,
        alt: 'mail',
        href: 'mailto:eshuanand07@gmail.com',
    },
    {
        title: 'Github',
        src: GithubIcon,
        alt: 'github',
        href: 'https://github.com/Amadhya',
    },
    {
        title: 'LinkedIn',
        src: LinkedInIcon,
        alt: 'linkedin',
        href: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
    },
    {
        title: 'HackerRank',
        src: HackerRankIcon,
        alt: 'hackerrank',
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
                &quot;Life is not a game to be won, but a game to be played with zeal and enjoyment
                in every moment till the end.&quot;
            </TextWrapper>
            <Separator height={6} />
            <RowWapper justify="space-between">
                {links.map(({ title, href, src, alt }) => (
                    <Tooltip title={title}>
                        <a href={href}>
                            <AvatarWrapper size={45} src={src} alt={alt} />
                        </a>
                    </Tooltip>
                ))}
            </RowWapper>
        </Wrapper>
    </DivWrapper>
);

export default Home;
