import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';
import PropTypes from 'prop-types';

const ProductPageLayout = ({ productData, postCartItem }) => {
  return (
    <>
      <Header />

      <Styled.Container>
        <Styled.Content>
          <section id="detail">
            <div className="row">
              <Styled.Detail>
                <Styled.ProductImage>
                  <main>
                    <img src={productData.imageUrl} alt="메인이미지" />
                  </main>
                </Styled.ProductImage>
                <Styled.ProductDescription>
                  <ul>
                    <li>
                      <h2>{productData.productName}</h2>
                    </li>
                    <li className="price">
                      <span>판매가</span>
                      <em>{productData.price}원</em>
                    </li>
                    <li>
                      <span>제조사</span>
                      <em>(주)플라</em>
                    </li>
                    <li>
                      <span>원산지</span>
                      <em>국내</em>
                    </li>
                    <li>
                      <span>적립금</span>
                      <em>100원 (2%)</em>
                    </li>
                    <li>
                      <span>브랜드</span>
                      <em>168cm</em>
                    </li>
                    <li>
                      <span>배송방법</span>
                      <em>택배</em>
                    </li>
                    <li>
                      <span>배송비</span>
                      <em>3,000원 (20,000원 이상 구매 시 무료)</em>
                    </li>
                  </ul>

                  <Styled.PaymentList>
                    <Styled.WhiteButton
                      onClick={() => postCartItem(productData.id)}
                    >
                      add to cart
                    </Styled.WhiteButton>
                    <Styled.WhiteButton>wish list</Styled.WhiteButton>
                    <Styled.BlackButton>buy now</Styled.BlackButton>
                  </Styled.PaymentList>
                </Styled.ProductDescription>
              </Styled.Detail>
            </div>
          </section>
        </Styled.Content>
      </Styled.Container>
      <Footer />
    </>
  );
};

ProductPageLayout.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  }).isRequired,
  postCartItem: PropTypes.func.isRequired
};

export default ProductPageLayout;
