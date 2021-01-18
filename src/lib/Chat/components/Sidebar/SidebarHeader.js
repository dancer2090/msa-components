import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import Box from '../common/Box';
import Button from '../common/Button';

const Container = styled(Box)`
  height: 70px;
  margin-bottom: 32px;
`;

const HeaderItem = styled.div`
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

const SidebarHeader = props => {
  const { onClick } = props;

  const { portal = 'set the portal' } = useSelector(({ configuration }) => configuration);

  return (
    <Container justify="space-between" align="center">
      <HeaderItem active>ORGANIZATION</HeaderItem>
      <HeaderItem>GLOBAL</HeaderItem>
      <HeaderItem align="flex-end">
        <Button onClick={onClick}>Add chat</Button>
      </HeaderItem>
    </Container>
  );
};

export default SidebarHeader;
