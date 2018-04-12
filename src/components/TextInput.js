import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input.attrs({
  type: 'text',
})`
  padding: 8px;
  height: 100%;
  width: 100%;
  outline: none;
  height: 100%;
  border: 0px;
  color: ${({theme}) => theme.textLight};
  font-size: inherit;
`;

const Input = (props, {theme}) => {
  return (
    <StyledInput {...props} theme={theme} />
  );
}

Input.contextTypes = {
  theme: PropTypes.object
}

export default Input;
