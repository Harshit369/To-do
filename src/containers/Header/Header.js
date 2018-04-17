import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import PropTypes from 'prop-types';

const HeadWrapper = styled.header.attrs({
  className: 'app-header'
})`
  display: flex;
  background-color: ${({theme}) => theme.headerColor};
  padding: 20px;
  align-items: center;
  color: ${({ theme }) => theme.light};

  h1 {
    margin: 8px;
  }
`;

const Header = (props, { theme }) => {
  return (
    <HeadWrapper theme={theme}>
      <Logo />
      <h1 className="App-title">Welcome to Todo Flux</h1>
      <ThemeToggle></ThemeToggle>
    </HeadWrapper>
  );
}

Header.contextTypes = {
  theme: PropTypes.object
}

export default Header;
