import React from 'react';
import styled from 'styled-components/macro';
import PaymentInputArea from './components/PaymentInputArea';
import PaymentAmount from './components/PaymentAmount';
import ProductCard from './components/ProductCard';
import Button from '../../components/Button';

const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentTitleWrapper>
        <span>결제</span>
      </PaymentTitleWrapper>
      <ContentWrapper>
        <ProductContainer>
          <ProductCard />
        </ProductContainer>
        <PaymentInputZone>
          <PaymentInputArea />
        </PaymentInputZone>
        <PaymentInformation>
          <PaymentAmount />
        </PaymentInformation>
        <PaymentConfirmZone>
          <Agreement>
            <input type="checkbox" />
            <span>
              주문 내용을 확인하였으며, 개인정보 이용, 제공 및 결제에
              동의합니다.
            </span>
            <a>자세히보기</a>
          </Agreement>
          <Button
            margin="1rem auto"
            fontSize="1.5rem"
            width="41rem"
            height="4.5rem"
          >
            결제하기
          </Button>
        </PaymentConfirmZone>
      </ContentWrapper>
    </PaymentContainer>
  );
};

export default Payment;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 100vw;
`;

const PaymentTitleWrapper = styled.div`
  justify-content: flex-start;
  width: 80vw;
  margin: 4.3125rem auto;

  span {
    text-align: center;
    display: inline-block;
    width: 12rem;
    height: 3rem;
    font-size: 30px;
    font-weight: bold;
  }
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 50vw;
`;
const ProductContainer = styled.div`
  height: 17.5rem;
  margin-bottom: 2.8125rem;
`;

const PaymentInputZone = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 54.75rem;
`;

const PaymentInformation = styled.div`
  margin: 3rem 0;
  width: 54.75rem;
`;

const PaymentConfirmZone = styled.div`
  width: 54.75rem;
`;

const Agreement = styled.div`
  display: flex;
  width: 45.75rem;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid #e5e5e5;
  height: 7rem;
  input {
    width: 30px;
    height: 30px;
    margin: 0 2rem 0 1.5rem;
    cursor: pointer;
  }
  span {
    font-size: 1rem;
    margin-right: 3rem;
  }
  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;
