import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import * as apiRequest from '../../_apis/apiRequest';
import * as Styled from './styles';

const CartLayout = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartList();
  }, []);

  const getCartList = () => {
    console.log('aaa');
    apiRequest
      .get('/api/v1/carts')
      .then((response) => {
        console.log(response.data);
        cartList(response.data);
      })
      .catch(() => {
        setCartList([]);
      });
  };

  // const deleteCartItem = (productId) => {
  //   apiRequest
  //     .delete('/api/v1/product-recommendation', {
  //       productId: productId
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch(() => {});
  // };

  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        {cartList.length > 0 ? (
          <Styled.CartList>
            {cartList.map((item) => (
              <Styled.CartItem key={item.id}>
                <Styled.CartItemInfo>
                  <Styled.CartItemImage>
                    <img src={item.imageUrl} alt="상품이미지" />
                  </Styled.CartItemImage>
                  <Styled.CartItemDescription>
                    <h2>{item.productName}</h2>
                    <p>{item.price}원</p>
                  </Styled.CartItemDescription>
                </Styled.CartItemInfo>
                <Styled.DeleteButton onClick={() => deleteCartItem(item.id)}>
                  삭제
                </Styled.DeleteButton>
              </Styled.CartItem>
            ))}
          </Styled.CartList>
        ) : (
          <Styled.EmptyCart>장바구니가 비어있습니다.</Styled.EmptyCart>
        )}
      </Styled.Content>
      <Footer />
    </Styled.Container>
  );
};

export default CartLayout;
