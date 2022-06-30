import { combineReducers } from 'redux';
import user from './user_reducer';
import post from './post_reducer';

//action 을 redux에 등록
const rootReducer = combineReducers({
  user, post,
});

export default rootReducer;
