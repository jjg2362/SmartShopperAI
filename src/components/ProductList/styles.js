import styled from 'styled-components';

export const Container = styled.ul`
  overflow: hidden;

  & > li {
    float: left;
    width: 24%;
    margin-right: 1%;
    margin-bottom: 50px;

    & > button {
      overflow: hidden;
      display: block;

      & > img {
        transition: transform 1s ease-in-out;
        height: 233px;
      }

      &:hover {
        & > img {
          transform: scale(1.2);
        }
      }
    }

    & > span {
      & > h4 {
        position: relative;
        color: #444;
        font-weight: 500;
        padding: 10px 0;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #dbdbdb;
        }
      }

      & > p {
        padding: 10px 0;
        font-weight: 700;
      }
    }
  }
`;
