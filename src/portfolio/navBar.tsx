import React, { useEffect, useState, useCallback, useRef } from 'react';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Navicon } from '@styled-icons/evil/Navicon';
import { Button } from 'antd';
import styled, { css } from 'styled-components';

import { Row } from 'commonStyles/layouts';
import Colors from 'constants/colors';

type WrapperProps = {
  changeBg: Number;
};

type ButtonProps = {
  isactive: string;
};

const ButtonWrapper = styled(Button)<ButtonProps>`
  color: white !important;
  &: hover {
    color: ${Colors.CERULEAN} !important;
  }
  ${({ isactive }) =>
    isactive === 'true' &&
    css`
      border-bottom: 2px solid ${Colors.CERULEAN} !important;
    `};
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
      background: linear-gradient(0deg, ${Colors.BIG_STONE}, ${Colors.CLOUD_BURST});
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
    transition: all 0.5s ease;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
  }
`;

const NaviconWrapper = styled(Navicon)`
  color: ${Colors.ALABASTER};
  float: right;

  @media (min-width: 767px) {
    display: none;
  }
`;

const CloseOutlineIcon = styled(CloseOutline)`
  color: ${Colors.ALABASTER};
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

const getDimensions = (ele: HTMLElement | null) => {
  if (!ele) {
    return {};
  }
  const { height } = ele.getBoundingClientRect();
  const {offsetTop} = ele;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const NavBar = () => {
  const [changeBg, setChangeBg] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const headerRef = useRef(null);

  const onClick = useCallback((id: string) => {
    const scrollY = document.getElementById(id)?.offsetTop;

    if (scrollY || scrollY === 0) {
      window.scroll({
        top: Math.max(scrollY - 40, 0),
        behavior: 'smooth',
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const { height: headerHeight = 0 } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight;
    const aboutEle = document.getElementById('about');
    const { offsetTop: aboutOffsetTop } = getDimensions(aboutEle);

    if (aboutOffsetTop && scrollPosition < aboutOffsetTop) {
      setChangeBg(false);
    } else if (aboutOffsetTop && scrollPosition >= aboutOffsetTop && !changeBg) {
      setChangeBg(true);
    }

    const { id: selectedId } =
      links.find(({ id }) => {
        const ele = document.getElementById(id);

        if (ele) {
          const { offsetBottom = 0, offsetTop = 0 } = getDimensions(ele);

          return scrollPosition > offsetTop - 80 && scrollPosition < offsetBottom;
        }

        return false;
      }) || {};

    if (selectedId && selectedId !== activeTab) {
      setActiveTab(selectedId);
    }
  }, [changeBg, headerRef, setActiveTab, activeTab]);

  useEffect(() => {
    const doc = document.getElementById('home');

    if (doc) {
      handleScroll();

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {};
  }, [handleScroll]);

  return (
    <Wrapper changeBg={Number(changeBg)} ref={headerRef}>
      {open ? (
        <CloseOutlineIcon size={28} onClick={() => setOpen(false)} />
      ) : (
        <NaviconWrapper size={28} onClick={() => setOpen(true)} />
      )}
      <RowWrapper align="middle" justify="space-around" visible={open ? 1 : 0}>
        {links.map(({ id, title }) => (
          <ButtonWrapper
            type="link"
            key={id}
            onClick={() => onClick(id)}
            isactive={(activeTab === id).toString()}
          >
            {title}
          </ButtonWrapper>
        ))}
      </RowWrapper>
    </Wrapper>
  );
};

export default NavBar;
