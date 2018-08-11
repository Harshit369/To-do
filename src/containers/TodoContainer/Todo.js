import React, { Component } from 'react';
import styled from 'styled-components';

import { BucketActions } from '../../actions';
import { BucketStore } from '../../stores'
import Bucket from '../Bucket';
import { AddBucket } from '../../components';
import {Themed} from '../../theme';

const TodoContainer = Themed(styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 16px; 
  flex-grow: 1;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.appBackground};
  color: ${({ theme }) => theme.textRegular};
`);

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    buckets: BucketStore.getBuckets()
  }

  addBucket = () => {
    BucketActions.addBucket();
  }

  render() {
    const buckets = this.state.buckets.map((bucket, index) => <Bucket bucket={bucket} key={index} />);
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