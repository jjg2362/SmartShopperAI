import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';
import ChatList from '../ChatList';
import * as apiRequest from '../../_apis/apiRequest';

export const HomeLayout = () => {
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
    // searchProduct(ChatObj);

    getProductRecommendation(ChatObj[ChatObj.length - 1].message);
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

  // const searchProduct = (ChatObj) => {
  //   getProductRecommendation(ChatObj[ChatObj.length - 1].message);
  //   const timer = setTimeout(() => {
  //     setChatList([
  //       ...ChatObj,
  //       {
  //         from: 'bot',
  //         message: '검색어를 통해 상품을 추천합니다.'
  //       }
  //     ]);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // };

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
        console.log(response.data);
        // setChatList([
        //   ...chatList,
        //   {
        //     from: 'bot',
        //     message: response.data
        //   }
        // ]);
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
