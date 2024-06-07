import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as apiRequest from '../_apis/apiRequest';
import ProductPageLayout from '../components/ProductPageLayout';

const ProductPage = () => {
  const productId = useParams().productId;
  const [productData, setProductData] = useState(null);

  const getProductData = (productId) => {
    apiRequest
      .get(`/api/v1/products/${productId}`)
      .then((response) => {
        console.log(response.data.data);
        setProductData(response.data.data);
      })
      .catch(() => {
        setSeminarUserInfo(null);
      });
  };

  useEffect(() => {
    getProductData(productId);
  }, [productId]);

  const postCartItem = (productId) => {
    apiRequest
      .post('/api/v1/carts', {
        productId: productId
      })
      .then(() => {
        alert('장바구니에 상품이 담겼습니다.');
      })
      .catch(() => {});
  };

  return (
    <>
      {productData && (
        <ProductPageLayout
          productData={productData}
          postCartItem={postCartItem}
        />
      )}
    </>
  );
};

export default ProductPage;
