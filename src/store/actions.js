import {
    LOAD_POST,
    ADD_POST,
    ADD_PERSON,
    SEARCH_PERSON
  } from './actionsType'

//localhost:5000 /story - post
export const loadPosts = (dispatch) => {
    //get 
    Promise.resolve({ title: "yo" }).then(posts => {
        dispatch({
            type: LOAD_POST,
            posts
        })
    })
}