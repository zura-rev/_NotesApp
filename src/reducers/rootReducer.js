import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";

const root = combineReducers({
  counter: counterReducer,
  posts:postsReducer,
  post:postReducer
})

export default root
