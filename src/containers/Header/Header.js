import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import PropTypes from 'prop-types';

const HeadWrapper = styled.header.attrs({
  className: 'app-header'
})`
  background-color: ${({theme}) => theme.dark};
  height: 150px;
  padding: 20px;
  color: ${({ theme }) => theme.light};
`;

const Header = (props, { theme }) => {
  return (
    <HeadWrapper theme={theme}>
      <Logo />
      <h1 className="App-title">Welcome to React</h1>
    </HeadWrapper>
  );
}

Header.contextTypes = {
  theme: PropTypes.object
}

export default Header;
