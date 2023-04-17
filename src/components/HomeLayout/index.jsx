import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

import * as Styled from './styles'

const HomeLayout = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const renderFirstSection = () => {
    return (
      <Styled.FirstSection>
        <Styled.FirstSectionWrapper>
          <Styled.FirstLeftSection>
            <Styled.FirstSectionTitle>
              Grow your <em>games</em> with<br />the <em>leading loyalty<br />platform.</em>
            </Styled.FirstSectionTitle>

            <Styled.FirstSectionDescription>
              Our solution is built to expand your game users and <br />your revenue.
            </Styled.FirstSectionDescription>
            <Styled.LearnMoreButton >
              Learn More
            </Styled.LearnMoreButton>
          </Styled.FirstLeftSection>

          <Styled.FirstRightSection>
            <img src='/Home_assets/img_a_03.png' alt=''/>
            <img src='/Home_assets/img_a_01.png' alt=''/>
            <img src='/Home_assets/img_a_04.png' alt=''/>
            <img src='/Home_assets/img_a_02.png' alt=''/>
          </Styled.FirstRightSection>
        </Styled.FirstSectionWrapper>
      </Styled.FirstSection>
    )
  }

  const renderSecondCardItem = (imageUrl, title, description) => {
    return  <Styled.SecondCardItem>
      <Styled.SecondCardItemWrapper>
        <img src={imageUrl} alt={`${title}_image`}/>

        <h1>{title}</h1>

        <p>{description}</p>
    </Styled.SecondCardItemWrapper>
  </Styled.SecondCardItem>
  }

  const renderSecondSection = () => {
    return <Styled.SecondSection id="section2" ref={sectionRef}>
      <Styled.SecondSectionWrapper>
      <h5>BUILT FOR GAME DEVELOPERS</h5>
      <h1>Fuel your mobile game growth with our<br />loyalty platfrom</h1>
      <h3>Our end-to-end loyalty platform optimizes retention, empowers data-driven marketing<br />decisions, and uses machine learning technology to ensure profitable UA, All while helping<br />you deliver personalized experiences to your users on a global scale.</h3>

      <Styled.SecondCardList>
        {renderSecondCardItem(
          '/Home_assets/direct-hit_1f3af1.png', 
          'Game user targeting', 
          'Our end-to end platform tailors\nsolutions for game discovery, user\nengagement and marketing\nstrategies that captivate the right\naudience for your game.')}
          {renderSecondCardItem(
          '/Home_assets/bar-chart_1f4ca 1.png', 
          'Higher retention', 
          'Our comprehensive loyalty platform\nprovides a powerful suite of retention\nfocused features, designed to increase\nuser engagement and satisfaction.\n ')}
          {renderSecondCardItem(
          '/Home_assets/chart-increasing_1f4c8 1.png', 
          'Higher retention', 
          'Drive longer play times and keep\nplayers coming back for more with our\nplatform’s new player incentives and\nretention-focused tools.\n ')}
      </Styled.SecondCardList>

      <Styled.ContactUsWrapper>
        <span>Ready to accelerate the growth of your mobile games?</span>
        <button>Contact us</button>
      </Styled.ContactUsWrapper>
      </Styled.SecondSectionWrapper>
    </Styled.SecondSection>
  }

  const renderThirdSection = () => {
    return <Styled.ThirdSection>
      <Styled.ThirdSectionWrapper>
        <Styled.ThirdLeftSection>
          <Styled.ThirdImageSection>
            <img src='/Home_assets/Gems.png' alt='gem_image'/>
          </Styled.ThirdImageSection>

          <h5>CREATED FOR REAL GAME USERS</h5>

          <h1>Drive higher retention<br />with the loyalty platform</h1>
          <p>
          Our end-to-end loyalty platform provides an engaging and personalized gaming experience, with features designed to increase player satisfaction and retention. With our advanced analytics, we track user behavior and make data driven decisions to continually increase the growth of our user retention rates.
          </p>

          <button>Learn more</button>
        </Styled.ThirdLeftSection>
        <Styled.ThirdRightSection>
          <img src='/Home_assets/img_b_03.jpg' alt='gem_image'/>
          <img src='/Home_assets/img_b_02.png' alt='gem_image'/>
          <img src='/Home_assets/img_b_01.png' alt='gem_image'/>
          <img src='/Home_assets/New icon 1.png' alt='gem_image'/>

          <Styled.ThirdPlayTimeCircle>
            <h3>50%</h3>
            <span>Play-time<br/>increases</span>
          </Styled.ThirdPlayTimeCircle>
          <Styled.ThirdRetentionCircle>
            <h3>50%</h3>
            <span>Higher<br/>retentions</span>
          </Styled.ThirdRetentionCircle>
        </Styled.ThirdRightSection>
      </Styled.ThirdSectionWrapper>
    </Styled.ThirdSection>
  }

  const renderFourthSection = () => {
    return <Styled.FourthSection>
      <Styled.FourthSectionWrapper>
        <Styled.FourthLeftSection>
        <Styled.ThirdImageSection>
            <img src='/Home_assets/Group 4561.png' alt='gem_image'/>
          </Styled.ThirdImageSection>

          <h5>MADE FOR MOBILE DEVELOPERS AND PUBLISHERS</h5>

          <h1>We set out to build a premier global loyalty platform for mobile gamers</h1>
          <p>
          Reshape your mobile game with our loyalty platform’s comprehensive suite of loyalty-focused features, including trophy systems, reward management, and personalized incentives, all designed to increase user engagement and satisfaction on a global scale.</p>

          <button>Learn more</button>
        </Styled.FourthLeftSection>
        <Styled.FourthRightSection>
          <img src='/Home_assets/img_c_04.png' alt='gem_image'/>
          <img src='/Home_assets/img_c_03.png' alt='gem_image'/>
          <img src='/Home_assets/img_c_02.png' alt='gem_image'/>
          <img src='/Home_assets/img_c_01.png' alt='gem_image'/>
        </Styled.FourthRightSection>
      </Styled.FourthSectionWrapper>
    </Styled.FourthSection>
  }

  const renderFifthSection = () => {
    return <Styled.FifthSection>
      <Styled.FifthSectionWrapper>
        <Styled.FifthImageSection>
          {/* <img src='/Home_assets/img_d_01.png' alt='gem_image'/> */}
          <img src='/Home_assets/Group 4478.png' alt='gem_image'/>
          <img src='/Home_assets/Group 4477.png' alt='gem_image'/>
          <img src='/Home_assets/Group 4479.png' alt='gem_image'/>
          <img src='/Home_assets/Group 4480.png' alt='gem_image'/>
        </Styled.FifthImageSection>

        <Styled.FifthTitleWrapper>
          <h5>UNMATCHED GLOBAL SCALE</h5>
          <h1>We’re growing the mobile<br />gaming ecosystem</h1>
        </Styled.FifthTitleWrapper>

        <Styled.FifthFloatImageWrapper>
          <img src='/Home_assets/img_d_02.png' alt='gem_image'/>
        </Styled.FifthFloatImageWrapper>
      </Styled.FifthSectionWrapper>
    </Styled.FifthSection>
  } 

  const renderLuckmonResourceCard = (index, imageSrc, type, description, url) => {
    return <Styled.LuckmonResourceCard>
      <button onClick={() => window.open(url, "_blank")}>
        <img src={imageSrc} alt={`luckmon_card_${index}`}/>
        <div>
          <h3>{type}</h3>
          <p>{description}</p>
        </div>
      </button>
    </Styled.LuckmonResourceCard>
  }

  const renderSixthSection = () => {
    return <Styled.SixthSection>
      <Styled.SixthSectionWrapper>
        <Styled.SixthTitleWrapper>
          <h5>NEW AND RESOURCES</h5>
          <h1>Here’s more from Luckmon</h1>
        </Styled.SixthTitleWrapper>

        <Styled.LuckmonResourceCardList>
          {renderLuckmonResourceCard(1, 
            '/Home_assets/LM01.jpg', 
            'INTERVIEW', 
            'Originally operating on the concept of mobile -based rewards', 
            'https://www.builtinla.com/2022/12/12/los-angeles-future-5-startup-luckmon-q4-2022?i=bb756a35-d66f-4de6-ac3d-d69877a12a45&utm_source=transactional&utm_medium=email&utm_campaign=Built-In-Email&fbclid=IwAR1hV1IHKVx_VQqCFfl8LR9yHV6VUoVUtXJ4qI7Y-rWsRb6qpOVF0IlcUuE')}
            {renderLuckmonResourceCard(2, 
            '/Home_assets/LM02.jpg', 
            'INTERVIEW', 
            'With Kevin Harrington, a business executive, Shark Tank', 
            'https://abc.com/shows/shark-tank')}
            {renderLuckmonResourceCard(3, 
            '/Home_assets/LM03.png', 
            'PRESS', 
            'Thomas Edison Project with Luckmon', 
            'https://finance.yahoo.com/news/thomas-edison-nft-project-announces-150100712.html')}
            {renderLuckmonResourceCard(4, 
            '/Home_assets/LM04.png', 
            'PRESS', 
            'Luckmon Makes Gaming Lucrative for Casual Players', 
            'https://www.builtinla.com/2022/12/12/los-angeles-future-5-startup-luckmon-q4-2022?i=bb756a35-d66f-4de6-ac3d-d69877a12a45&utm_source=transactional&utm_medium=email&utm_campaign=Built-In-Email&fbclid=IwAR1hV1IHKVx_VQqCFfl8LR9yHV6VUoVUtXJ4qI7Y-rWsRb6qpOVF0IlcUuE')}
        </Styled.LuckmonResourceCardList>
      </Styled.SixthSectionWrapper>
    </Styled.SixthSection>
  }

  const renderSeventhSection = () => {
    return <Styled.SeventhSection>
      <Styled.SeventhSectionWrapper>
        <Styled.AlohaFactoryWrapper>
          <img src='/Home_assets/logoE_02.png' alt='aloha_factory_logo'/>

          <h2>“Luckmon traffic is outperforming other performance marketing<br />
          channels on Android with 30% better retention, our main<br />
          performance KPI.”</h2>

          <h6>Robin Yoon</h6>
          <span>Head of Monetization and User Acquisition, Aloha Factory</span>
        </Styled.AlohaFactoryWrapper>

        <Styled.CompanyLogoWrapper>
          <img src='/Home_assets/logoA_01.png' alt='super_box_logo'/>
          <img src='/Home_assets/logoB_01.png' alt='n_Way_logo'/>
          <img src='/Home_assets/logoC_01.png' alt='grampus_logo'/>
          <img src='/Home_assets/logoD_01.png' alt='supercent_logo'/>
        </Styled.CompanyLogoWrapper>

        <Styled.SeventhFloatImageWrapper>
            <img src='/Home_assets/img_e_02.png' alt='super_box_logo'/>
            <img src='/Home_assets/img_e_01.png' alt='super_box_logo'/>
        </Styled.SeventhFloatImageWrapper>
      </Styled.SeventhSectionWrapper>
    </Styled.SeventhSection>
  }

  const renderEighthSection = () => {
    return <Styled.EighthSection>
      <Styled.EighthSectionWrapper>
        <h1>Ready to get started?</h1>
        <h5>Supercharge your growth with the leader in game marketing with Luckmon.</h5>

        <Styled.LearnMoreButton>
          Contact Luckmon
        </Styled.LearnMoreButton>
      </Styled.EighthSectionWrapper>
    </Styled.EighthSection>
  }

  const renderFooter = () => {
    return <Styled.Footer>
      <Styled.FooterWrapper>
        <Styled.FooterLeftWrapper>
          <span>© 2023 LUCKMON, Inc. All rights reserved.</span>

          <button onClick={() => navigate('/legal/terms')}>Terms of service</button>
          <button onClick={() => navigate('/legal/privacy')}>Private Policy</button>
        </Styled.FooterLeftWrapper>

        <Styled.FooterRightWrapper>
          <button>
            <img src='/Home_assets/Group 371.png' alt='twitter_icon'/>
          </button>
          <button>
            <img src='/Home_assets/Group 367.png' alt='discord_icon'/>
          </button>
          <button>
            <img src='/Home_assets/Group 368.png' alt='instagram_icon'/>
          </button>
          <button>
            <img src='/Home_assets/Group 369.png' alt='facebook_icon'/>
          </button>
          <button>
            <img src='/Home_assets/Group 370.png' alt='video_icon'/>
          </button>
        </Styled.FooterRightWrapper>
      </Styled.FooterWrapper>
    </Styled.Footer>
  }

  return <Styled.Container>
      <Styled.HeaderWrapper>
        <Header />
      </Styled.HeaderWrapper>

      {renderFirstSection()}
      {renderSecondSection()}
      {renderThirdSection()}
      {renderFourthSection()}
      {renderFifthSection()}
      {renderSixthSection()}
      {renderSeventhSection()}
      {renderEighthSection()}

      {renderFooter()}
    </Styled.Container>
}

export default HomeLayout;