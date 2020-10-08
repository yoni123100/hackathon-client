import {
  LOAD_POST,
  ADD_POST,
  ADD_PERSON,
  SEARCH_PERSON
} from './actionsType'

export const posts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_POST:
      return action.posts
    case ADD_POST:
      return [ ...state, action.post ]
    default:
      return state
  }
}

export const blacklist = (state = [], action) => {
  switch (action.type) {
    case SEARCH_PERSON:
      return action.posts
    case ADD_PERSON:
    default:
      return state
  }
}
