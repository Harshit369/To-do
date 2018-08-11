import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import {Themed} from '../../theme';

const HeadWrapper = Themed(styled.header.attrs({
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
`);

const Header = () => {
  return (
    <HeadWrapper>
      <Logo />
      <h1 className="App-title">Welcome to Todo Flux</h1>
      <ThemeToggle></ThemeToggle>
    </HeadWrapper>
  );
}

export default Header;
