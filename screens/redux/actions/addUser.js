import { ADD_USER } from './types';

/* return function (dispatch) {
  
  dispatch({
    type: ADD_USER,
    payload: item
  })
} */


export function addUser(item) {
  return function (dispatch) {
    
    Axios.get("https://example.com/").then((response) => {
      dispatch({ type: "ADD_USER", payload: item })
    }).catch((err) => {
      dispatch({ type: "ADD_USER", payload: item })
    })
  }
}