import React from 'react';
import CardContainer from '../../../components/CardContainer';
import ImgCard from '../../../components/ImgCard';
import TextCard from '../../../components/TextCard';

const ProductCard = ({
  imgUrl,
  description,
  priceBefore,
  priceAfter,
  discount,
  date,
  isbn,
}) => {
  return (
    <CardContainer
      flexDirection="column"
      width="514px"
      height="500px"
      borderRadius="15px"
      margin="auto"
    >
      <ImgCard
        src={imgUrl}
        alt="img1"
        width="100%"
        height="306px"
        objectFit="cover"
        objectPosition="center"
      />
      <TextCard padding="2rem 0.5rem">
        <p className="description"> {description} </p>
        <p className="price-after">
          {priceAfter} <span className="price-before">{priceBefore}</span>
          <span className="discount"> {discount}</span>
        </p>
        <p className="date">등록일: {date}</p>
        <p className="isbn">ISBN: {isbn}</p>
      </TextCard>
    </CardContainer>
  );
};

export default ProductCard;
