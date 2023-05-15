import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';

const MemberList = [
  {
    id: 1,
    name: 'David',
    description:
      'I have a passion in mobile game industry and worked in this industry for 15 years, with a particular interest in Brawl Stars and Idle Genre games.',
    imgUrl: '/About_assets/David.png'
  },
  {
    id: 2,
    name: 'Kevin',
    description:
      "Gaming isn't just a hobby, it's a passion that fuels my competitive spirit and pushes me to constantly improve.",
    imgUrl: '/About_assets/Kev.png'
  },
  {
    id: 3,
    name: 'MC',
    description: 'Born to play.',
    imgUrl: '/About_assets/MC.png'
  },
  {
    id: 4,
    name: 'Jenny',
    description: 'My love for Sudoku will continue even after I succeed.',
    imgUrl: '/About_assets/Jenny.png'
  },
  {
    id: 5,
    name: 'Won',
    description: 'Embracing the grind to achieve success.',
    imgUrl: '/About_assets/Won.png'
  },
  {
    id: 6,
    name: 'Jin',
    description: 'i did it my way.',
    imgUrl: '/About_assets/Jin.png'
  },
  {
    id: 7,
    name: 'Hannah',
    description: 'Gaming is my way of life, where I explore new worlds.',
    imgUrl: '/About_assets/Hannah.png'
  },
  {
    id: 8,
    name: 'Jinu',
    description:
      "I don't just play games, I immerse myself in epic adventures and become the hero of my own story.",
    imgUrl: '/About_assets/Jinu.png'
  }
];

const AboutLayout = () => {
  return (
    <Styled.Container>
      <Header />

      <Styled.MissionSection>
        <Styled.MissionWrapper>
          <Styled.MissionBackground />
          <Styled.MissionTitleWrapper>
            <h5>OUR MISSION</h5>
            <h1>
              Entertain yourself while
              <br />
              earning rewards.
            </h1>
            <p>
              Our goal is to create a fun and engaging way for gamers to
              <br />
              earn rewards while playing games on any platform, anywhere.
            </p>
            <img src="/About_assets/image 1177.png" alt="mission_character" />
          </Styled.MissionTitleWrapper>
        </Styled.MissionWrapper>
      </Styled.MissionSection>

      <Styled.TeamSection>
        <Styled.TeamSectionWrapper>
          <Styled.TeamTitleWrapper>
            <h5>MEET OUR TEAM</h5>
            <h1>
              You like to play games?
              <br />
              We do too! We are all gamers
            </h1>
            <img src="/About_assets/Group 4700.png" alt="team_chracter" />
            <button>Join the Team</button>
          </Styled.TeamTitleWrapper>

          <Styled.MemberList>
            {MemberList.map((member) => {
              return (
                <Styled.MemberItem key={member.id}>
                  <img
                    src={member.imgUrl}
                    alt={`member_${member.name}_image`}
                  />
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </Styled.MemberItem>
              );
            })}
          </Styled.MemberList>
        </Styled.TeamSectionWrapper>
      </Styled.TeamSection>
      <Footer />
    </Styled.Container>
  );
};

export default AboutLayout;
