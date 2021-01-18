import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { setAppAction } from '../../module/application/actions';
import { createChat, getUsers } from '../../api';
import { Container, modalStyles, CloseIcon } from './styles';
import Select from '../common/Select';
import Button from '../common/Button';

const optionsContext = [
  { value: '1', label: 'Organization' },
  { value: '2', label: 'Admin users' },
  { value: '3', label: 'Nurse users' },
];
const optionsReports = [
  { value: '1', label: 'Report 1' },
  { value: '2', label: 'Report 2' },
  { value: '3', label: 'Report 3' }
];
const optionsClaimants = [
  { value: '1', label: 'Claimant 1' },
  { value: '2', label: 'Claimant 2' },
  { value: '3', label: 'Claimant 3' }
];
const optionsTopics = [
  { value: '1', label: 'Report problem' },
  { value: '2', label: 'QA discussion' },
  { value: '3', label: 'Other' }
];

const AddChat = () => {

  const dispatch = useDispatch();
  const { action } = useSelector(({ application }) => application);


  const [loader, setLoader] = useState(null);
  const [context, setContext] = useState(null);
  const [users, setUsers] = useState(null);
  const [usersOptions, setUsersOptions] = useState([]);

  const closeModal = () => {
    setContext(null);
    setUsers(null);
    setUsersOptions([]);
    setLoader(false);
    dispatch(setAppAction({ type: 'MAIN' }));
  };

  const onChangeContext = async (options) => {
    if (!options || options.length === 0 ) {
      setUsers(null);
      setUsersOptions([]);
    } else {
      const context = 1;
      const users = await getUsers({ context });
      const usersOptions = users.map(u => ({ value: u.id, label: `${u.given_name} ${u.family_name}` }));
      setContext(options);
      setUsersOptions(usersOptions);
    }
  };
  const onChangeUsers = (options) => setUsers(options);

  const validation = () => {

    if (!context || context.length === 0) return false;
    if (!users || users.length === 0) return false;

    return true;
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      const info = {
        users,
        context,
      };
      if (validation()) {
        const params = {
          name: 'New chat',
          description: 'New chat description',
          users: users.map(u => u.value),
        };
        const chat = await createChat(params);
        // do the logic with chat here
      }
    } catch (ex) {
      console.log(ex);

    } finally {
      setLoader(false);
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={action && action.type && action.type === 'ADD_CHAT'}
      style={modalStyles}
      parentSelector={() => document.querySelector('#chat')}
    >
      <CloseIcon onClick={closeModal}>
      </CloseIcon>
      <Container>
        <h1>Create new Chat</h1>
        <form onSubmit={submitHandle}>
          <Select
            defaultValue={null}
            label="Select context"
            options={optionsContext}
            onChange={onChangeContext}
            isMulti
          />
          {context && usersOptions && usersOptions.length > 0 && (
            <Select
              defaultValue={null}
              label="Select users"
              options={usersOptions}
              onChange={onChangeUsers}
              isMulti
            />
          )}

          {users && users.length > 0 && (
            <>
              <Select
                label="Select Claimant"
                options={optionsClaimants}
              />
              <Select
                label="Select Report"
                options={optionsReports}
              />
              <Select
                label="Select chat topic"
                options={optionsTopics}
              />
            </>
          )}
          <Button disabled={loader || !(users && users.length > 0)} type="submit">
            {loader ? 'Creating...' : 'Create'}
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default AddChat;
