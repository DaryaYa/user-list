import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/users";
import { store } from "../../store";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => json);
  dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response})
    } catch (e: any) {    
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'This is an error: ' + e.message});
    }
  }
}

export const deleteItem = (id: string) => {
  let users = store.getState().users;
  return (dispatch: Dispatch<UserAction>) => {
    users = users.filter(el => el.id !== id);
    dispatch({ type: UserActionTypes.DELETE_USER, payload: users })
  }
}
