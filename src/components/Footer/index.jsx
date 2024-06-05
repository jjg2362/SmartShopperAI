import React from 'react';

import * as Styled from './styles';

const Footer = () => {
  return (
    <Styled.Conatiner>
      <Styled.FooterWrapper>
        <Styled.FooterLeftWrapper>
          <span>© 2024 Dongguk Univ, Inc. All rights reserved.</span>

          <button>Terms of service</button>
          <button>Privacy Policy</button>
        </Styled.FooterLeftWrapper>

        <Styled.FooterRightWrapper>
          <button>
            <img src="/Home_assets/Group 371.png" alt="twitter_icon" />
          </button>
          <button>
            <img src="/Home_assets/Group 368.png" alt="instagram_icon" />
          </button>
          <button>
            <img src="/Home_assets/Group 369.png" alt="facebook_icon" />
          </button>
          <button>
            <img src="/Home_assets/Group 372.png" alt="youtube_icon" />
          </button>
          <button>
            <img src="/Home_assets/Group 370.png" alt="medium_icon" />
          </button>
        </Styled.FooterRightWrapper>
      </Styled.FooterWrapper>
    </Styled.Conatiner>
  );
};

export default Footer;
