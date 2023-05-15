import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (max-width: 769px) {
    padding: 2rem;
    width: auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: #fff;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 769px) {
    flex-direction: row;
  }
`;

export const TermButton = styled.button`
  margin-top: 20px;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  color: ${(props) => (props.isActive ? '#fff' : '#767676')};

  @media (max-width: 769px) {
    margin-top: 0;
    margin-right: 20px;
  }
`;
