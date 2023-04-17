import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;;
`

export const FirstSection = styled.section`
  width: 100%;
  height: 940px;
  background-color: #141619;
  display: flex;
  justify-content: center;
`

export const FirstSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  padding: 23.6rem 0 21.3rem 0;
  display: flex;
  flex-direction: row;
`

export const FirstLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const FirstSectionTitle = styled.h1`
  font-size: 5.8rem;
  color: #fff;
  line-height: 1.5;
  margin-bottom: 5.5rem;

  & > em {
    font-size: inherit;
    color: inherit;
    font-weight: bold;
  }
`

export const FirstSectionDescription = styled.p`
  font-size: 2.2rem;
  color: #cccccc;
  margin-bottom: 3.3rem;
  line-height: 1.5;
`

export const LearnMoreButton = styled.button`
  cursor: pointer;
  background: linear-gradient(to left, #caf423, #00cabe); /* 그라데이션 배경색 설정 */
  border: none;
  font-size: 2.4rem;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  width: 27rem;
  height: 7rem;
`;

export const FirstRightSection = styled.div`
  position: relative;
  width: 50%;

  & > img {
    position: absolute;

    &:nth-child(1) {
      top: 0;
      right: 0;
      width: 470px;
      height: auto;
    }

    &:nth-child(2) {
      top: -20px;
      left: 0;
    }

    &:nth-child(3) {
      top: 30px;
      left: 60%;
      transform: translateX(-50%);
      width: 348px;
      height: auto;
    }

    &:nth-child(4) {
      bottom: -150px;
      left: 150px;
      width: 378px;
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
`

export const SecondSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;

  & > h5 {
    font-size: 1.6rem;
    color: #5ccc5c;
    margin-bottom: 3rem;
    font-weight: bold;
    text-align: center;
  }

  & > h1 {
    font-size: 4.2rem;
    color: #fff;
    margin-bottom: 2.5rem;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
  }

  & > h3 {
    font-size: 2.2rem;
    color: #ccc;
    margin-bottom: 8.1rem;
    line-height: 1.5;
    text-align: center;
  }  
`

export const SecondCardList = styled.ul`
  width: 100%;
  display: flex;
