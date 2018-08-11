import React from 'react';
import styled from 'styled-components';
import {Themed} from '../theme';

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
  background-color: transparent;
`;

const Input = (props) => {
  return (
    <StyledInput {...props} />
  );
}

export default Themed(Input);
