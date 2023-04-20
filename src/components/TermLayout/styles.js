import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141619;
  max-width: 100vw;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1296px;
  padding-bottom: 7rem;
  box-sizing: border-box;
  
  @media (max-width: 769px) {
    flex-direction: column;
    max-width: auto;
    width: 100%;
  }
`

export const SideBarWrapper = styled.nav`
  flex: 0 0 270px;

  @media (max-width: 769px) {
    flex: 0 0 auto;
  }
`

export const Content = styled.article`
  flex: 1 1 auto;
  overflow-x: auto;
  
  *{
    color: #fff;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  h2, h3, h4, h5, h6{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  a{
    text-decoration: underline;
    font-weight: 500;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 500;
  }

  table {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid #fff;
    text-align: center;

    th {
      font-weight: bold;
    }

    th, td {
      border: 1px solid #fff;
    }
  }
`