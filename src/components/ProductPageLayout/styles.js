import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
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
`;

export const Detail = styled.div`
  display: flex;
`;

export const ProductImage = styled.div`
  flex: 1;
  position: relative;
  padding-right: 56px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > main {
    width: 550px;
    height: 550px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  & > ul {
    position: absolute;
    top: 555px;
    left: 0;

    & > li {
      float: left;
      width: 100px;
      height: 100px;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      margin-right: 5px;
    }
  }
`;

export const ProductDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 20px;

    & > li {
      display: flex;
      font-size: 14px;
      color: #666;
      font-weight: 100;
      margin-top: 18px;

      & > h2 {
        font-size: 22px;
        font-weight: 700;
        color: #000;
        padding-bottom: 20px;
      }

      & > span {
        flex: 1;
      }

      & > em {
        flex: 1 1 50%;
      }
    }
  }
`;

export const PaymentList = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;

  & > a {
    float: left;
    display: block;
    height: 40px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 100;
    line-height: 40px;
    text-align: center;
    margin-right: 1%;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const WhiteButton = styled.a`
  width: 29%;
  background-color: #fff;
  color: #444;
  border: 1px solid #444;
`;

export const BlackButton = styled.a`
  width: 40%;
  background-color: #000;
  color: #fff;
`;
