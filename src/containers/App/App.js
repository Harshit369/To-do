import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TodoContainer from '../TodoContainer';

const AppContainer = styled.div.attrs({
  className: 'App'
})`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <AppContainer>
        <Header />
        <TodoContainer />
      </AppContainer>
    );
  }
}

export default App;
