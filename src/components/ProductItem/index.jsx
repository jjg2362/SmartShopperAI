import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './styles';

const ProductItem = ({ imgUrl, productName, productPrice }) => {
  return (
    <Styled.Container>
      <a href="#">
        <img src={item.imgUrl} alt="시즌아이템1" />
      </a>

      <span>
        <h4>{item.productName}</h4>
        <p>{item.productPrice}원</p>
        {/* <span className="best_icon ir_pm">베스트</span> */}
      </span>
    </Styled.Container>
  );
};

ProductItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired
};

export default ProductItem;
