import React, { useRef } from 'react';
import { TextAreaInput } from './styles';

const TextArea = props => {
  const idealHeight = useRef(32);
  const lastScrollHeight = useRef(30);
  const textAreaRef = useRef(null);

  if (textAreaRef.current != null) {
    textAreaRef.current.style.height = '0px'; // This creates an inline style

    let scrollHeight = textAreaRef.current.scrollHeight;
    // const style = window.getComputedStyle(textAreaRef.current);
    textAreaRef.current.removeAttribute('style'); // The inline style must be removed

    let delta = scrollHeight - lastScrollHeight.current;
    lastScrollHeight.current = scrollHeight;
    idealHeight.current = idealHeight.current + delta;
  }

  return (
    <TextAreaInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      ref={textAreaRef}
      idealHeight={idealHeight.current + 'px'}
    />
  );
};

export default TextArea;
