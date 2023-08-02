import { createStore, combineReducers } from 'redux';
import custom1Reducer from './reducers/custom1Reducer';

const rootReducer = combineReducers({
  custom1: custom1Reducer,
});

const store = createStore(rootReducer);

export default store;