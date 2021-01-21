import React from 'react';
import Avatar from '../Avatar';
import Divider from '../Divider';
import { Container, Date, InfoWrapper, SubTitle, SubTitleWrapper, Title, TitleWrapper } from './styles';

const ChatListItem = props => {
  const { title, lastUser, lastMessage, name, date, type, onClick, active, avatar } = props;

  return (
    <>
      <Container align="center" onClick={onClick} active={active} padding="0 8px">
        <Avatar username={name} type={type} imageUrl={avatar} />
        <InfoWrapper debug>
          <TitleWrapper>
            <Title>{title}</Title>
            <Date>{date}</Date>
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle accent>{lastUser}</SubTitle>
            <SubTitle>{lastMessage}</SubTitle>
          </SubTitleWrapper>
        </InfoWrapper>
      </Container>
      <Divider />
    </>
  );
};
export default ChatListItem;
