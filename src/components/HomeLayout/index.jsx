import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';
import ChatList from '../ChatList';

const dummyProducts = [
  {
    id: '0',
    imgUrl: '/assets/product1.jpg',
    productName: '지프 뉴 배럭 텐트',
    productPrice: '1430000',
    productDescription: '텐트, 이너 텐트, 그라운드시트, 우레탄창 포함'
  },
  {
    id: '1',
    imgUrl: '/assets/product2.jpg',
    productName: '켈티 와이어리스6 텐트',
    productPrice: '299000',
    productDescription:
      '앞뒤문을 개방해 쉘터 같이 사용가능, 이너텐트 라이트 포켓에 랜턴을 넣어 실내등처럼 사용'
  },
  {
    id: '2',
    imgUrl: '/assets/product3.jpg',
    productName: '포레스트 돔 텐트 텐트',
    productPrice: '495000',
    productDescription: '이너텐트, 그라운드시트, 루프 플라이'
  },
  {
    id: '3',
    imgUrl: '/assets/product3.jpg',
    productName: '칼루스 A형 텐트 2P',
    productPrice: '82800',
    productDescription: '텐트 + 플라이 + 폴대 세트상품'
  }
];

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
