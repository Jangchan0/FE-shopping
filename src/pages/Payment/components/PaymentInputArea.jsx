import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Post from './Post';

const PaymentInputArea = () => {
  const [popUp, setPopUp] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
  });

  console.log(userInfo);

  const handleUserInfo = (e, input) => {
    const { id } = input;
    const value = e.target.value;
    setUserInfo(userInfo => {
      return { ...userInfo, [id]: value };
    });
  };

  const handleModal = useRef;

  return (
    <InputAreaContainer>
      <div>받는 분 정보 입력</div>
      <InputZone>
        {USER_INFO.map((input, i) => {
          return (
            <HandleInput key={i}>
              <span>{input.value}</span>
              <Input
                placeholder={input.placeholder}
                padding="0 15px"
                fontSize="20px"
                width="30.25rem"
                height="4.75rem"
                onChange={e => handleUserInfo(e, input)}
              />
            </HandleInput>
          );
        })}
        <Address>
          <AddressButton>
            <span>주소</span>
            <Button
              onClick={() => {
                setPopUp(!popUp);
              }}
            >
              우편번호 찾기
            </Button>
          </AddressButton>
          <div>
            <Input
              padding="0 15px"
              fontSize="20px"
              width="30.25rem"
              height="4.75rem"
              margin="0 0 2rem 90px"
              bgColor="#E9E9E9"
              border="#D0D5DD"
              disabled
              value={userInfo.address}
              onChange={e =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
            />
            <Input
              placeholder="상세주소를 입력하세요"
              padding="0 15px"
              fontSize="20px"
              width="30.25rem"
              height="4.75rem"
              margin="0 0 0 90px"
              onChange={e =>
                setUserInfo({ ...userInfo, detailAddress: e.target.value })
              }
            />
          </div>
        </Address>
        {popUp && (
          <div>
            <Post
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              ref={handleModal}
            />
          </div>
        )}
      </InputZone>
    </InputAreaContainer>
  );
};

export default PaymentInputArea;

const InputAreaContainer = styled.div`
  width: 100%;
  div {
    font-size: 22.5px;
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: 0.3px;
  }
`;

const HandleInput = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 5rem;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const InputZone = styled.div`
  span {
    width: 5rem;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  Button {
    width: 11.25rem;
    height: 1.8125rem;
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 70px;
  }
`;
const AddressButton = styled.div`
  display: flex;
`;

const USER_INFO = [
  {
    id: 'name',
    value: '이름',
    placeholder: '이름을 입력하세요',
  },
  {
    id: 'email',
    value: '이메일',
    placeholder: '이메일을 입력하세요',
  },
  {
    id: 'phoneNumber',
    value: '휴대폰',
    placeholder: '휴대폰 번호를 입력하세요',
  },
];
