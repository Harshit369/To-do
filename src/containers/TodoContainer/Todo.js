import React, { Component } from 'react';
import styled from 'styled-components';
import { BucketActions } from '../../actions';
import { BucketStore } from '../../stores'
import Bucket from '../Bucket';
import { AddBucket } from '../../components';

const TodoContainer = styled.div.attrs({
  className: 'todo-container'
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding 16px; 
`;

class Todo extends Component {
  state = {
    buckets: BucketStore.getBuckets()
  }

  addBucket = () => {
    BucketActions.addBucket('Untitled new');
  }

  render() {
    const buckets = this.state.buckets.map((bucket, index) => <Bucket bucket={bucket} key={index} />);
    debugger;
    return (
      <TodoContainer>
        {buckets}
        <AddBucket onClick={this.addBucket} />
      </TodoContainer>
    );
  }

  componentDidMount() {
    BucketStore.on('change', () => {
      this.setState({
        buckets: BucketStore.getBuckets()
      })
    })
  }
}

export default Todo;