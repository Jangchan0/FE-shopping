import styled from 'styled-components';

const TextCard = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'column'};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};

  width: ${({ width }) => (width ? width : '514px')};
  height: ${({ height }) => (height ? height : '400px')};

  border: ${({ border }) => (border ? border : 'none')};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? borderBottom : 'none'};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0')};

  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};

  color: ${({ color }) => (color ? color : 'black')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'none')};

  .description {
    height: 3.5rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .price-before {
    text-decoration: line-through;
    font-size: 1rem;
    font-weight: 400;
    color: #d0d5dd;
    margin: 0 1.2rem;
  }

  .price-after {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .discount {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .date {
    margin-bottom: 1rem;
  }
`;

export default TextCard;
