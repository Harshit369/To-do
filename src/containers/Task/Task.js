import React, { Component } from 'react';
import styled from 'styled-components';
import { EditContainer } from '../../components';
import { BucketActions } from '../../actions';
import  Prototypes from 'prop-types';

const TaskDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  p {
    padding: 0 8px;
  }
`;

class Task extends Component {
  state = {
    editable: !this.props.task.updatedOn,
    newTask: !this.props.task.updatedOn
  }

  constructor(props) {
    super(props);
  }

  updateTask = (title) => {
    BucketActions.updateTask(this.props.bucketId, { ...this.props.task, title })
    this.setState({
      editable: false
    });
  }

  onCancel = () => {
    if (this.state.newTask) {
      this.deleteTask()
    } 
    this.setState({
      editable: false
    });
  }

  deleteTask = () => {
    BucketActions.deleteTask(this.props.bucketId, this.props.task);
  }

  componentWillMount() {}

  render() {
    const { bucketId, task } = this.props;
    const { editable, newTask } = this.state;
    const { id, title, createdOn, editMode } = task;
    const getTask = () => {
      if (editable) {
        return (
          <EditContainer value={title} editable={true}
            onUpdate={this.updateTask}
            onCancel={this.onCancel}
          ></EditContainer>
        );
      }
      return [
        <p>{title}</p>
      ];
    }

    return (
      <TaskDiv theme={this.context.theme}>
        {getTask()}
      </TaskDiv>
    );
  }

  componentDidMount() {}

}

Task.contextTypes = {
  theme: Prototypes.object
}

export default Task;