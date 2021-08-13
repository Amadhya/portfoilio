import React from 'react';

import { Download } from '@styled-icons/fa-solid/Download';
import { Typography, Col, Button } from 'antd';
import styled from 'styled-components';

import Self from 'assets/self.jpg';
import FadeInBox from 'common/framerMotion/fadeInBox';
import FadeInUpBox from 'common/framerMotion/fadeInUpBox';
import LazyImage from 'common/image';
import { Row, Container, Separator } from 'commonStyles/layouts';
import ABOUT from 'constants/about';
import COLORS from 'constants/colors';

const { Title, Text } = Typography;

type Props = {
  _key: string;
  value: string;
};

const StyledContainer = styled(Container)`
  background: linear-gradient(180deg, ${COLORS.BLACK}, ${COLORS.TUNDORA});
  padding: 4rem;
  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;

const StyledTitle = styled(Title)`
  color: ${COLORS.WHITE} !important;
`;

const StyledText = styled(Text)`
  color: ${COLORS.WHITE} !important;
`;

const StyledButton = styled(Button)`
  background: ${COLORS.MINE_SHAFT} !important;
  border-color: ${COLORS.MINE_SHAFT} !important;
  &: hover {
    background: ${COLORS.MINE_SHAFT};
    border-color: ${COLORS.MINE_SHAFT};
  }
  padding: 4px 28px;
`;

const DownloadIcon = styled(Download)`
  margin-right: 12px;
`;

const KeyValueRow = (props: Props) => {
  const { _key, value } = props;
  return (
    <Row align="middle" gutter={[0, 16]}>
      <Col sm={{ span: 8 }}>
        <StyledText strong>{_key}:&nbsp;</StyledText>
      </Col>
      <Col sm={{ span: 16 }}>
        <StyledText>{value}</StyledText>
      </Col>
    </Row>
  );
};

const getExp = () => {
  const date1 = new Date(2020, 7, 13);
  const date2 = new Date();
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const internship = 6;
  const totalExpMonth = (month2 - month1 + internship + 1) % 12;
  const totalExpYear = year2 - year1 + Math.floor((month2 - month1 + internship + 1) / 12);

  return `${totalExpYear} year${totalExpYear > 1 ? 's' : ''}, ${totalExpMonth} month${
    totalExpMonth > 1 ? 's' : ''
  } (${internship} months internship)`;
};

const About = () => (
  <StyledContainer id="about">
    <Row justify="center" gutter={[18, 24]}>
      <Col xl={{ span: 5 }} sm={{ span: 6 }}>
        <FadeInBox>
          <LazyImage width={160} height={160} src={Self} alt="Avatar" circular />
        </FadeInBox>
      </Col>
      <Col xl={{ span: 14 }} sm={{ span: 16 }}>
        <FadeInUpBox yOffset={75}>
          <StyledTitle level={3}>About</StyledTitle>
          <Separator />
          <StyledText>{ABOUT.info}</StyledText>
          <Separator height={4} />
          <Row>
            <Col xl={{ span: 14 }} sm={{ span: 24 }}>
              <StyledTitle level={3}>General Information</StyledTitle>
              <KeyValueRow _key="Experience" value={getExp()} />
              <KeyValueRow _key="Email" value={ABOUT.email} />
              <KeyValueRow _key="Address" value={ABOUT.address} />
              <KeyValueRow _key="Languages" value={ABOUT.languages.join(', ')} />
            </Col>
            <Col xl={{ span: 10 }} sm={{ span: 24 }}>
              <Separator height={5.5} />
              <Row gutter={[12, 18]}>
                <Col xl={{ span: 18 }} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
                  <a
                    href={ABOUT.resume}
                    aria-label="resume-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledButton
                      type="primary"
                      shape="round"
                      icon={<DownloadIcon size={14} />}
                      block
                    >
                      Download Resume
                    </StyledButton>
                  </a>
                </Col>
                <Col xl={{ span: 18 }} lg={{ span: 6 }} md={{ span: 10 }} xs={{ span: 24 }}>
                  <StyledButton
                    type="primary"
                    shape="round"
                    block
                    onClick={() => {
                      const scrollY = document.getElementById('contact_me')?.offsetTop;

                      if (typeof scrollY !== 'undefined') {
                        window.scroll({
                          top: scrollY - 50,
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    Hire Me
                  </StyledButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </FadeInUpBox>
      </Col>
    </Row>
  </StyledContainer>
);

export default About;
