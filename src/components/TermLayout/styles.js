import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141619;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1104px;
  
  @media (max-width: 769px) {
  flex-direction: column;
  }
  
`