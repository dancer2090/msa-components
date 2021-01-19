import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../common/Box';
import Button from '../../common/Button';
import { setAppAction } from '../../../module/application/actions';
import { Container, HeaderItem } from './styles';

const SidebarHeader = () => {
  const { action } = useSelector(({ application }) => application);
  const dispatch = useDispatch();

  const onClick = () => dispatch(setAppAction({ type: 'ADD_CHAT' }));

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
