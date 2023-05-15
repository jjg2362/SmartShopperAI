import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin-top: 9.6rem;
  width: 1296px;

  @media (max-width: 1297px) {
    width: 769px;
  }

  @media (max-width: 769px) {
    width: 469px;
  }
  @media (max-width: 459px) {
    width: 360px;
  }
`;

export const Item = styled.div`
  width: 100%;

  & > img {
    margin: 0 auto;
    width: 170px;
    height: auto;
  }
`;

export const CustomSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
  }
`;
