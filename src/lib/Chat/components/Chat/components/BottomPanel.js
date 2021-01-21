import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '../../common/Box';
import { sendMessage } from '../../../module/chat/actions';
import TextArea from './TextArea';
import Button from '../../common/Button';
import { Form } from './styles';

const BottomPanel = ({ chatId }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = async () => {
    console.info(`Submit ${value}`);
    const res = await sendMessage(chatId, { description: value })(dispatch);
    if (res) {
      setValue('');
    }
  };

  return (
    <Box height="auto" width="auto" backgroundColor="white" padding="16px" margin="0 0 0 2px">
      <Form>
        <Box nowrap align="flex-start" justify="space-between">
          <TextArea placeholder="write a message here..." onChange={onChange} value={value} />
          <Button type="button" disabled={!value} onClick={onSubmit}>
            Send
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

export default BottomPanel;
