import React, { Component } from 'react';
import styled from 'styled-components';
import BucketOptions from './BucketOptions';
import { BucketActions } from '../../actions';
import Task from '../Task'
import { BucketContainer, EditContainer } from '../../components';

const StyledBucket = BucketContainer.extend`
  display: flex;
  flex-direction: column;
  .bucket-header {
    height: 40px;
    align-items: center;
  }
`;

const BucketBody = styled.div.attrs({
  className: 'bucket-body'
})`
  display: flex;
  height: 100%;
  width: 100%;
  flex-shrink: 1;

  .bucket-tasklist {
    width: 100%;
  }
`;

class Bucket extends Component {
  state = {
    editable: false
  }

  constructor(props) {
    super(props);
  }

  removeBucket = () => {
    BucketActions.removeBucket(this.props.bucket);
  }

  toggleEditable = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  updateName = (name) => {
    BucketActions.updateBucket({
      ...this.props.bucket,
      name
    });
    this.setState({
      editable: false
    });
  }

  addTask = () => {
    BucketActions.addNewTask(this.props.bucket.id);
  }

  render() {
    const { name, id, tasks } = this.props.bucket;
    const { editable } = this.state;
    const taskList = tasks.map((task, index) => <Task task={task} key={index} bucketId={id} />);
    return (
      <StyledBucket>
        <EditContainer className="bucket-header" 
          editable={editable} value={name}
          onUpdate={this.updateName}
          onCancel={() => this.setState({editable: false})}>
        </EditContainer>
        <BucketBody>
          <BucketOptions onRemove={this.removeBucket}
            addTask={this.addTask}
            editBucket={this.toggleEditable} />
          <div className="bucket-tasklist">{taskList}</div>
        </BucketBody>
      </StyledBucket>
    )
  }
}

export default Bucket;