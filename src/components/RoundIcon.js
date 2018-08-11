import React from 'react';
import styled from 'styled-components';
import {Themed} from '../theme';

const IconWrapper = styled.div.attrs({
  style: props => props.style
})`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 1px solid;
`;

const RoundIcon = (props) => {
  return (
    <IconWrapper {...props} >
      <i className='icon material-icons '>{props.icon}</i>
    </IconWrapper>
  );
}

export default Themed(RoundIcon)