import React, { useState, useCallback } from 'react';

import { UserCircle } from '@styled-icons/fa-solid/UserCircle';
import { Email } from '@styled-icons/material-rounded/Email';
import { Subject } from '@styled-icons/material-rounded/Subject';
import { Card, Col, Typography, Form, message, Input, Button } from 'antd';
import styled from 'styled-components';

import Map from 'assets/map.png';
import StyledTitle from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import FadeInBox from 'comps/framerMotion/fadeInBox';
import COLORS from 'constants/colors';

import Details from './details';

const { Text } = Typography;

const StyledContainer = styled(Container)`
  padding: 0;
  position: relative;
  min-height: calc(95vh - 50px);
  background: url(${Map});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledCol = styled(Col)`
  padding: 24px 0px;
`;

const StyledCard = styled(Card)`
  width: 675px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 12px 34px 0 rgba(57, 67, 87, 0.1);
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  background: ${COLORS.EBONY_CLAY} !important;
  border-color: ${COLORS.EBONY_CLAY} !important;
  &: hover {
    background: ${COLORS.EBONY_CLAY};
    border-color: ${COLORS.EBONY_CLAY};
  }
  padding: 4px 28px;
`;

const CardContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px;
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
    <StyledContainer id="contact_me">
      <CardContainer>
        <FadeInBox>
          <StyledCard>
            <StyledCol md={{ span: 14 }} xs={{ span: 24 }}>
              <StyledTitle level={3} fontWeight={1}>
                Get In Touch
              </StyledTitle>
              <Text>Feel free to contact me</Text>
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
                  <Input
                    placeholder="Enter Name"
                    prefix={<UserCircle color={COLORS.EBONY_CLAY} size={18} />}
                  />
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
                  <Input
                    type="email"
                    placeholder="Enter email"
                    prefix={<Email color={COLORS.EBONY_CLAY} size={18} />}
                  />
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
                  <Input
                    placeholder="Enter Subject"
                    prefix={<Subject color={COLORS.EBONY_CLAY} size={18} />}
                  />
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
                  <StyledButton
                    type="primary"
                    htmlType="submit"
                    className="form-button"
                    loading={loading}
                    shape="round"
                  >
                    Send
                  </StyledButton>
                </Form.Item>
              </Form>
            </StyledCol>
            <Details />
          </StyledCard>
        </FadeInBox>
      </CardContainer>
    </StyledContainer>
  );
};

export default ContactMe;
