import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { Row } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled, { css } from 'styled-components';

type WrapperProps = {
    changeBg: Number;
};

const ButtonWrapper = styled(Button)`
    color: white !important;
    &: hover {
        color: cyan !important;
    }
`;
const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    background: transparent;
    z-index: 4;
    padding: 0.5rem 16rem;
    width: 100%;
    ${({ changeBg }) =>
        changeBg &&
        css`
            background: linear-gradient(
                0deg,
                ${Colors.DARK_OCEAN_GRADIENT.PRIMARY_COLOR},
                ${Colors.DARK_OCEAN_GRADIENT.SECONDARY_COLOR}
            );
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
        `};
    @media (max-width: 1024px) {
        padding: 0.5rem 4rem;
    }
    @media (max-width: 767px) {
        padding: 0.5rem 2rem;
    }
`;

const links = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work_exp',
        title: 'Work',
    },
    {
        id: 'education',
        title: 'Education',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'skill_set',
        title: 'Skill Set',
    },
    {
        id: 'contact_me',
        title: 'Contact',
    },
];

const NavBar = () => {
    const [changeBg, setChangeBg] = useState(false);

    const onClick = (id: string) => {
        const scrollY = document.getElementById(id)?.offsetTop;

        if (typeof scrollY !== 'undefined') {
            window.scroll({
                top: scrollY - 45,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        const aboutOffsetTop = document.getElementById('about')?.offsetTop;
        const offsetY = window.pageYOffset;

        if (aboutOffsetTop && offsetY < aboutOffsetTop) {
            setChangeBg(false);
        } else if (aboutOffsetTop && offsetY >= aboutOffsetTop && !changeBg) {
            setChangeBg(true);
        }
    };

    useEffect(() => {
        const doc = document.getElementById('home');

        if (doc) {
            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }

        return undefined;
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper changeBg={Number(changeBg)}>
            <Row align="middle" justify="space-around">
                <ButtonWrapper type="link" onClick={() => onClick('home')}>
                    Home
                </ButtonWrapper>
                {links.map(({ id, title }) => (
                    <ButtonWrapper type="link" key={id} onClick={() => onClick(id)}>
                        {title}
                    </ButtonWrapper>
                ))}
            </Row>
        </Wrapper>
    );
};

export default NavBar;
