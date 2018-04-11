import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
  padding: 8px;
  height: 100%;
  width: 100%;
  outline: none;
  height: 100%;
  border: 0px;
  color: #888;
  font-size: inherit;
`;

export default (props) => {
  return  (
    <Input {...props} theme={this.context.theme} />
  )
}