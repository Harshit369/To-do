import React, { Component } from 'react';
import styled from 'styled-components';
import BucketOptions from './BucketOptions';
import { BucketStore } from '../../stores';
import Task from '../Task'
import { BucketContainer } from '../../components';

const StyledBucket = BucketContainer.extend`
  display: flex;
  flex-direction: column;
`;

const BucketHeader = styled.div.attrs({
  className: 'bucket-header'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  text-align: center;
  flex-shrink: 0;
`;

const BucketBody = styled.div.attrs({
  className: 'bucket-body'
})`
  display: flex;
  height: 100%;
  flex-shrink: 1;
`;

class Bucket extends Component {
  removeBucket = () => {
    BucketStore.removeBucket(this.props.bucket);
  }

  render() {
    debugger;
    const { name, id, tasks } = this.props.bucket;
    const taskList = tasks.map((task) => <Task />);
    return (
      <StyledBucket>
        <BucketHeader>{name}</BucketHeader>
        <BucketBody>
          <BucketOptions onRemove={this.removeBucket} />
          <div className="bucket-task-list">{taskList}</div>
        </BucketBody>
      </StyledBucket>
    )
  }
}

export default Bucket;