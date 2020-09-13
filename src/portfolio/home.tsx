import React from 'react';

import { Typography, Avatar, Row } from 'antd';
import MailIcon from 'assets/email_icon.png';
import GithubIcon from 'assets/github_icon.png';
import HackerRankIcon from 'assets/hackerrank_icon.png';
import LinkedInIcon from 'assets/linkedIn_icon.png';
import { Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Wrapper = styled(Container)`
    text-align: center;
    height: 100vh;
    background: linear-gradient(
        0deg,
        ${Colors.DARK_OCEAN_GRADIENT.PRIMARY_COLOR},
        ${Colors.DARK_OCEAN_GRADIENT.SECONDARY_COLOR}
    );
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
`;

const Home = () => (
    <Wrapper id="home">
        <TitleWrapper level={1}>Amadhya Anand</TitleWrapper>
        <TitleWrapper level={4}>SOFTWARE DEVELOPMENT ENGINEER</TitleWrapper>
        <Separator height={3} />
        <TextWrapper>
            &quot;Life is not a game to be won, but a game to be played with zeal and enjoyment in
            every moment till the end.&quot;
        </TextWrapper>
        <Separator height={6} />
        <RowWapper justify="space-between">
            <a href="mailto:eshuanand07@gmail.com">
                <AvatarWrapper size={45} src={MailIcon} alt="mail" />
            </a>
            <a href="https://github.com/Amadhya">
                <AvatarWrapper size={45} src={GithubIcon} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/amadhya-anand-1761b8169/">
                <AvatarWrapper size={45} src={LinkedInIcon} alt="linkedIn" />
            </a>
            <a href="https://www.hackerrank.com/eshuanand07">
                <AvatarWrapper size={45} src={HackerRankIcon} alt="hackerrank" />
            </a>
        </RowWapper>
    </Wrapper>
);

export default Home;
