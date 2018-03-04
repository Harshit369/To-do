import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div.attrs({
  style: props => props.style
})`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
`;

export default (props) => {
  return (
    <IconWrapper {...props}>
      <i className={'material-icons ' + (props.className || '')}>{props.icon}</i>
    </IconWrapper>
  );
}