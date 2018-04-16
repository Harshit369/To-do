import { BucketDispatcher } from '../dispatchers';
import { uniqueId } from 'lodash';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const getDefaultTask = () => {
  return {
    id: uuidv4(),
    title: '',
    createdOn: Date.now()
  }
}

const addBucket = (name='Untitled new') => {
  BucketDispatcher.dispatch({
    type: 'ADD_NEW_BUCKET',
    bucket: {
      id: uniqueId(),
      tasks: [],
      name
    }
  });
}

const removeBucket = bucket => {
  BucketDispatcher.dispatch({
    type: 'REMOVE_BUCKET',
    bucket
  });
}

const updateBucket = bucket => {
  BucketDispatcher.dispatch({
    type: 'UPDATE_BUCKET',
    bucket
  });
}

const addNewTask = (bucketId, task = getDefaultTask()) => {
  BucketDispatcher.dispatch({
    type: 'ADD_NEW_TASK',
    bucketId,
    task
  });
}

const updateTask = (bucketId, task) => {
  BucketDispatcher.dispatch({
    type: 'UPDATE_TASK',
    bucketId,
    task: { ...task, updatedOn: Date.now() }
  });
}

const deleteTask = (bucketId, task) => {
  BucketDispatcher.dispatch({
    type: 'DELETE_TASK',
    bucketId,
    task: { ...task }
  });
}

export default {
  addBucket,
  removeBucket,
  updateBucket,
  addNewTask,
  updateTask,
  deleteTask
}