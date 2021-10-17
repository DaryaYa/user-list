import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/users";


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
