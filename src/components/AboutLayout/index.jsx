import React from 'react'

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles'

const MemberList = [
  {
    id: 1,
    name: 'David',
    description: 'Love playing Brawl stars.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 2,
    name: 'Kevin',
    description: 'I firmly believe that Eldenring is the best game ever made. Call me Eldenloard :)',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 3,
    name: 'MC',
    description: 'Born to play games.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 4,
    name: 'Jenny',
    description: 'Born to play games.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 5,
    name: 'Won',
    description: 'Born to play games.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 6,
    name: 'Jin',
    description: 'Love playing Brawl stars.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 7,
    name: 'Hannah',
    description: 'Love playing Brawl stars.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
  {
    id: 8,
    name: 'Jinu',
    description: 'Love playing Brawl stars.',
    imgUrl: '/About_assets/profile_ex01.png'
  },
]

const AboutLayout = () => {
  return <Styled.Container>
    <Header />

    <Styled.MissionSection>
      <Styled.MissionWrapper>
      <Styled.MissionBackground />
      <Styled.MissionTitleWrapper>
        <h5>OUR MISSION</h5>
        <h1>Entertain yourself while<br />earning rewards.</h1>
        <p>Our goal is to create a fun and engaging way for gamers to<br />earn rewards while playing games on any platform, anywhere.</p>
        <img src="/About_assets/image 1177.png" alt="mission_character" />
      </Styled.MissionTitleWrapper>
      </Styled.MissionWrapper>
    </Styled.MissionSection>

    <Styled.TeamSection>
      <Styled.TeamSectionWrapper>
        <Styled.TeamTitleWrapper>
          <h5>MEET OUR TEAM</h5>
          <h1>You like to play games?<br />We do too! We are all gamers</h1>
          <img src="/About_assets/Group 4700.png" alt="team_chracter" />
          <button>Join the Team</button>
        </Styled.TeamTitleWrapper>

        <Styled.MemberList>
          {MemberList.map((member) => {
            return <Styled.MemberItem key={member.id}>
              <img src={member.imgUrl} alt={`member_${member.name}_image`} />
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </Styled.MemberItem>
          })}
        </Styled.MemberList>
      </Styled.TeamSectionWrapper>
    </Styled.TeamSection>
    <Footer />
  </Styled.Container>
}

export default AboutLayout;