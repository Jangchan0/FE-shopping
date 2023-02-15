import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import ProductCard from './components/ProductCard';

const ShoppingMall = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch('/data/ProductList.json')
      .then(response => response.json())
      .then(result => setFetchData(result[0].productList));
  }, []);

  return (
    <ShoppingMallContainer>
      <ProductContainer>
        <CardBox>
          {fetchData.map(product => {
            const {
              product_id,
              product_img_url,
              product_description,
              product_price,
              product_discount,
            } = product;
            return (
              <ProductCard
                key={product_id}
                imgUrl={product_img_url}
                description={product_description}
                price={product_price}
                discount={product_discount}
              />
            );
          })}
        </CardBox>
      </ProductContainer>
    </ShoppingMallContainer>
  );
};

export default ShoppingMall;

const ShoppingMallContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 3rem 5rem;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 5rem 5rem;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  width: 80%;
  height: 100%;
`;