`

export const SecondCardItem = styled.li`
  width: 33.3%;
  height: 400px;
  padding-right: 2.4rem;

  &:last-child {
    padding-right: 0;
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
  }

  & > button{
    font-size: 1.6rem;
    font-weight: bold;
    color: #5ccc5c;
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
`

export const ThirdSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  display: flex;
`

export const ThirdLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  & > h5{
    font-size: 1.6rem;
    color: #5ccc5c;
    margin-bottom: 3.2rem;
    font-weight: bold;
  }

  & > h1 {
    font-size: 4.2rem;
    color: #000;
    margin-bottom: 2.1rem;
    font-weight: bold;
    line-height: 1.5;
  }

  & > p {
    font-size: 2.2rem;
    color: #000;
    margin-bottom: 6.8rem;
    line-height: 1.5;
  }

  & > button {
    align-self: flex-start;
    font-size: 2.2rem;
    color: #016dbb;
    font-weight: bold;
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
  width: 60%;
  height: 100%;

  & > img {
    position: absolute;

    &:nth-child(1) {
      top: 0;
      right: 0;
      width: 636px;
      height: auto;
    }

    &:nth-child(2) {
      bottom: -120px;
      left: 0;
      width: 547px;
      height: auto;
    }

    &:nth-child(3) {
      bottom: -100px;
      left: 0;
      width: 547px;
      height: auto;
    }

    &:nth-child(4) {
      top: 45%;
      left: 100px;
      transform: translateY(-50%);
      width: 140px;
      height: auto;
    }
  }
`

export const ThirdPlayTimeCircle = styled.div`
  position: absolute;
  top: -50px;
  left: 160px;
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
`

export const ThirdRetentionCircle = styled.div`
  position: absolute;
  top: 40px;
  right: -40px;
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
`

export const FourthSection = styled.section`
  width: 100%;
  height: 940px;
  background: #eef0f5;
  display: flex;
  justify-content: center;
`

export const FourthSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const FourthLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;

  & > h5{
    font-size: 1.6rem;
    color: #5ccc5c;
    margin-bottom: 3.2rem;
    font-weight: bold;
  }

  & > h1 {
    font-size: 4.2rem;
    color: #000;
    margin-bottom: 2.1rem;
    font-weight: bold;
    line-height: 1.5;
  }

  & > p {
    font-size: 2.2rem;
    color: #000;
    margin-bottom: 6.8rem;
    line-height: 1.5;
  }

  & > button {
    align-self: flex-start;
    font-size: 2.2rem;
    color: #016dbb;
    font-weight: bold;
  }
`

export const FourthRightSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  & > img {
    position: absolute;

    &:nth-child(1) {
      top: 192px;
      right: 306px;
      width: 80px;
      height: auto;
    }

    &:nth-child(2) {
      top: 174px;
      right: 0;
      width: 306px;
      height: auto;
    }

    &:nth-child(3) {
      bottom: 0;
      right: 0;
      width: 340px;
      height: auto;
    }

    &:nth-child(4) {
      bottom: 0;
      right: 320px;
      width: 314px;
      height: auto;
    }
  }
`

export const FifthSection = styled.section`
  width: 100%;
  height: 760px;
  background: #141619;
  display: flex;
  justify-content: center;
`

export const FifthSectionWrapper = styled.div`
  position: relative;
  width: 1296px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const FifthImageSection = styled.div`
  position: relative;
  width: 1198px;
  background-image: url('/Home_assets/img_d_01.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

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
`

export const FifthTitleWrapper = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  position: flex;
  flex-direction: column;

  & > h5{
    font-size: 1.6rem;
    color: #5ccc5c;
    font-weight: bold;
  }

  & > h1{
    font-size: 4.2rem;
    color: #fff;
    font-weight: bold;
    line-height: 1.5;
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
`

export const SixthSection = styled.section`
  width: 100%;
  height: 760px;
  background: linear-gradient(to bottom, #ebeef4, #eaebf1); /* 그라데이션 배경색 설정 */
  display: flex;
  justify-content: center;
`

export const SixthSectionWrapper = styled.div`
  width: 1296px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SixthTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h5{
    font-size: 1.6rem;
    color: #5ccc5c;
    font-weight: bold;
    margin-bottom: 3.2rem;
  }

  & > h1{
    font-size: 4.2rem;
    color: #000;
    font-weight: bold;
    line-height: 1.5;
  }
`

export const LuckmonResourceCardList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
`

export const LuckmonResourceCard = styled.li`
  width: 25%;
  padding-right: 2.4rem;
  box-sizing: border-box;
  height: 356px;

  & > button {
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;

    & > img{
      width: 100%;
      min-height: 178px;
      object-fit: contain;
    }

    & > div{
      height: 100%;
      background-color: #fff;
      padding: 2.7rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & > h3{
        font-size: 1.6rem;
        color: #749c9a;
        margin-bottom: 0.6rem;
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
      }
    }
  }
`


export const SeventhSection = styled.section`
  width: 100%;
  height: 900px;
  background: linear-gradient(to bottom, #1c2039, #0a1713); /* 그라데이션 배경색 설정 */
  display: flex;
  justify-content: center;
`

export const SeventhSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  }
`

export const CompanyLogoWrapper = styled.div`
  margin-top: 9.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img{
    width: 170px;
    height: auto;
    margin-right: 10rem;

    &:last-child{
      margin-right: 0;
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
`

export const EighthSection = styled.section`
  width: 100%;
  height: 760px;
  background: #141619;
  display: flex;
  justify-content: center;
`

export const EighthSectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1{
    margin-top: 30.6rem;
    font-size: 4.2rem;
    color: #fff;
    font-weight: bold;
  }

  & > h5{
    font-size: 2.2rem;
    color: #ccc;
    margin-top: 2.3rem;
    margin-bottom: 5.2rem;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 140px;
  background: #000;
  display: flex;
  justify-content: center;
`

export const FooterWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span{
    font-size: 1.4rem;
    color: #fff;
    margin-right: 8rem;
  }

  & > button{
    font-size: 1.4rem;
    color: #fff;
    margin-right: 5rem;

    &:last-child{
      margin-right: 0;
    }
  }
`

export const FooterRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button{
    margin-right: 2.4rem;

    &:last-child{
      margin-right: 0;
    }
     & > img {
      width: 40px;
     }
  }
`