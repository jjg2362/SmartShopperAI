import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../Header'
import SideBar from '../SideBar'
import * as Styled from './styles'
import Footer from '../Footer';

const TermLayout = () => {
  return (
      <Styled.Container>
        <Header />

        <Styled.Layout>
          <Styled.SideBarWrapper>
            <SideBar/>
          </Styled.SideBarWrapper>

        <Styled.Content>
          <Outlet />
          </Styled.Content>
        </Styled.Layout>   

        <Footer />
      </Styled.Container>
  )
}

export default TermLayout