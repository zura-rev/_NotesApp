import {GET_POST_BEGIN,GET_POST_SUCCESS,GET_POST_ERROR} from '../actions/actionTypes'

const initialState = {
  loader:false,
  post:null,
  error:null
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_POST_BEGIN:
      return { ...state, loader: true }
    case GET_POST_SUCCESS:
      return { ...state, post: payload, error:null, loader: false }
    case GET_POST_ERROR:
        return {
          ...state, posts: null, error:payload, loader: false
        }
    default:
      return state
  }
}
