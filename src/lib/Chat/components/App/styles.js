import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: ${props => props.theme.color.background.default};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: ${props => props.theme.font.fontFamily};
    font-size: 0.95rem;
    
  }
  
  *:focus {
    outline: 0;
  }
  
  *::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .3);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
  
  ${props =>
    props.debug &&
    css`
      border: 1px solid red;
    `}
`;
