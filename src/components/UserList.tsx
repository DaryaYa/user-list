import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { } from 'module';
import { fetchUsers } from "../store/action-creators/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../types/users";

export const UserList: React.FC = () => {

  let { users, errors, loading } = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (errors) {
    return <h1>Error</h1>
  }

  const deleteItem = (id: string) => {

    return (dispatch: Dispatch<UserAction>) => {
      users = users.filter(el => el.id !== id);
      dispatch({ type: UserActionTypes.DELETE_USER, payload: users })
    }
  }

  return (
    <div>
      <p>List of Users</p>
      <button onClick={() => dispatch(fetchUsers())}>FETCH_USERS</button>
      {users.map(el => {
        const id = el.id;
        return (
          <div key={id}>
            <button onClick={() => dispatch(deleteItem(id))}>X</button>

            <span>NAME: {el.name}</span>
            <span>USERNAME: {el.username}</span>
            <span>E-MAIL: {el.email}</span>
          </div>
        )
      }
      )
      }
    </div>)
}