import styled, { css, keyframes } from "styled-components";
import Modal from 'react-modal';

export const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NeoModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const CloseButton = styled.button`
  padding: 0;
  position: absolute;
  bottom: 1rem;
  right: 0;

  & > svg {
    font-size: 4rem;
    color: #fff;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 7rem 5.3rem;
  background-color: #fff;

  max-width: 600px;

  & > h1{
    color: #171717;
    text-align: center;
    font-weight: bold;
    font-size: 2.2rem;
    margin-bottom: 3.2rem;
    line-height: 1.5;
  }

  & > p{
    color: #171717;
    text-align: center;
    font-size: 1.8rem;
    line-height: 1.5;
  }

  & > button {
    margin-top: 6.7rem;;
    padding: 1.2rem 4.6rem;
    background-color: #000;
    color: #fff;
    font-size: 2.4rem;
    font-weight: bold;
    border-radius: 8px;
  }

  @media (max-width: 459px) {
    padding: 2rem 1rem;
    max-width: auto;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const fadeInUp = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`

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
  padding: 16rem 0 52.3rem 0;
  box-sizing: border-box;

  @media (max-width: 769px) {
    max-width: auto;
    width: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
    box-sizing: border-box;
  }
`

export const TopWrapper = styled.div`
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
    line-height: 1.25;
    color: #fff;
    margin-bottom: 2.8rem;
    text-align: center;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    z-index: 2;

    @media (max-width: 459px) {
      font-size: 4rem;
    }
  }
`

export const TopImageWrapper = styled.div`
  position: relative;

  & > img{
    position: absolute;
    z-index: 1;
    &:nth-child(1) {
      top: -120px;
      right: -150px;
      width: 226px;
      height: auto;
      animation: ${fadeInUp} 1s;

      @media (max-width: 768px) {
      }
    }

    &:nth-child(2) {
      top: 130px;
      right: -180px;
      width: 64px;
      height: auto;
      animation: ${fadeInUp} 1s;

      @media (max-width: 768px) {
      }
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

export const Form = styled.form`
 width: 100%;
    display: flex;
    flex-direction: column;

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
`

export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 3rem;

  & > img {
    position: absolute;
    top: -90px;
    right: -115px;
    width: 186px;
    height: auto;
    animation: ${fadeInUp} 1s;
  }
`

export const MessageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  & > img {
    animation: ${fadeInUp} 1s;
    position: absolute;
    top: -20px;
    left: -160px;
    width: 150px;
    height: auto;
  }
`

export const ButtonSection = styled.section`
  position: relative;
  margin-top: 5.1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  & > img {
    position: absolute;
    animation: ${fadeInUp} 1s;
    z-index: 1;

    &:nth-child(1) {
      width: 170px;
      height: auto;
      top: -220px;
      left: -280px;
    }

    &:nth-child(2) {
      width: 436px;
      height: auto;
      top: -130px;
      left: -300px;

      @media (max-width: 459px) {
        width: 336px;
        top: -80px;
        left: -200px;
      }
    }
  }
`

export const SendButton = styled.button`
  ${GradientButton};
  z-index: 2;
`