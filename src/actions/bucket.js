import { BucketDispatcher } from '../dispatchers';
import { uniqueId } from 'lodash';

const defaultTask = {
  id: uniqueId(),
  title: '',
  createdOn: Date.now()
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

const addNewTask = (bucketId, task = defaultTask) => {
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