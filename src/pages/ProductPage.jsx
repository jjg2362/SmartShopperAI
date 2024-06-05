import React from 'react';

const ProductPage = () => {
  return (
    <div>
      <section id="detail">
        <div className="container">
          <div className="row">
            <h1 className="ir_so">상품 상세 영역입니다 </h1>
            <div className="detail">
              <div className="product_img">
                <main>
                  <img src="assets/images/product01.jpg" alt="메인이미지" />
                </main>
                <ul>
                  <li>
                    <img src="assets/images/product01.jpg" alt="상품이미지1" />
                  </li>
                  <li>
                    <img src="assets/images/product02.jpg" alt="상품이미지1" />
                  </li>
                  <li>
                    <img src="assets/images/product03.jpg" alt="상품이미지1" />
                  </li>
                </ul>
              </div>
              <div className="product_desc">
                <ul className="desc">
                  <li>
                    <h2>(젤리)튤립 보라</h2>
                  </li>
                  <li className="price">
                    <span>판매가</span>
                    <em>5,000원</em>
                  </li>
                  <li>
                    <span>소비자가</span>
                    <em>19,000원</em>
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
                    <span>배송빙법</span>
                    <em>택배</em>
                  </li>
                  <li>
                    <span>배송비</span>
                    <em>3,000원 (20,000원 이상 구매 시 무료)</em>
                  </li>
                  <li>
                    <span>SNS 상품홍보</span>
                    <em>
                      <i className="fa fa-facebook" aria-hidden="true"></i>{' '}
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </em>
                  </li>
                  <li>
                    <span>젤리 타입</span>
                    <em>
                      <label htmlFor="uoption" className="ir_so">
                        옵션
                      </label>
                      <select
                        id="uoption"
                        name="uoption"
                        className="ui_select1"
                      >
                        <option value="아이폰11pro/11pro Max">
                          아이폰11pro/11pro Max
                        </option>
                        <option value="아이폰Xs/Xs Max">아이폰Xs/Xs Max</option>
                        <option value="아이폰X">아이폰X</option>
                        <option value="아이폰8/8+">아이폰8/8+</option>
                        <option value="아이폰7/7+">아이폰7/7+</option>
                        <option value="아이폰SE">아이폰SE</option>
                        <option value="아이폰6s/6s+">아이폰6s/6s+</option>
                        <option value="아이폰6">아이폰6</option>
                      </select>
                    </em>
                  </li>
                  <li className="btn">
                    <a href="#" className="opt_btn">
                      옵션선택
                    </a>
                  </li>
                </ul>

                <ul className="payment">
                  <li className="alert">(최소주문수량 1개 이상)</li>
                  <li className="total_price">
                    <strong>5,000원</strong>
                    <em>(0개)</em>
                  </li>
                  <li className="btn">
                    <a href="#" className="white_btn">
                      add to cart
                    </a>
                    <a href="#" className="white_btn">
                      wish list
                    </a>
                    <a href="#" className="black_btn">
                      buy now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
