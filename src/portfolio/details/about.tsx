import React from 'react';

import { Download } from '@styled-icons/fa-solid/Download';
import { Typography, Col, Button } from 'antd';
import Self from 'assets/self.jpg';
import FadeInBox from 'common/framerMotion/fadeInBox';
import FadeInUpBox from 'common/framerMotion/fadeInUpBox';
import LazyImage from 'common/image';
import { Row, Container, Separator } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled from 'styled-components';

const { Title, Text } = Typography;

const DRIVE_URLS = "https://drive.google.com/file/d/1480Lmh0mgIYZ0hRA8Fmh_w1ASu-OL7YH/view?usp=sharing";

type Props = {
  _key: string;
  value: string;
};

const StyledContainer = styled(Container)`
  background: linear-gradient(
    180deg,
    ${Colors.DEEP_SPACE_GRADIENT.PRIMARY_COLOR},
    ${Colors.DEEP_SPACE_GRADIENT.SECONDARY_COLOR}
  );
  padding: 4rem;
  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;

const TitleWrapper = styled(Title)`
  color: white !important;
`;

const TextWrapper = styled(Text)`
  color: white !important;
`;

const ButtonWrapper = styled(Button)`
  background: ${Colors.LIGHT_BLACK} !important;
  border-color: ${Colors.LIGHT_BLACK} !important;
  &: hover {
    background: ${Colors.LIGHT_BLACK};
    border-color: ${Colors.LIGHT_BLACK};
  }
  border-radius: 4px;
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
        <TextWrapper strong>{_key}:&nbsp;</TextWrapper>
      </Col>
      <Col sm={{ span: 16 }}>
        <TextWrapper>{value}</TextWrapper>
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
          <TitleWrapper level={3}>About</TitleWrapper>
          <Separator />
          <TextWrapper>
            Young, energetic and passionate engineer, who wants to pursue a challenging and growing
            career as a Software Developer with the aim of holistic development and organization’s
            growth. Btw, helping out people is something that I relish the most and love to watch TV
            series in my leisure time.
          </TextWrapper>
          <Separator height={4} />
          <Row>
            <Col xl={{ span: 14 }} sm={{ span: 24 }}>
              <TitleWrapper level={3}>General Information</TitleWrapper>
              <KeyValueRow _key="Experience" value={getExp()} />
              <KeyValueRow _key="Email" value="amadhya.anand@gmail.com" />
              <KeyValueRow _key="Address" value="Chandigarh, India" />
              <KeyValueRow _key="Languages" value="English, Hindi and Punjabi" />
            </Col>
            <Col xl={{ span: 10 }} sm={{ span: 24 }}>
              <Separator height={5.5} />
              <Row gutter={[12, 18]}>
                <Col xl={{ span: 18 }} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
                  <a
                    rel="drive"
                    href={DRIVE_URLS}
                    aria-label="resume-link"
                  >
                    <ButtonWrapper type="primary" icon={<DownloadIcon size={14} />} block>
                      Download Resume
                    </ButtonWrapper>
                  </a>
                </Col>
                <Col xl={{ span: 18 }} lg={{ span: 6 }} md={{ span: 10 }} xs={{ span: 24 }}>
                  <ButtonWrapper
                    type="primary"
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
                  </ButtonWrapper>
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
