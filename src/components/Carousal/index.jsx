import React from 'react'

import * as Styled from './styles'

const Carousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 459,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Styled.Container>
      <Styled.CustomSlider {...settings}>
        <Styled.Item>
          <img src='/Home_assets/logoA_01.png' alt='super_box_logo'/>
        </Styled.Item>
        <Styled.Item>
          <img src='/Home_assets/logoB_01.png' alt='n_Way_logo'/>
        </Styled.Item>
        <Styled.Item>
          <img src='/Home_assets/logoC_01.png' alt='grampus_logo'/>
        </Styled.Item>
        <Styled.Item>
          <img src='/Home_assets/logoD_01.png' alt='supercent_logo'/>
        </Styled.Item>
        <Styled.Item>
          <img src='/Home_assets/logoF_01.png' alt='neicon_logo'/>
        </Styled.Item>
        <Styled.Item>
          <img src='/Home_assets/logoE_01.png' alt='neicon_logo'/>
        </Styled.Item>
      </Styled.CustomSlider>
    </Styled.Container>
  );
}

export default Carousal;