import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-sizing: border-box;

  @media (max-width : 769px){
    justify-content: flex-end;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`

export const HeaderButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > li{
    margin-right: 70px;
  }

  &:last-child{
    margin-right: 0;
  }

  @media (max-width : 769px){
    & > li{
    margin-right: 20px;
  }
  }
`

export const HeaderButton = styled.button`
  font-size: 1.6rem;
  color: ${(props) => props.isActive ? '#5ccc5c' : '#fff'};
  transition: all 0.3s ease;

  &:hover{
    color: #5ccc5c;
  }
`