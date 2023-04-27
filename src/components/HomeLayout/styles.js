import styled, {css, keyframes} from "styled-components";

const TitleStyle = css`
  font-size: 4.2rem;
  font-weight: bold;
  line-height: 1.25;

  @media (max-width: 459px) {
    font-size: 3.4rem;
  }
`

const DescriptionStyle = css`
  font-size: 2.2rem;
  line-height: 1.5;

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
  padding: 1.8rem 3.2rem;

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


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledText = styled.div`
  opacity: 0;
  transform: translateY(20px);
  ${(props) => props.isShow && css`
    animation: ${fadeIn} 1s ease-in-out forwards;
    `
  };
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

export const FirstSection = styled.section`
  width: 100%;
  height: 940px;
  background-color: #141619;
  display: flex;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
    padding: 0 4rem;
    box-sizing: border-box;
  }
`

export const FirstSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  padding: 23.6rem 0 21.3rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media (max-width: 1220px) {
    max-width: auto;
  }

  @media (max-width: 769px) {
    flex-direction: column-reverse;
    padding: 10rem 0 7rem 0;
  }
`

export const FirstLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media (max-width: 1220px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    align-items: center;
  }
`

export const FirstSectionTitle = styled.h1`
  font-size: 5.8rem;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 5.5rem;

  & > em {
    font-size: inherit;
    color: inherit;
    font-weight: bold;
  }

  @media (max-width: 769px) {
    text-align: center;
    margin-bottom: 2.3rem;
  }

  @media (max-width: 459px) {
    font-size: 3.4rem;
  }
`

export const FirstSectionDescription = styled.p`
  ${DescriptionStyle};
  color: #cccccc;
  margin-bottom: 3.3rem;
  text-align: center;
`

export const LearnMoreButton = styled.button`
  ${GradientButton};
  align-self: flex-start;

  @media (max-width: 769px) {
    align-self: auto;
  }
`;

export const ContactButton = styled.button`
  ${GradientButton};
`;

export const FirstRightSection = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-end;

  & > img {
    width: auto;
    height: 647px;
    object-fit: contain;
  }
 

  @media (max-width: 1220px) {
    margin-bottom: 6rem;
    justify-content: center;
  }

  @media (max-width: 769px) {
    width: 100%;
    & > img {
      width: 80%;
      height: auto;
    }
  }
`

export const SecondSection = styled.section`
  width: 100%;
  height: 940px;
  background: linear-gradient(to bottom, #1c2039, #0a1713);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
    padding: 8rem 4rem;
    box-sizing: border-box;
  }
`

export const SecondSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;

  & > h5 {
    ${SubTitleStyle};
    margin-bottom: 3rem;
    text-align: center;
  }

  & > h1 {
    ${TitleStyle};
    color: #fff;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  & > h3 {
    ${DescriptionStyle};
    color: #ccc;
    margin-bottom: 8.1rem;
    text-align: center;
  }  

  @media (max-width: 1220px) {
    max-width: auto;
  }
`

