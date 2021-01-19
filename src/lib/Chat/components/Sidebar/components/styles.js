import styled, { css } from 'styled-components';
import Box from '../../common/Box';


export const Container = styled(Box)`
  height: 70px;
  margin-bottom: 30px;
`;

export const HeaderItem = styled.div`
  margin: 8px;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.align || 'center'};
  color: ${props => props.theme.color.text.secondary};

  ${props =>
  props.active &&
  css`
      color: black;
      font-weight: bold;
      border-bottom: 3px solid ${props => props.theme.color.main};
    `}
`;
