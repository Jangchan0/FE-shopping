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

  return (
    <ClauseContainer>
      {clause.length > 1 && (
        <>
          <TextCard
            margin="5rem auto"
            width="65rem"
            height="7rem"
            fontSize="1.1rem"
          >
            <span className="topTitle">{clause[1].ClauseTitle[0].value}</span>
          </TextCard>
          <div>
            {clause[0].ClauseContents.map((value, i) => {
              return <Togle key={i} clause={value} />;
            })}
          </div>
        </>
      )}
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
