import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = window.location;
  const segments = pathname.split('/');

  return <Styled.Container>
    <Styled.List>
      <li>
        <Styled.TermButton isActive={segments[segments.length - 1] === 'terms'} onClick={() => navigate('/legal/terms')}>
          Terms of use
        </Styled.TermButton>
      </li>
      <li>
        <Styled.TermButton isActive={segments[segments.length - 1] === 'privacy'} onClick={() => navigate('/legal/privacy')}>
          Privacy policy
        </Styled.TermButton>
      </li>
    </Styled.List>
  </Styled.Container>
}

export default SideBar;