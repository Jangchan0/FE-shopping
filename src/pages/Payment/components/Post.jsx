import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

const Post = props => {
  const userInfo = props.userInfo;
  const setUserInfo = props.setUserInfo;

  const onCompletePost = data => {
    setUserInfo({
      ...userInfo,
      address: data.address,
    });
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '35%',
    width: '450px',
    height: '470px',
    zIndex: 100,
    border: '1.5px solid #c0c0c0',
  };

  return (
    <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
  );
};

export default Post;
