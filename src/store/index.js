import { combineReducers } from 'redux'
import { posts, blacklist } from './reducers'

export default combineReducers({ posts, blacklist })
