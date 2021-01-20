import styled, { css } from 'styled-components';

const Box = styled.div`
  box-sizing: border-box;
  position: relative;
  //padding: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};
  
  ${props => props.column && css`
    flex-direction: column;
  `}
  ${props => props.direction && css`
    flex-direction: ${props.direction};
  `}
  
  ${props => props.nowrap && css`
    flex-wrap: nowrap;
  `}
  
  ${props => props.scroll && css`
    overflow-y: auto;
  `}
  
  ${props => props.bordered && css`
    border: 1px solid ${props.borderColor || props.theme.color.main};
  `}

  ${props => props.borderRadius && css`
    border-radius: ${props.borderRadius};
  `}
  
  ${props => props.width && css`
    width: ${props.width};
  `}
  ${props => props.maxWidth && css`
    max-width: ${props.maxWidth};
    width: auto;
  `}
  ${props => props.minWidth && css`
    min-width: ${props.minWidth};
  `}
  ${props => props.height && css`
    height: ${props.height};
  `}
  ${props => props.maxHeight && css`
    max-height: ${props.maxHeight};
    height: auto;
  `}
  ${props => props.minHeight && css`
    min-height: ${props.minHeight};
  `}
  
  ${props => props.gutter && css`
    margin: ${props.gutter};
  `}
  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  ${props => props.alignSelf && css`
    align-self: ${props.alignSelf};
  `}


  ${props => props.padding && css`
    padding: ${props.padding};
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
