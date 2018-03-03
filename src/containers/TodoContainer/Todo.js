import React, { Component } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div.attrs({
  className: 'todo-container'
})`
  display: flex;
  justify-content: space-between; 
`;

class Todo extends Component {
  render() {
    return (
      <TodoContainer></TodoContainer>
    );
  }
}

export default Todo;