import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import collectionReducer from './features/collection/collectionSlice';

export default configureStore({
  reducer: {
	counter: counterReducer,
	collection: collectionReducer,
  },
});
