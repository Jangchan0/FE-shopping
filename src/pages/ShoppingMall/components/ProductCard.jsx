import React from 'react';
import CardContainer from '../../../components/CardContainer';
import ImgCard from '../../../components/ImgCard';
import TextCard from '../../../components/TextCard';

const ProductCard = ({ imgUrl, description, price, discount }) => {
  return (
    <CardContainer
      flexDirection="column"
      width="514px"
      height="447px"
      borderRadius="15px"
      margin="auto"
    >
      <ImgCard
        src={imgUrl}
        alt="img1"
        width="100%"
        height="306px"
        objectFit="contain"
      />
      <TextCard padding="2rem 0.5rem">
        <p className="description"> {description} </p>
        <p className="price">
          {price} <span className="discount"> {discount}</span>
        </p>
      </TextCard>
    </CardContainer>
  );
};

export default ProductCard;
