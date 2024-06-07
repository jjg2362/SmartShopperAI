import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';
import ChatList from '../ChatList';
import * as apiRequest from '../../_apis/apiRequest';
import axios from 'axios';

export const HomeLayout = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [chatList, setChatList] = useState([]);
  const chatRef = useRef(null);

  // 검색어가 변경될 때 호출되는 핸들러 함수
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(chatList);

  const onSubmitSearchTerm = (e) => {
    e.preventDefault();
    const userMessage = { from: 'me', message: searchTerm };
    setChatList((prevChatList) => [...prevChatList, userMessage]);
    setSearchTerm('');
    getProductRecommendation(searchTerm);
  };

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  const getProductRecommendation = (userMessage) => {
    apiRequest
      .post('/api/v1/product-recommendation', {
        clientText: userMessage,
        page: 1,
        size: 4
      })
      .then((response) => {
        console.log(response.data.data);
        const keywords = response.data.data.keywords.join(',');

        setChatList((prevChatList) => [
          ...prevChatList,
          {
            from: 'bot',
            message: `${keywords} 키워드를 통해 상품을 추천합니다.`,
            productList: response.data.data.products
          }
        ]);
      })
      .catch(() => {
        setChatList([
          ...chatList,
          {
            from: 'bot',
            message: '상품을 추천할 수 없습니다.'
          }
        ]);
      });
  };

  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        <ChatList chats={chatList} chatRef={chatRef} />

        <Styled.InputForm
          onSubmit={(e) => {
            onSubmitSearchTerm(e);
          }}
        >
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </Styled.InputForm>
      </Styled.Content>
      <Footer />
    </Styled.Container>
  );
};
