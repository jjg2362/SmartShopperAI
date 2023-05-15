import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';

const Layout = ({ children }) => {
  return (
    <Styled.Container>
      <Header />

      <Styled.Content>{children}</Styled.Content>

      <Styled.FooterWrapper>
        <Footer />
      </Styled.FooterWrapper>
    </Styled.Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