export const SecondCardList = styled.ul`
  width: 100%;
  display: flex;

  & > li {
    opacity: 0;
    transform: translateY(20px);
  }

  ${(props) => props.isShow && css`
      & > li {
        &:nth-child(1) {
          animation: ${fadeIn} 0.6s ease-in-out forwards;
        }

        &:nth-child(2) {
          animation: ${fadeIn} 0.6s ease-in-out forwards;
          animation-delay: 0.3s;
        }

        &:nth-child(3) {
          animation: ${fadeIn} 0.6s ease-in-out forwards;
          animation-delay: 0.6s;
        }
    } 
  `}

  @media (max-width: 459px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SecondCardItem = styled.li`
  width: 33.3%;
  height: 400px;
  padding-right: 2.4rem;

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 768px) {
    height: 260px;
    padding-right: 1.2rem;
  }

  @media (max-width: 459px) {
    width: 80%;
    height: 300px;

    margin-bottom: 2.4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const SecondCardItemWrapper = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, #3d4051, #1c2039);
  border-radius: 20px;
  padding: 6.2rem 2.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 58px;
    margin-bottom: 1.6rem;
  }

  & > h1{
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 2.4rem;
    text-align: center;
    font-weight: bold;
  }

  & > p{
    text-align: center;
    font-size: 2rem;
    color: #ccc;
    text-align: center;
    line-height: 1.5;
    word-break: keep-all;
    -webkit-line-clamp: 5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
  }

  @media (max-width: 769px) {
    padding: 3rem 1.2rem;

    & > img{
      width: 40px;
    }

    & > h1{
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    & > p{
      font-size: 1.6rem;
    }
  }

  @media (max-width: 459px) {
    padding: 3rem 1.2rem;

    & > img{
      width: 58px;
    }

    & > h1{
      font-size: 2.2rem;
      margin-bottom: 2.4rem;
    }

    & > p{
      font-size: 2rem;
    }
  }
`

export const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  & > span{
    font-size: 1.6rem;
    color: #ccc;
    margin-right: 0.8rem;
    text-align: center;
  }

  & > button{
    font-size: 1.6rem;
    font-weight: bold;
    color: #5ccc5c;
  }

  @media (max-width: 769px) {
      flex-direction: column;

    & > button{
      margin-top: 1.2rem;
    }
  }
`

export const ThirdSection = styled.section`
  width: 100%;
  height: 940px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
    box-sizing: border-box;
  }
`

export const ThirdSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  display: flex;

  @media (max-width: 1220px) {
    max-width: auto;
    height: auto;
    padding: 8rem 4rem;
    box-sizing: border-box;
    flex-direction: column;
  }
`

export const ThirdLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  & > h5{
    ${SubTitleStyle}
    margin-bottom: 3.2rem;
  }

  & > h1 {
    ${TitleStyle};
    color: #000;
    margin-bottom: 2.1rem;
  }

  & > p {
    ${DescriptionStyle};
    color: #000;
    margin-bottom: 6.8rem;
  }

  @media (max-width: 1220px) {
    width: 100%;
  }
`

export const ThirdImageSection = styled.div`
  display: flex;
  flex-direction: column;
  
  & > img{
    width: 65px;
    height: auto;
    padding-bottom: 3.7rem;
  }

  &:after{
    content: '';
    display: block;
    width: 86px;
    height: 1px;
    background: #ccc;
    margin-bottom: 3.7rem;
  }
`

export const ThirdRightSection = styled.div`
  position: relative;

  & > img {
    width: 736px;
    height: auto;
  }

  @media (max-width: 1220px) {
    margin-top: 2rem;
    align-self: center;
  }

  @media (max-width: 769px) {
    margin-top: 4rem;

    & > img {
      width: 100%;
    }
  }
`

const ThirdPlayTimeCircleAnimation = keyframes`
  0% {
    top: -50px;
  }
  100% {
    top: -30px;
  }
`

export const ThirdPlayTimeCircle = styled.div`
  animation: ${ThirdPlayTimeCircleAnimation} 1s 1s infinite alternate;
  position: absolute;
  top: -50px;
  left: 20%;
  border-radius: 50%;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4d97dc;

  & > h3 {
    font-size: 4.2rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  & > span{
    font-size: 2.2rem;
    color: #fff;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
  }

  @media (max-width: 769px) {
    width: 160px;
    height: 160px; 

    & > h3 {
      font-size: 3rem;
    }

    & > span{
      font-size: 1.6rem;
    }
  }

  @media (max-width: 459px) {
    width: 120px;
    height: 120px; 

    & > h3 {
      font-size: 2.4rem;
    }

    & > span{
      font-size: 1.4rem;
    }
  }
`

const ThirdRetentionCircleAnimation = keyframes`
  0% {
    top: 40px;
  }
  100% {
    top: 60px;
  }
`

export const ThirdRetentionCircle = styled.div`
  animation: ${ThirdRetentionCircleAnimation} 1s 1s infinite alternate;
  position: absolute;
  top: 40px;
  right: -10px;
  border-radius: 50%;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00c059;

  & > h3 {
    font-size: 4.2rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  & > span{
    font-size: 2.2rem;
    color: #fff;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
  }

  @media (max-width: 769px) {
    width: 160px;
    height: 160px; 

    & > h3 {
      font-size: 3rem;
    }

    & > span{
      font-size: 1.6rem;
    }
  }

  @media (max-width: 459px) {
    width: 120px;
    height: 120px; 

    & > h3 {
      font-size: 2.4rem;
    }

    & > span{
      font-size: 1.4rem;
    }
  }
`

export const FourthSection = styled.section`
  width: 100%;
  height: 940px;
  background: #eef0f5;
  display: flex;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
  }
`

export const FourthSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1220px) {
    max-width: auto;
    height: auto;
    padding: 8rem 4rem 0 4rem;
    box-sizing: border-box;
    flex-direction: column;
  }
