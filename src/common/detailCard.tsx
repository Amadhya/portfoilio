import React from 'react';

import { Typography, Col } from 'antd';
import { Row, Card } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled, { css } from 'styled-components';

type ColProps = {
    bg?: boolean;
};

const { Title } = Typography;

const ColWrapper = styled(Col)<ColProps>`
    padding: 1rem 2rem;
    ${({ bg }) =>
        bg &&
        css`
            background: linear-gradient(
                0deg,
                ${Colors.DARK_OCEAN_GRADIENT.PRIMARY_COLOR},
                ${Colors.DARK_OCEAN_GRADIENT.SECONDARY_COLOR}
            );
        `};
`;
const TitleWrapper = styled(Title)`
    color: white !important;
    text-align: center;
`;

type Props = {
    title: string;
    children: React.ReactNode;
};

const DetailCard = (props: Props) => {
    const { title, children } = props;

    return (
        <Card>
            <Row>
                <ColWrapper sm={{ span: 6 }} bg>
                    <TitleWrapper level={4}>{title}</TitleWrapper>
                </ColWrapper>
                <ColWrapper sm={{ span: 18 }}>{children}</ColWrapper>
            </Row>
        </Card>
    );
};

export default DetailCard;
