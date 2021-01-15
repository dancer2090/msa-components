import styled, { css } from 'styled-components';

const Box = styled.div`
  position: relative;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  ${props => props.column && css`
    flex-direction: column;
  `}
  
  ${props => props.bordered && css`
    border: 1px solid ${props.borderColor || props.theme.color.main};
  `}
  
  ${props => props.width && css`
    width: ${props.width};
  `}
  ${props => props.height && css`
    height: ${props.height};
  `}
  
  ${props => props.gutter && css`
    margin: ${props.gutter};
  `}
  
  ${props => props.justify && css`
    justify-content: ${props.justify};
  `}
  ${props => props.align && css`
    align-items: ${props.align};
  `}

  ${props => props.debug && css`
    border: 1px solid red;
  `}
`;

export default Box;