`

export const FourthLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
  height: 100%;

  & > h5{
    ${SubTitleStyle};
    margin-bottom: 3.2rem;
  }

  & > h1 {
    ${TitleStyle};
    color: #000;
    margin-bottom: 2.1rem;
  }

  & > p {
    ${DescriptionStyle};
    color: #000;
    margin-bottom: 6.8rem;
  }

  & > button {
    align-self: flex-start;
    font-size: 2.2rem;
    color: #016dbb;
    font-weight: bold;
  }

  @media (max-width: 1220px) {
    width: 100%;
  }
`

export const FourthRightSection = styled.div`
  position: relative;
  width: 52%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > img {
    align-self: flex-end;
    width: 600px;
    height: auto;    
  }

  @media (max-width: 1220px) {
    margin-top: 10rem;
    width: 100%;

    & > img {
      align-self: center;
    }
  }

  @media (max-width: 769px) {
    & > img {
      width: 80%;
    }
  }
`

export const GooglePlayButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 640px;
  right: 0;

  & > button {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }

  img{
    &:nth-child(1) {
      width: auto;
      height: 80px;
    }

    &:nth-child(2) {
      width: auto;
      height: 80px;
    }
  }

  @media (max-width: 769px) {
    justify-content: center;
    position: static;
    margin-bottom: 2rem;
  }

  @media (max-width: 459px) {
    img{
      &:nth-child(1) {
        width: auto;
        height: 60px;
      }

      &:nth-child(2) {
        width: auto;
        height: 60px;
      }
    }
  }
`

export const FifthSection = styled.section`
  width: 100%;
  height: 760px;
  background: #141619;
  display: flex;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
  }
`

export const FifthSectionWrapper = styled.div`
  position: relative;
  max-width: 1220px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1220px) {
    max-width: auto;
    height: auto;
    padding: 2rem 4rem;
    box-sizing: border-box;
  }
`

export const FifthImageSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img{
    width: 1198px;
    height: auto;
  }
`

export const FifthCountryWrapper = styled.div`
  & > img{
    position: absolute;

    &:nth-child(1) {
      top: 210px;
      left: 50px;
      width: auto;
      height: 30px;
    }

    &:nth-child(2) {
      top: 250px;
      left: 5px;
      width: auto;
      height: 30px;
    }

    &:nth-child(3) {
      top: 290px;
      left: 40px;
      width: auto;
      height: 30px;
    }

    &:nth-child(4) {
      top: 230px;
      right: 145px;
      width: auto;
      height: 40px;
    }
  }

  @media (max-width: 1220px) {
    display: none;
  }
`

export const FifthTitleWrapper = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  position: flex;
  flex-direction: column;

  & > h5{
    ${SubTitleStyle};
  }

  & > h1{
    ${TitleStyle};
    color: #fff;
  }

  @media (max-width: 1220px) {
    left: 40px;
  }
`

export const FifthFloatImageWrapper = styled.div`
  position: absolute;
  bottom: -140px;
  right: 0;

  & > img{
    width: 527px;
    height: auto;
  }

  @media (max-width: 1220px) {
    display: none;
  }
`

export const SixthSection = styled.section`
  width: 100%;
  height: 760px;
  background: linear-gradient(to bottom, #ebeef4, #eaebf1); /* 그라데이션 배경색 설정 */
  display: flex;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
  }
`

export const SixthSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1220px) {
    max-width: auto;
    height: auto;
    padding: 8rem 4rem;
    box-sizing: border-box;
  }
`

export const SixthTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h5{
    ${SubTitleStyle};
    margin-bottom: 3.2rem;
  }

  & > h1{
    ${TitleStyle};
    color: #000;
  }
