import styled from "styled-components";

export const Conatiner = styled.footer`
  width: 100%;
  height: 140px;
  background: #000;
  display: flex;
  justify-content: center;

  @media (max-width: 1297px) {
    height: auto;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1297px) {
    max-width: auto;
    padding: 3rem 1rem;
    box-sizing: border-box;
  }

  @media (max-width: 459px) {
    flex-direction: column-reverse;
  }
`;

export const FooterLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    font-size: 1.4rem;
    color: #fff;
    margin-right: 8rem;
  }

  & > button {
    font-size: 1.4rem;
    color: #fff;
    margin-right: 5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #5ccc5c;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 769px) {
    & > span {
      margin-right: 2rem;
    }
    & > button {
      margin-right: 1rem;
    }
  }

  @media (max-width: 459px) {
    flex-direction: column-reverse;

    & > span {
      margin-right: 0;
      margin-top: 2rem;
    }

    & > button{
      margin-bottom: 1rem;
      margin-right: 0;
    }
  }
`;

export const FooterRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button {
    margin-right: 2.4rem;

    &:last-child {
      margin-right: 0;
    }
    & > img {
      width: 40px;
    }
  }

  @media (max-width: 769px) {
    & > button {
      margin-right: 1rem;

      & > img {
        width: 30px;
      }
    }
  }

  @media (max-width: 459px) {
    margin-bottom: 2rem;
    & > button {
      margin-right: 2.4rem;
    }
  }
`;
