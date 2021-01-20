import React from 'react';
import Select from 'react-select';
import {
  StyledSelectBox,
  // CustomStyles,
  InputStyles,
} from './style';

const CustomSelect = (props) => {
  const {
    label,
    ...otherProps
  } = props;

  return (
    <StyledSelectBox>
      {label && <h4>{label}</h4>}
      <Select
        {...otherProps}
        styles={InputStyles}
      />
    </StyledSelectBox>
  );
};

export default CustomSelect;
