import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: #52DE97;
  border: 1px solid #52DE97;
  border-radius: 29px;
  opacity: 1;
  min-height: 58px;
  padding: 0 49px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  ${(props) => props.hidden && css`
    display: none;
  `}

  &:hover {
    background: #2E293C;
    border: 1px solid #2E293C;
    color: #52DE97;
  }

  ${(props) => props.mode === 'dark' && css`
    color: #2E293C;
    &:hover {
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      color: #52DE97;
    }
  `}

  ${(props) => props.mode === 'transparent' && css`
    color: #2E293C;
    background: transparent;
    &:hover {
      background: #2E293C;
      border: 1px solid #2E293C;
      color: #52DE97;
    }
  `}
  ${(props) => props.mode === 'transparent-light' && css`
    color: #FFFFFF;
    background: transparent;
    &:hover {
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      color: #52DE97;
    }
  `}
  ${(props) => props.mode === 'transparent-dark' && css`
    color: #FFFFFF;
    background: transparent;
    &:hover {
      background: #52DE97;
      border: 1px solid #52DE97;
      color: #2E293C;
    }
  `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
