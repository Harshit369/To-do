import React from 'react';
import styled from 'styled-components';

export default styled.div.attrs({
  style: props => Object.assign({}, props.style)
})`
  width: 3450px;
  height: 450px;
  max-width: 30%;
  min-width: 300px;
  margin-right: 16px;
  margin-bottom: 16px;
`;