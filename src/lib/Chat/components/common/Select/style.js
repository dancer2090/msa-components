import styled from 'styled-components';

export const StyledSelectBox = styled.div`
  position: relative;
  padding: 10px 0;

  h4 {
    margin: 0;
    padding-bottom: 5px;
  }
`;

export const InputStyles = {
  control: () => ({
    display: 'flex',
    border: '1px solid rgba(202,204,208,0.85)',
    borderRadius: '4px',
    padding: '3px 0',
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '80px'
  }),

};

export const CustomStyles = {

  container: (provider, state) => ({
    position: 'relative',
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: !state.selectProps.menuIsOpen ? '1px solid rgba(0, 0, 0, 0.42)' : '1px solid #1499FE',
    borderRadius: '4px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (provided, state) => ({
    color: 'rgba(0, 0, 0, 0.42)',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    transition: 'all 0.2s ease-out',
    display: 'flex',
    alignItems: 'center',
  }),

  indicatorsContainer: () => ({
    color: 'rgba(0, 0, 0, 0.42)',
    padding: '0',
    transition: 'color 150ms',
    boxSizing: 'border-box',
    position: 'relative',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    marginRight: '18px',
  }),

  control: () => ({
    display: 'flex',
    border: 'none',
    borderRadius: '4px',
    padding: '0',
    height: '100%',
  }),

  menu: () => ({
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    zIndex: '20',
    top: 'calc(100% + 7px)',
    padding: '6px 0',
  }),

  menuList: () => ({
    marginBottom: '3px',
    backgroundColor: 'white',
  }),

  option: () => ({
    color: '#3F4852',
    padding: '6pxp 0',
  }),

  placeholder: () => ({
    fontSize: '16px',
    lineHeight: '18px',
    color: '#3D4B55',
    opacity: 0.54,
  }),
};
