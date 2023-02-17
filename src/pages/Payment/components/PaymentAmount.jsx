import React, { useState } from 'react';
import styled from 'styled-components';
import TextCard from '../../../components/TextCard';

const PaymentAmount = ({ isAgreed, setIsAgreed }) => {
  // const isAgreed = props.isAgreed;
  // const setIsAgreed = props.setIsAgreed;

  return (
    <>
      <AmountTitle>결제 금액 </AmountTitle>

      <PriceDetail>
        <div>
          <span>총 상품 가격</span>
          <p> 얼마입니다</p>
        </div>
        <div>
          <span>배송비</span>
          <p>0원</p>
        </div>
      </PriceDetail>
      <TotalPrice>
        <span>총 결제 금액</span>
        <p>얼마입니다</p>
      </TotalPrice>
      <PaymentMethod>
        <span>결제 수단</span>
        <CreaditCard>
          <CreaditCardBox
            type="checkBox"
            onClick={() =>
              setIsAgreed({ ...isAgreed, amountCheck: !isAgreed.amountCheck })
            }
          />
          <span>신용카드</span>
        </CreaditCard>
      </PaymentMethod>
    </>
  );
};

export default PaymentAmount;

const AmountTitle = styled.span`
  font-size: 22.5px;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 0.3px;
`;

const PriceDetail = styled.div`
  width: 42.5rem;
  margin: 50px auto;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span {
      font-size: 1rem;
    }
    p {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45.5rem;
  margin: 50px auto;
  padding: 20px 25px;
  border-top: 1px solid #e5e5e5;
  span {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

const PaymentMethod = styled.div`
  span {
    font-size: 22.5px;
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: 0.3px;
  }
`;

const CreaditCard = styled.div`
  display: flex;
  margin: 5rem auto;
  width: 42.5rem;
  align-items: center;
  span {
    font-size: 1rem;
    margin: 0 0 0 1rem;
  }
`;

const CreaditCardBox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
`;
