import React, { Component } from 'react';
import styled from 'styled-components';
import { BucketActions } from '../../actions';
import { BucketStore } from '../../stores'
import Bucket from '../Bucket';

const TodoContainer = styled.div.attrs({
  className: 'todo-container'
})`
  display: flex;
  justify-content: space-between; 
`;

class Todo extends Component {
  state = {
    buckets: BucketStore.getBuckets()
  }

  componentDidMount() {
    BucketStore.on('change', () => {
      this.setState({
        buckets: BucketStore.getBuckets()
      })
    })
  }

  render() {
    const buckets = this.state.buckets.map((bucket) => <Bucket />);
    return (
      <TodoContainer></TodoContainer>
    );
  }
}

export default Todo;