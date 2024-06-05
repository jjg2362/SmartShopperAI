import React from 'react';

import * as apiRequest from '../_apis/apiRequest';
import ProductPageLayout from '../components/ProductPageLayout';

const dummyProduct = {
  productId: 0,
  name: '지프 뉴 배럭 텐트',
  price: 1430000,
  description: '텐트, 이너 텐트, 그라운드시트, 우레탄창 포함',
  imgUrl: '/assets/product1.jpg'
};

const ProductPage = () => {
  const getProductData = (productId) => {
    apiRequest
      .getAuth(`/${productId}`)
      .then((response) => {
        setSeminarUserInfo(response.data);
      })
      .catch(() => {
        setSeminarUserInfo(null);
      });
  };

  return (
    <>
      <ProductPageLayout productData={dummyProduct} />
    </>
  );
};

export default ProductPage;
