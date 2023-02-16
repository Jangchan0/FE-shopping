import React from 'react';
import styled from 'styled-components/macro';
import CardContainer from '../../../components/CardContainer';
import TextCard from '../../../components/TextCard';

const PaymentConfirm = () => {
  return (
    <ConfirmContainer>
      <ConfirmCardContainer
        width="100%"
        height="100%"
        flexDirection="column"
        alignItems="center"
        color="black"
      >
        <h1>결제가 완료되었습니다.</h1>

        <ArticleWrpper>
          <UpgradeTextCard
            width="100%"
            height="150px"
            borderBottom="1px solid #dddddd"
            margin="0 0 3rem 0"
          >
            <h2>배송지 | 홍길동</h2>
            <p>서울시 송파구 293 101- 349호</p>
            <p>이메일: email@email.com</p>
            <p>휴대폰: 010 - 1234 - 1234</p>
          </UpgradeTextCard>
          <UpgradeTextCard
            width="100%"
            height="100px"
            borderBottom="1px solid #dddddd"
            margin="0 0 3rem 0"
          >
            <h2>주문번호</h2>
            <p>23121231234568</p>
          </UpgradeTextCard>
          <UpgradeTextCard
            width="100%"
            height="250px"
            borderBottom="1px solid #dddddd"
            margin="0 0 3rem 0"
          >
            <h2>결제번호</h2>
            <InnerTextCard>
              <TextBox>
                <div>총 상품가격</div>
                <div>17,000원</div>
              </TextBox>
              <TextBox>
                <div>배송비</div>
                <div>0원</div>
              </TextBox>
              <div className="line" />
              <TextBox>
                <div className="total">총 결제비용</div>
                <div className="total price">17,000원</div>
              </TextBox>
            </InnerTextCard>
          </UpgradeTextCard>
          <p id="explain">
            배송은 도서산간 지역이 아니라면 일주일안에 완료됩니다. <br />
            주문에 문제가 있거나 문의가 필요하면 <a href="#">고객센터</a>로
            연락주세요
          </p>
        </ArticleWrpper>
      </ConfirmCardContainer>
    </ConfirmContainer>
  );
};

export default PaymentConfirm;

const ConfirmContainer = styled.section`
  display: flex;

  width: 100vw;
  height: 100vh;
  padding: 7rem 15rem;
`;

const ConfirmCardContainer = styled(CardContainer)`
  width: 100%;
  height: 100%;

  h1 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }

  #explain {
    width: 100%;
    height: auto;
    text-align: center;
    line-height: 2rem;
    color: #d0d5dd;

    a {
      text-decoration: underline;
    }
  }
`;

const ArticleWrpper = styled.div`
  width: 50%;
  height: 100%;
`;

const UpgradeTextCard = styled(TextCard)`
  h2 {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: 400;
    text-indent: 0.7rem;
    color: #262626;
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.4rem;

  .total {
    margin-top: 1.5rem;
    font-size: 1.2rem;
  }
  .price {
    font-weight: bold;
  }
`;

const InnerTextCard = styled(UpgradeTextCard)`
  width: 80%;
  height: 100%;

  margin-left: calc(100% - 80%);

  .line {
    width: 100%;
    height: 1px;
    border: 0.01rem solid #dddddd;
    margin-top: 4rem;
  }
`;
