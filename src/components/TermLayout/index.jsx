import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../Header'
import SideBar from '../SideBar'
import * as Styled from './styles'

const TermLayout = () => {
  return (
      <Styled.Container>
        <Header />
        <Styled.Content>
          <SideBar/>

          <Outlet />
        </Styled.Content>     
      </Styled.Container>
  )
}

export default TermLayout