
import { combineReducers } from 'redux';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
  image: imageReducer,
  // 다른 리듀서들도 필요하다면 추가 가능
});

export default rootReducer;