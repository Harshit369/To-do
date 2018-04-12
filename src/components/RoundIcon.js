import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const RoundIcon = (props, { theme }) => {
  return (
    <IconWrapper {...props} theme={theme} >
      <i className='icon material-icons '>{props.icon}</i>
    </IconWrapper>
  );
}

RoundIcon.contextTypes = {
  theme: PropTypes.object
}
export default RoundIcon