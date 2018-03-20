import { EventEmitter } from 'events';
import { BucketDispatcher } from '../dispatchers';
import { remove, findIndex } from 'lodash';

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

  getBuckets() {
    return buckets;
  }
}

export default new BucketStore();