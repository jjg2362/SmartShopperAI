import styled, { css } from "styled-components";

const TitleStyle = css`
  font-size: 4.2rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 459px) {
    font-size: 3.4rem;
  }
`

const DescriptionStyle = css`
  font-size: 2.2rem;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 459px) {
    font-size: 1.8rem;
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
`;

export const MissionSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16rem 0 10.3rem 0;
  box-sizing: border-box;
  background-color: #141619;
  width: 100%;
  overflow: hidden;
`

export const MissionTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  & > h5 {
    ${SubTitleStyle};
    margin-bottom: 3.7rem;
  }

  & > h1 {
    font-size: 5.8rem;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 2.8rem;
    text-align: center;

    @media (max-width: 459px) {
      font-size: 4rem;
    }
  }

  & > p {
    ${DescriptionStyle};
    color: #cccccc;
    margin-bottom: 6.5rem;
  }

  & > img{
    width: 621px;
    height: auto;

    @media (max-width: 769px) {
      width: 460px;
      height: auto;
    }
  }
`

export const MissionBackground = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/About_assets/Group 4691.png');
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 1;
`

export const TeamSection = styled.section`
  width: 100%;
  background: linear-gradient(to bottom, #1c2039, #0a1713);
  padding: 19.9rem 0 50rem 0;
  display: flex;
  justify-content: center;
`

export const TeamSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TeamTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h5 {
    ${SubTitleStyle};
    margin-bottom: 3.7rem;
  }

  & > h1 {
    ${TitleStyle};
    margin-bottom: 2.8rem;
    color: #fff;
  }

  & > img {
    width: 1025px;
    height: 100%;
    margin-bottom: 2.3rem;

    @media (max-width: 1296px) {
      width: 80%;
      height: auto;
    }
  }

  & > button {
    ${GradientButton};
  }
`

export const MemberList = styled.ul`
  margin-top: 18.9rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const MemberItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 10rem;

  & > h3 {
    ${TitleStyle};
    color: #fff;
    margin-bottom: 0.2rem;
  }

  & > p {
    ${DescriptionStyle};
    color: #fff;
  }

  @media (max-width: 769px) {
    width: 60%;
  }
`