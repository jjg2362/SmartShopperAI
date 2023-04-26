import styled, { css, keyframes } from "styled-components";

const GradientButton = css`
  cursor: pointer;
  background: linear-gradient(to left, #caf423, #00cabe); /* 그라데이션 배경색 설정 */
  border: none;
  font-size: 2.4rem;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  padding: 2.1rem 5.8rem;

  @media (max-width: 459px) {
    font-size: 2rem;
  }
`

const SubTitleStyle = css`
  font-size: 1.6rem;
  color: #5ccc5c;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 459px) {
    font-size: 1.4rem;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141619;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 636px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14.9rem 0 52.3rem 0;
  box-sizing: border-box;

  @media (max-width: 769px) {
    max-width: auto;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
  }
`

const GemFloatingAnimation = keyframes`
  0% {
    bottom: -140px;
  }
  100% {
    bottom: -130px;
  }
`

export const TopWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12.3rem;

  & > h5 {
    ${SubTitleStyle};
    margin-bottom: 2.5rem;
    z-index: 2;
  }

  & > h1 {
    font-size: 5.8rem;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 2.8rem;
    text-align: center;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    z-index: 2;

    @media (max-width: 459px) {
      font-size: 4rem;
    }
  }

  & > img{
    position: absolute;
    z-index: 1;

    &:first-child {
      top: 20px;
      right: -240px;
      width: 436px;
      height: auto;
    }

    &:nth-child(2) {
      /* animation: ${GemFloatingAnimation} 1s infinite alternate; */
      bottom: -140px;
      left: -100px;
      width: 153px;
      height: auto;
    }
  }
`

export const FormSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    & > input {
      outline: none;
      border: 0;
      border-radius: 8px;
      width: 100%;
      height: 40px;
      padding: 0 1rem;
      box-sizing: border-box;
    }

    & > textarea {
      outline: none;
      border: 0;
      border-radius: 8px;
      width: 100%;
      height: 260px;
      padding: 1rem;
      box-sizing: border-box;
    }

    & > label{
      font-size: 1.6rem;
      color: #fff;
      margin-bottom: 0.8rem;
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const SendButton = styled.button`
  ${GradientButton};
  margin-top: 5.1rem;
`