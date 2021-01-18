import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Box from '../Box';
import Avatar from '../Avatar';
import Divider from '../Divider';

const Container = styled(Box)`
  &:hover {
    cursor: pointer;
    background-color: ${props => lighten(0.02, props.theme.color.background.default)};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //flex-wrap: nowrap;
  //width: 100%;
`;

const Title = styled.div`
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

const Date = styled.div`
  color: ${props => props.theme.color.text.secondary};
`;

const SubTitle = styled.div`
  color: ${props => props.theme.color.text.secondary};
`;

const ChatListItem = props => {
  const { title, subtitle, name, date, type, onClick } = props;

  return (
    <>
      <Container align="center" onClick={onClick}>
        <Avatar username={name} type={type} />
        <InfoWrapper debug>
          <TitleWrapper>
            <Title>{title}</Title>
            <Date>{date}</Date>
          </TitleWrapper>
          <SubTitle>{subtitle}</SubTitle>
        </InfoWrapper>
      </Container>
      <Divider />
    </>
  );
};
export default ChatListItem;
