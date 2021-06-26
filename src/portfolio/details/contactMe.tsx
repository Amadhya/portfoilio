import React, { useState, useCallback } from 'react';

import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Col, Typography, Form, message, Input, Button } from 'antd';
import styled from 'styled-components';

import MapIcon from 'assets/map.png';
import FadeInBox from 'common/framerMotion/fadeInBox';
import LazyImage from 'common/image';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container, Row } from 'commonStyles/layouts';
import ABOUT from 'constants/about';
import Colors from 'constants/colors';

const { Text } = Typography;

const Wrapper = styled(Container)`
  padding: 0;
  position: relative;
`;
const TextWrapper = styled(Text)`
  colors: ${Colors.EBONY_CLAY};
  font-size: 16px;
  font-weight: 700;
`;
const CardWrapper = styled(Card)`
  width: 700px;
  border-radius: 8px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ButtonWrapper = styled(Button)`
  background: ${Colors.EBONY_CLAY} !important;
  border-color: ${Colors.EBONY_CLAY} !important;
  &: hover {
    background: ${Colors.EBONY_CLAY};
    border-color: ${Colors.EBONY_CLAY};
  }
  border-radius: 4px;
  padding: 4px 28px;
`;

const CardContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type FormProp = {
  _replyto: string;
  message: string;
};

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const submitForm = useCallback(
    (values: FormProp) => {
      setLoading(true);

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const body = JSON.stringify(values);

      const requestOptions: any = {
        method: 'POST',
        headers,
        body,
        redirect: 'follow',
      };

      fetch('https://formspree.io/xgepweqk', requestOptions)
        .then(res => res.json())
        .then(res => {
          setLoading(false);
          if (res.ok) {
            form.resetFields();
            message.success('Email successful...');
          } else {
            throw new Error('There was some error...');
          }
        })
        .catch(() => {
          setLoading(false);
          message.error('There was some error...');
        });
    },
    [form],
  );

  return (
    <Wrapper id="contact_me">
      <LazyImage fullHeight fullWidth src={MapIcon} alt="Avatar" />
      <CardContainer>
        <FadeInBox>
          <CardWrapper>
            <HeaderWrapper level={3} fontWeight={1} align="center">
              Contact Me
            </HeaderWrapper>
            <Separator height={3} />
            <Row gutter={[24, 12]}>
              <Col sm={{ span: 12 }}>
                <TextWrapper>Feel free to contact me</TextWrapper>
                <Separator height={3} />
                <Form onFinish={submitForm} form={form}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Enter valid name',
                      },
                    ]}
                  >
                    <Input placeholder="Enter Name" prefix={<UserOutlined />} />
                  </Form.Item>
                  <Form.Item
                    name="_replyto"
                    rules={[
                      {
                        required: true,
                        message: 'Enter valid email',
                      },
                    ]}
                  >
                    <Input type="email" placeholder="Enter email" prefix={<MailOutlined />} />
                  </Form.Item>
                  <Form.Item
                    name="_subject"
                    rules={[
                      {
                        required: true,
                        message: 'Enter valid subject',
                      },
                    ]}
                  >
                    <Input placeholder="Enter Subject" />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: 'Enter valid message',
                      },
                    ]}
                  >
                    <Input.TextArea placeholder="Enter message" rows={4} />
                  </Form.Item>
                  <Form.Item>
                    <ButtonWrapper
                      type="primary"
                      htmlType="submit"
                      className="form-button"
                      loading={loading}
                    >
                      Send
                    </ButtonWrapper>
                  </Form.Item>
                </Form>
              </Col>
              <Col sm={{ span: 8, offset: 2 }}>
                <TextWrapper>Address</TextWrapper>
                <Separator height={0.5} />
                <Text strong>{ABOUT.address}</Text>
                <Separator height={3} />
                <TextWrapper>Email</TextWrapper>
                <Separator height={0.5} />
                <Text strong>{ABOUT.email}</Text>
              </Col>
            </Row>
          </CardWrapper>
        </FadeInBox>
      </CardContainer>
    </Wrapper>
  );
};

export default ContactMe;
