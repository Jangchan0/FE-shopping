import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../../../assets/images/payment/Vector.png';
import arrowR from '../../../../assets/images/payment/VectorR.png';

const Togle = ({ clause }, { i }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TogleContainer>
      <TogleWrapper>
        <div>
          <ClauseTitle> {clause.title}</ClauseTitle>
          <ViewContents onClick={handleTogle}>
            <span>내용보기</span>
            <img src={isOpen ? arrowR : arrow} alt="화살표" />
          </ViewContents>
        </div>
      </TogleWrapper>
      {isOpen && (
        <OpenDiscription>
          <Discription>{clause.value}</Discription>
        </OpenDiscription>
      )}
    </TogleContainer>
  );
};

export default Togle;

const TogleContainer = styled.div`
  width: 60rem;
  margin: auto;
  border-bottom: 1px solid #eeeeee;
`;

const TogleWrapper = styled.div`
  width: 100%;
  margin: 3.2rem auto;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const ClauseTitle = styled.span`
  font-size: 1.25rem;
  letter-spacing: 20;
`;

const ViewContents = styled.div`
  display: flex;
  align-items: center;
  width: 6.25rem;
  cursor: pointer;

  span {
    font-size: 1rem;
    letter-spacing: 0.4px;
  }

  img {
    width: 18px;
    height: 9.3px;
  }
`;

const OpenDiscription = styled.div`
  width: 65rem;
  display: flex;
  margin: 0 auto;
`;

const Discription = styled.div`
  width: 100%;
  margin: 3rem 2.4375rem;
  font-size: 1.05rem;
`;
