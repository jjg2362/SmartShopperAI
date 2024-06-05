import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

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
    imgUrl: '/assets/product2.jpeg',
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
    imgUrl: '/assets/product4.jpg',
    productName: '칼루스 A형 텐트 2P',
    productPrice: '82800',
    productDescription: '텐트 + 플라이 + 폴대 세트상품'
  }
];

const ProductList = () => {
  const navigate = useNavigate();

  const onClickProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Styled.Container>
      {dummyProducts.map((item) => (
        <li key={item.id}>
          <button onClick={() => onClickProduct(item.id)}>
            <img src={item.imgUrl} alt="시즌아이템1" />
          </button>

          <span>
            <h4>{item.productName}</h4>
            <p>{item.productPrice}원</p>
            {/* <span className="best_icon ir_pm">베스트</span> */}
          </span>
        </li>
      ))}
    </Styled.Container>
  );
};

ProductList.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired
};

export default ProductList;
