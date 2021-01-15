import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  ${props => props.debug && css`
    border: 1px solid red;
  `}
`;
