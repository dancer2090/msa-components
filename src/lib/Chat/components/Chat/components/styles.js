import styled from 'styled-components';

export const UserName = styled.div`
  color: ${props => props.theme.color.text.secondary};
  font-size: smaller;
  margin-right: 16px;
`;

export const MessageDate = styled.div`
  color: ${props => props.theme.color.text.secondary};
  font-size: smaller;
`;

export const MessageBody = styled.div``;

export const Form = styled.form`
  width: 100%;
`;

export const TextAreaInput = styled.textarea`
  height: ${props => props.idealHeight || '152px'};
  min-height: 54px;
  max-height: 150px;
  line-height: 21px;
  width: 85%;
  resize: vertical;
  box-sizing: border-box;

  border: 1px solid rgba(217, 217, 217, 0.5);
  padding: 4px 11px;
  text-size-adjust: 100%;

  &:focus {
    outline: 0;
    border: 1px solid rgba(217, 217, 217, 0.9);
  }
`;
