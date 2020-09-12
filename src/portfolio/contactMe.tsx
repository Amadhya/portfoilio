import React, { useState } from 'react';

import { MailOutlined } from '@ant-design/icons';
import { Card, Col, Typography, Form, message, Input, Button } from 'antd';
import MapIcon from 'assets/map.png';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container, Row } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled from 'styled-components';

const { Text } = Typography;

const Wrapper = styled(Container)`
    background: url(${MapIcon}) no-repeat;
    background-size: cover;
    padding: 5rem;
`;
const TextWrapper = styled(Text)`
    colors: ${Colors.DARK_BLUE};
    font-size: 16px;
    font-weight: 700;
`;
const CardWrapper = styled(Card)`
    width: 700px;
`;

type FormProp = {
    _replyto: string;
    message: string;
};

const ContactMe = () => {
    const [loading, setLoading] = useState(false);

    const submitForm = (values: FormProp) => {
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
                    message.success('Email successful...');
                } else {
                    throw new Error('There was some error...');
                }
            })
            .catch(() => {
                setLoading(false);
                message.error('There was some error...');
            });
    };

    return (
        <Wrapper>
            <CardWrapper>
                <HeaderWrapper level={3} fontWeight={1} align="center">
                    Contact Me
                </HeaderWrapper>
                <Separator height={3} />
                <Row gutter={[24, 12]}>
                    <Col sm={{ span: 12 }}>
                        <TextWrapper>Feel free to contact me</TextWrapper>
                        <Separator height={3} />
                        <Form onFinish={submitForm}>
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
                                    prefix={<MailOutlined />}
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
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="form-button"
                                    loading={loading}
                                >
                                    Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col sm={{ span: 8, offset: 2 }}>
                        <TextWrapper>Address</TextWrapper>
                        <Separator height={0.5} />
                        <Text strong>Chandigarh, Inda</Text>
                        <Separator height={3} />
                        <TextWrapper>Email</TextWrapper>
                        <Separator height={0.5} />
                        <Text strong>eshuanand07@gmail.com</Text>
                    </Col>
                </Row>
            </CardWrapper>
        </Wrapper>
    );
};

export default ContactMe;
