import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';
import ChatList from '../ChatList';

const HomeLayout = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [chatList, setChatList] = useState([]);
  const chatRef = useRef(null);

  // 검색어가 변경될 때 호출되는 핸들러 함수
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitSearchTerm = (e) => {
    e.preventDefault();
    const ChatObj = [
      ...chatList,
      {
        from: 'me',
        message: searchTerm
      }
    ];
    setChatList([...ChatObj]);
    setSearchTerm('');
    searchProduct(ChatObj);
  };

  const searchProduct = (ChatObj) => {
    const timer = setTimeout(() => {
      setChatList([
        ...ChatObj,
        {
          from: 'bot',
          message: '검색어를 통해 상품을 추천합니다.'
        }
      ]);
    }, 500);

    return () => clearTimeout(timer);
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
            // onKeyPress={handleKeyPress} // Enter 키 이벤트 처리
          />
        </Styled.InputForm>
      </Styled.Content>
      <Footer />
    </Styled.Container>
  );
};

export default HomeLayout;
