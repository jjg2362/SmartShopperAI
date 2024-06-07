import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ productList }) => {
  const navigate = useNavigate();

  const onClickProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Styled.Container>
      {productList &&
        productList.map((item) => (
          <li key={item.id}>
            <button onClick={() => onClickProduct(item.productCode)}>
              <img src={item.imageUrl} alt="시즌아이템1" />
            </button>

            <span>
              <h4>{item.productName}</h4>
              <p>{item.price}원</p>
              {/* <span className="best_icon ir_pm">베스트</span> */}
            </span>
          </li>
        ))}
    </Styled.Container>
  );
};

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      productCode: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ProductList;
