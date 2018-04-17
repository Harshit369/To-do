import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  padding: 16px; 
  flex-grow: 1;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.appBackground};
  color: ${({ theme }) => theme.textRegular};
`;

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
      <TodoContainer theme={this.context.theme}>
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

Todo.contextTypes = {
  theme: PropTypes.object
}

export default Todo;