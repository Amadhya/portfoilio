import React, { useEffect, useState } from 'react';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Navicon } from '@styled-icons/evil/Navicon';
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
    color: ${Colors.BLUE} !important;
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
    padding: 0.5rem;
  }
`;

const RowWrapper = styled(Row)<{ visible: Number }>`
  @media (max-width: 767px) {
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
  }
`;

const NaviconWrapper = styled(Navicon)`
  color: ${Colors.WHITE};
  float: right;

  @media (min-width: 767px) {
    display: none;
  }
`;

const CloseOutlineIcon = styled(CloseOutline)`
  color: ${Colors.WHITE};
  float: right;

  @media (min-width: 767px) {
    display: none;
  }
`;

const links = [
  {
    id: 'home',
    title: 'Home',
  },
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
  const [open, setOpen] = useState(false);

  const onClick = (id: string) => {
    const scrollY = document.getElementById(id)?.offsetTop;

    if (typeof scrollY !== 'undefined') {
      window.scroll({
        top: scrollY - 60,
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
      {open ? (
        <CloseOutlineIcon size={28} onClick={() => setOpen(false)} />
      ) : (
        <NaviconWrapper size={28} onClick={() => setOpen(true)} />
      )}
      <RowWrapper align="middle" justify="space-around" visible={open ? 1 : 0}>
        {links.map(({ id, title }) => (
          <ButtonWrapper type="link" key={id} onClick={() => onClick(id)}>
            {title}
          </ButtonWrapper>
        ))}
      </RowWrapper>
    </Wrapper>
  );
};

export default NavBar;
