import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.background.default};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: ${props => props.theme.font.fontFamily};
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
