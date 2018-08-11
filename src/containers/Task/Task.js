import React, { Component } from 'react';
import styled from 'styled-components';
import { EditContainer } from '../../components';
import { BucketActions } from '../../actions';
import  Prototypes from 'prop-types';
import {Themed} from '../../theme';

const TaskDiv = Themed(styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;

  p {
    text-align: left;
    padding: 0 8px;
    flex-shrink: 1px;
    word-break: break-word;
    margin: 12px 0px;
  }
`);

const TaskActions = Themed(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 40px;

  i {
    font-size: inherit;
    cursor: pointer;
    &.remove {
      color: ${({ theme }) => theme.alert}
    }
  }
`);

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
      editable: false,
      newTask: false
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

  editTask = () => {
    this.setState({
      editable: true
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
        <p key="0">{title}</p>,
        <TaskActions key="1">
          <i className="material-icons icon"
            onClick={this.editTask}
          >
            edit
          </i>
          <i className="material-icons icon remove"
            onClick={this.deleteTask}
          >
            remove_circle
          </i>
        </TaskActions>
      ];
    }

    return (
      <TaskDiv>
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