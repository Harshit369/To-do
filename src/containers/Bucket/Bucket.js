import React, { Component } from 'react';
import styled from 'styled-components';
import BucketOptions from './BucketOptions';
import { BucketStore } from '../../stores';
import Task from '../Task'

const BucketContainer = styled.div`
  width: 300px;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  .bucket-header {
    text-align: center;
    flex-shrink: 0;
  }
  .bucket-body {

  }
`;


class Bucket extends Component {
  removeBucket = () => {
    BucketStore.removeBucket(this.props.bucket);
  }

  render() {
    const { name, id, tasks } = this.props;
    const taskList = tasks.map((task) => <Task />);
    return (
      <BucketContainer key={id}>
        <div className="bucket-header">{name}</div>
        <div className="bucket-body">
          <BucketOptions onRemove={this.removeBucket} />
          <div className="bucket-task-list">{taskList}</div>
        </div>
      </BucketContainer>
    )
  }
}