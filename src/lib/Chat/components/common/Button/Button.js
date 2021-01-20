import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const StyledButton = styled.button`
  background: ${props => props.theme.color.main};
  border: 1px solid ${props => props.theme.color.main};
  border-radius: 28px;
  opacity: 1;
  min-height: 50px;
  padding: 0 20px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  ${(props) => props.disabled && css`
    opacity: 0.4;
  `}

  ${(props) => props.hidden && css`
    display: none;
  `}

  &:hover {
    background: ${props => lighten(0.03, props.theme.color.main)};;
  }

  ${(props) => props.mode === 'dark' && css`
    color: #2E293C;
    &:hover {
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      color: ${props => props.theme.color.main};
    }
  `}

  ${(props) => props.mode === 'transparent' && css`
    color: #2E293C;
    background: transparent;
    &:hover {
      background: #2E293C;
      border: 1px solid #2E293C;
      color: ${props => props.theme.color.main};
    }
  `}
  ${(props) => props.mode === 'transparent-light' && css`
    color: #FFFFFF;
    background: transparent;
    &:hover {
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      color: ${props => props.theme.color.main};
    }
  `}
  ${(props) => props.mode === 'transparent-dark' && css`
    color: #FFFFFF;
    background: transparent;
    &:hover {
      background: ${props => props.theme.color.main};
      border: 1px solid ${props => props.theme.color.main};
      color: #2E293C;
    }
  `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
