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

  ${props =>
    props.debug &&
    css`
      border: 1px solid red;
    `}
`;
