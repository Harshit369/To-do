import { BucketDispatcher } from '../dispatchers';
import { uniqueId } from 'lodash';


const addBucket = name => {
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

export default {
  addBucket,
  removeBucket
}