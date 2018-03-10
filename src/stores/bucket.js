import { EventEmitter } from 'events';
import { BucketDispatcher } from '../dispatchers';
import { remove } from 'lodash';

let buckets = [];

class BucketStore extends EventEmitter {
  constructor() {
    super();
    BucketDispatcher.register((action) => {
      if (action.type === 'ADD_NEW_BUCKET') {
        this.addBucket(action.bucket);
      } else if (action.type === 'ADD_NEW_BUCKET') {
        this.removeBucket(action.bucket);
      }
    });
  }

  addBucket(bucket) {
    buckets = [...buckets, bucket]
    this.emit('change');
  }

  removeBucket(bucket) {
    remove(buckets, id => id === bucket.id);
    this.emit('change');
  }

  getBuckets() {
    return buckets;
  }
}

export default new BucketStore();