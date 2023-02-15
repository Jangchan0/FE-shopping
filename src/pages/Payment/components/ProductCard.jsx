import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import CardContainer from '../../../components/CardContainer';
import ImgCard from '../../../components/ImgCard';
import TextCard from '../../../components/TextCard';

const ProductCard = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch('data/PaymentProduct.json')
      .then(result => result.json())
      .then(data => setProductInfo(data[0]));
  }, []);

  return (
    <CardContainer width="100%">
      <ImgCard
        width="18.875rem"
        height="16.5625rem"
        src={productInfo.thumbnail}
        borderRadius="15px"
      />
      <TextCard width="33.375rem">
        <ProductDiscription>
          <h1>{productInfo.title}</h1>
          <div>
            <h2>{productInfo.price}원</h2>
            <span>{productInfo.discount}% 할인</span>
          </div>
          <Disctiption>{productInfo.discription}</Disctiption>
        </ProductDiscription>
      </TextCard>
    </CardContainer>
  );
};

export default ProductCard;

const ProductDiscription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  h1 {
    font-size: 36px;
    font-weight: bolder;
    white-space: nowrap;
    margin-bottom: 1.5rem;
  }
  div {
    display: flex;
    align-items: baseline;
    h2 {
      font-size: 30px;
      font-weight: bold;
    }
    span {
      margin-left: 0.6rem;
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

const Disctiption = styled.div`
  width: 35.5rem;
  font-size: 20px;
  margin-top: 1rem;
  line-height: 2.5;
`;
