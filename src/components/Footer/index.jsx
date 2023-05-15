import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Styled.Conatiner>
      <Styled.FooterWrapper>
        <Styled.FooterLeftWrapper>
          <span>© 2023 LUCKMON, Inc. All rights reserved.</span>

          <button onClick={() => navigate('/legal/terms')}>
            Terms of service
          </button>
          <button onClick={() => navigate('/legal/privacy')}>
            Privacy Policy
          </button>
        </Styled.FooterLeftWrapper>

        <Styled.FooterRightWrapper>
          <button
            onClick={() =>
              window.open('https://twitter.com/LuckmonGames', '_blank')
            }
          >
            <img src="/Home_assets/Group 371.png" alt="twitter_icon" />
          </button>
          {/* <button>
            <img src="/Home_assets/Group 367.png" alt="discord_icon" />
          </button> */}
          <button
            onClick={() =>
              window.open(
                'https://www.instagram.com/luckmonofficial/',
                '_blank'
              )
            }
          >
            <img src="/Home_assets/Group 368.png" alt="instagram_icon" />
          </button>
          <button
            onClick={() =>
              window.open('https://www.facebook.com/luckmongames', '_blank')
            }
          >
            <img src="/Home_assets/Group 369.png" alt="facebook_icon" />
          </button>
          <button
            onClick={() =>
              window.open('https://www.youtube.com/@luckmongames', '_blank')
            }
          >
            <img src="/Home_assets/Group 372.png" alt="youtube_icon" />
          </button>
          <button
            onClick={() => window.open('https://medium.com/@luckmon', '_blank')}
          >
            <img src="/Home_assets/Group 370.png" alt="medium_icon" />
          </button>
        </Styled.FooterRightWrapper>
      </Styled.FooterWrapper>
    </Styled.Conatiner>
  );
};

export default Footer;
