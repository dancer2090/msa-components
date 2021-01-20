import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  /* padding-bottom: 100px; */

  h1 {
    text-align: center;
    width: 100%;
  }

  form {
    width: 50%;
    margin: 0 auto;
  }

  button {
    margin: 30px auto;
  }
`;

export const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '50%'
  }
};

export const CloseIcon = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 2;

  &:before, &:after {
    content: " ";
    display: block;
    height: 3px;
    width: 18px;
    background: black;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  &:before {
    transform: rotate(45deg);
    top: 3px;
  }

  &:after {
    transform: rotate(-45deg)
  }

  &:hover {
    &:before, &:after {
      background: grey;
    }
  }
`;
