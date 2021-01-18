import styled from 'styled-components';
import { rem } from 'polished';
import Icon from '../Icons';

/* units */
const sizeUnit = 16;

/* sizes */
const createSize = size => rem(`${size * sizeUnit}px`);

const sizes = {
  sm: createSize(3),
  md: createSize(4),
  lg: createSize(5),
};

const size = size => {
  if (typeof sizes[size] !== 'undefined') {
    return sizes[size];
  } else {
    return sizes['md'];
  }
};

/* components */
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: x-large;
  color: white;
  overflow: hidden;
`;

const Wrapper = styled.div`
  flex-basis: ${props => size(props.size)};
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // border: ${rem('1px')} solid #ddd;
  // padding: ${rem('1px')};
  width: ${props => size(props.size)};
  height: ${props => size(props.size)};
  background-color: ${props => props.theme.color.main};
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Image,
  UserName,
  Wrapper,
};
