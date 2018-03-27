import { EventEmitter } from 'events';
import { BucketDispatcher } from '../dispatchers';
import { remove, findIndex, find } from 'lodash';

let buckets = [];

class BucketStore extends EventEmitter {
  constructor() {
    super();
    BucketDispatcher.register((action) => {
      if (action.type === 'ADD_NEW_BUCKET') {
        this.addBucket(action.bucket);
      } else if (action.type === 'REMOVE_BUCKET') {
        this.removeBucket(action.bucket);
      } else if (action.type === 'UPDATE_BUCKET') {
        this.updateBucket(action.bucket);
      } else if (action.type === 'ADD_NEW_TASK') {
        this.addNewTask(action.bucketId, action.task);
      } else if (action.type === 'UPDATE_TASK') {
        this.updateTask(action.bucketId, action.task);
      } else if (action.type === 'DELETE_TASK') {
        this.deleteTask(action.bucketId, action.task);
      }
    });
  }

  addBucket(bucket) {
    buckets = [...buckets, bucket]
    this.emit('change');
  }

  removeBucket(bucket) {
    remove(buckets, b => b.id === bucket.id);
    this.emit('change');
  }

  updateBucket(bucket) {
    let index = findIndex(buckets, ['id', bucket.id]);
    buckets[index] = bucket;
    this.emit('change');
  }

  addNewTask(bucketId, task) {
    let bucketToChange = find(buckets, ['id', bucketId]);
    bucketToChange.tasks.push(task);
    this.emit('change');
  }

  updateTask(bucketId, task) {
    let bucketToChange = find(buckets, ['id', bucketId]);
    let TaskIndex = findIndex(bucketToChange.tasks, ['id', task.id]);
    bucketToChange.tasks[TaskIndex] = task;
    this.emit('change');
  }

  deleteTask(bucketId, task) {
    let bucketToChange = find(buckets, ['id', bucketId]);
    let TaskIndex = findIndex(bucketToChange.tasks, ['id', task.id]);
    bucketToChange.tasks.splice(TaskIndex, 1);
    this.emit('change');
  }

  getBuckets() {
    return buckets;
  }
}

export default new BucketStore();