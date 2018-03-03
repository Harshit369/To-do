import { BucketDispatcher } from '../dispatchers';
import { uniqueId } from 'lodash';


export const addBucket = name => {
  BucketDispatcher.dispatch({
    type: ADD_NEW_BUCKET,
    bucket: {
      id: uniqueId(),
      tasks: [],
      name
    }
  });
}

export const removeBucket = bucket => {
  BucketDispatcher.dispatch({
    type: REMOVE_BUCKET,
    bucket
  });
}