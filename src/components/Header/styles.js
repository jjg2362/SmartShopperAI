import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 68px;
  box-sizing: border-box;
  z-index: 999;
  top: 0;
  left: 0;
  position: fixed;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s ease;

  ${(props) =>
    props.isSticky
      ? css`
          background-color: #000;
          opacity: 0.8;
        `
      : css`
          background-color: transparent;
        `}
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1296px) {
    justify-content: flex-end;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 1296px) {
    left: 20px;
  }
`;

export const HeaderButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > li {
    margin-right: 70px;

    &:last-child {
      margin-right: 20px;
    }
  }

  @media (max-width: 769px) {
    display: none;

    & > li {
      margin-right: 20px;
    }
  }
`;

export const HamButton = styled.button`
  display: none;
  margin-right: 20px;
  position: relative;
  width: 33px;
  height: 23px;
  z-index: 990;

  span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 4px;

    &:nth-of-type(1) {
      top: 0;
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-of-type(3) {
      bottom: 0;
    }
  }

  ${(props) =>
    props.isOpen &&
    css`
      span:nth-of-type(1) {
        -webkit-transform: translateY(10px) rotate (-45deg);
        transform: translateY(10px) rotate(-45deg);
      }

      span:nth-of-type(2) {
        opacity: 0;
      }

      span:nth-of-type(3) {
        -webkit-transform: translateY(-10px) rotate(45deg);
        transform: translateY(-10px) rotate(45deg);
      }
    `}

  @media (max-width : 769px) {
    display: block;
  }
`;

export const SideBarWrapper = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-240px')};
  width: 240px;
  height: 100vh;
  background-color: #141619;
  transition: right 0.3s ease;
  padding: 12rem 3rem 0 3rem;
  box-sizing: border-box;

  @media (max-width: 769px) {
    display: block;
  }
`;

export const SidebarButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > li {
    margin-bottom: 4.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HeaderButtonStyle = css`
  font-size: 1.8rem;
  font-weight: bold;
  transition: all 0.3s ease;
  color: ${(props) => (props.isActive ? '#5ccc5c' : '#fff')};

  &:hover {
    color: #5ccc5c;
  }
`;

export const HeaderButton = styled.button`
  ${HeaderButtonStyle};
  font-size: 1.6rem;
`;

export const SidebarButton = styled.button`
  ${HeaderButtonStyle};
  font-size: 2.2rem;
`;
