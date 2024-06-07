import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 100px 100px;
  height: calc(100vh - 140px);
  overflow-y: hidden;
`;

export const CartList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  width: 48%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  padding: 20px;
`;

export const CartItemImage = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const CartItemDescription = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  & > p {
    margin-top: 10px;
    font-weight: 500;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  color: #495057;
`;
