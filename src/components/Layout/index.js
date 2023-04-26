import React from 'react'

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles'

const Layout = ({children}) => {
  return <Styled.Container>
    <Header />

    <Styled.Content>
      {children}
    </Styled.Content>

    <Styled.FooterWrapper>
      <Footer />
    </Styled.FooterWrapper>
  </Styled.Container>
}

export default Layout;