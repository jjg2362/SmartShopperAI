import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import ProductList from '../ProductList';

const ChatList = ({ chats, chatRef }) => {
  return (
    <Styled.Container>
      <Styled.ChatBody>
        <Styled.ChatBox ref={chatRef}>
          {chats.map((res, idx) => {
            return (
              <Styled.MessegeArea key={idx}>
                {/* 채팅 */}
                <Styled.Nick>
                  {res.from === 'me' ? '나' : '상품추천봇'}
                </Styled.Nick>
                <Styled.Messege from={res.from}>{res.message}</Styled.Messege>
                {res.from === 'bot' && res.productList && (
                  <ProductList productList={res.productList} />
                )}
              </Styled.MessegeArea>
            );
          })}
        </Styled.ChatBox>
      </Styled.ChatBody>
    </Styled.Container>
  );
};

ChatList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      productList: PropTypes.arrayOf(
        PropTypes.shape({
          productName: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          imageUrl: PropTypes.string.isRequired,
          productCode: PropTypes.string.isRequired
        }).isRequired
      )
    }).isRequired
  ).isRequired,
  chatRef: PropTypes.object.isRequired
};

export default ChatList;
