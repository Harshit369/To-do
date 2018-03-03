import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Header = styled.header.attrs({
  className: 'App-header'
})`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export default () => {
  return (
    <Header className="App-header">
      <Logo />
      <h1 className="App-title">Welcome to React</h1>
    </Header>
  );
}