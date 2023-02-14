import styled from 'styled-components';

const ImgCard = styled.img`
  width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '100px')};

  padding: ${({ padding }) => (padding ? padding : '0px')};
  margin: ${({ margin }) => (margin ? margin : '0px')};

  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0px')};

  object-fit: ${({ objectFit }) => (objectFit ? objectFit : 'fill')};
  object-position: ${({ objectPosition }) =>
    objectPosition ? objectPosition : 0};
`;

export default ImgCard;