`

export const LuckmonResourceCardList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;

  @media (max-width: 769px) {
    flex-wrap: wrap;
  }

  @media (max-width: 459px) {
    justify-content: center;
  }
`

export const LuckmonResourceCardImageWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: #cfcfcf;

  & > img{
    max-width: 100%;
    object-fit: cover;
  }
`

export const LuckmonResourceCardImageWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: #141619;

  & > img{
    max-width: 100%;
    object-fit: cover;
  }
`

export const LuckmonResourceCardTitleWrapper = styled.div`
  background-color: #fff;
  padding: 2.7rem 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50%;
  width: 100%;

  & > h3{
    font-size: 1.6rem;
    color: #749c9a;
    margin-bottom: 0.6rem;
    font-weight: bold;
  }

      & > p {
        text-align: left;
        font-size: 1.8rem;
        color: #000;
        font-weight: bold;
        line-height: 1.5;
        word-break: keep-all;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space: pre-wrap;
      }

  @media (max-width: 459px) {
    padding: 1.7rem 2rem;
  }
`

export const LuckmonResourceCard = styled.li`
  width: 24%;
  height: 356px;

  &:last-child {
    margin-right: 0;
  }

  & > button {
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > img{
      width: 100%;
      height: 50%;
      object-fit: cover;
    }
  }

  @media (max-width: 769px) {
    width: 49%;
    margin-bottom: 2rem;
  }

  @media (max-width: 459px) {
    width: 80%;
    height: 246px;
  }
`


export const SeventhSection = styled.section`
  width: 100%;
  height: 900px;
  background: linear-gradient(to bottom, #1c2039, #0a1713); /* 그라데이션 배경색 설정 */
  display: flex;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
  }
`

export const SeventhSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1220px) {
    max-width: auto;
    height: auto;
    padding: 8rem 4rem 4rem 4rem;
    box-sizing: border-box;
  }
`

export const AlohaFactoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11.8rem;

  & > img{
    width: 212px;
    height: auto;
  }

  & > h2{
    margin-top: 4.6rem;
    text-align: center;
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    line-height: 1.5;
  }

  & > h6{
    margin-top: 3.9rem;
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
  }

  & > span{
    margin-top: 0.8rem;
    font-size: 1.8rem;
    color: #fff;
    text-align: center;
  }

  @media (max-width: 1220px) {
    margin-top: 0;
  }

  @media (max-width: 469px) {
    & > h2{
      font-size: 2.4rem;
    }

    & > h6{
      font-size: 1.6rem;
    }

    & > span{
      font-size: 1.6rem;
    }
  }
`

export const CompanyLogoWrapper = styled.div`
  width: 100%;
  margin-top: 9.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > img{
    width: 170px;
    height: auto;

    &:last-child{
      margin-right: 0;
    }
  }

  @media (max-width: 769px) {
    & > img{
      width: 100px;
    }
  }

  @media (max-width: 459px) {
    align-items: space-between;
    flex-wrap: wrap;

    & > img{
      width: 40%;
      margin-bottom: 1rem;
    }
  }
`

export const SeventhFloatImageWrapper = styled.div`
    & > img{
      position: absolute;

      &:nth-child(1){
        bottom: 60px;
        left: 140px;
        width: 203px;
      }
      &:nth-child(2){
        bottom: -280px;
        left: 0;
        width: 526px;
      } 
    }

  @media (max-width: 1220px) {
    display: none;
  }
`

export const EighthSection = styled.section`
  width: 100%;
  height: 760px;
  background: #141619;
  display: flex;
  justify-content: center;

  @media (max-width: 1220px) {
    height: auto;
  }
`

export const EighthSectionWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1{
    ${TitleStyle};
    margin-top: 30.6rem;
    color: #fff;
  }

  & > h5{
    ${DescriptionStyle};
    color: #ccc;
    margin-top: 2.3rem;
    margin-bottom: 5.2rem;
    text-align: center;
  }

  @media (max-width: 1220px) {
    max-width: auto;
    height: auto;
    padding: 8rem 4rem;
    box-sizing: border-box;

    & > h1{
      margin-top: 0;
    }
  }
`