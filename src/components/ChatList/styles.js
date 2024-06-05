import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
`;

export const ChatBox = styled.div`
  width: 100%;
  height: max-content;
  transition: 0.3s all;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 15px;
  padding-right: 5px;
`;

export const MessegeArea = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  margin-top: 34px;
  flex-direction: column;
`;

export const Messege = styled.p`
  width: max-content;
  max-width: 80%;
  height: max-content;
  padding: 8px;
  font-size: 16px;
  word-break: break-word;
  line-height: 1.3;
  overflow: hidden;
  color: #000;
  border-radius: ${(props) =>
    props.from === 'me' ? '5px 0 5px 5px' : '0 5px 5px 5px'};

  & > img {
    width: 100%;
  }
`;

export const Nick = styled.h3`
  font-size: 14px;
  padding-bottom: 4px;
  color: #000;
  font-weight: bold;
`;
