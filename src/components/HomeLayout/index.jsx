import React from 'react'

import * as Styled from './styles'

const images = [
  '/backgroundImage/bg01.png',
  '/backgroundImage/bg02.png',
  '/backgroundImage/bg03.png',
  '/backgroundImage/bg04.png',
  '/backgroundImage/bg05.png',
  '/backgroundImage/bg06.png',
  '/backgroundImage/bg07.png',
  '/backgroundImage/bg08.png',
  '/backgroundImage/bg09.png',
]

const HomeLayout = () => {
  return <>
    <Styled.Container>
      {images.map((imageUrl, index) => (
         <Styled.ImageContainer key={index} className="image-container">
          <Styled.Image src={imageUrl} alt={`Image ${index + 1}`} />
       </Styled.ImageContainer>
      ))}
    </Styled.Container>
  </>
}

export default HomeLayout;