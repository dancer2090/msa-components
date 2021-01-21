import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Box from '../Box';

export const Container = styled(Box)`
  height: 80px;

  ${props => props.active && css`
    border-left: 3px solid ${props => props.theme.color.active};
    padding-left: 5px;
    background-color: ${props => lighten(0.02, props.theme.color.background.default)};
  `}

  &:hover {
    cursor: pointer;
    background-color: ${props => lighten(0.01, props.theme.color.background.default)};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 70%;
  margin-left: 16px;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //flex-wrap: nowrap;
  //width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 12px;
  margin-right: 16px;
  font-weight: bold;
  font-size: large;
  //max-width: 70%;
  //flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  color: ${props => props.theme.color.text.secondary};
`;

export const SubTitleWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-flex;
`;

export const SubTitle = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.color.text.secondary};
  * {
    padding: 0;
    margin: 0;
  }

  ${props => props.accent && css`
    color: ${props => props.theme.color.main};
  `}

`;
