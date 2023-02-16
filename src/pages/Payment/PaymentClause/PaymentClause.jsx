import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Togle from './components/Togle';
import TextCard from '../../../components/TextCard';

const PaymentClause = () => {
  const [clause, setClause] = useState([]);

  useEffect(() => {
    fetch('/data/Clause.json')
      .then(result => result.json())
      .then(data => setClause(data));
  }, []);

  console.log(clause);

  return (
    <ClauseContainer>
      <TextCard
        margin="5rem auto"
        width="65rem"
        height="7rem"
        fontSize="1.1rem"
      >
        <span className="topTitle">
          이 약관은 ‘네스트'가 제공하는 서비스의 이용과 관련하여 회사와 회원과의
          권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          이 약관을 거부할 수 있습니다. 다만, 동의하지 않는 경우 본 결제
          서비스의 이용이 제한됩니다."
        </span>
      </TextCard>
      <div>
        {clause.map((value, i) => {
          return <Togle key={i} clause={value} />;
        })}
      </div>
    </ClauseContainer>
  );
};

export default PaymentClause;

const ClauseContainer = styled.div`
  width: 100vw;
  .topTitle {
    line-height: 140%;
  }
`;
