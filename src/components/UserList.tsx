import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { } from 'module';
import { fetchUsers, deleteItem } from "../store/action-creators/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
import './userList.css';

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

  return (
    <div>
      <h1>List of Users</h1>
      <button className="fetch" onClick={() => dispatch(fetchUsers())}>FETCH USERS</button>
      <div className="list">
         {users.map(el => {
        const id = el.id;
        return (
          <div key={id} className="userList">
            <button onClick={() => dispatch(deleteItem(id))}>X
              <span className="tooltiptext">Delete this User</span></button>
            <div className="text">
               <p>NAME: {el.name}</p>
            <p>USERNAME: {el.username}</p>
            <p>E-MAIL: {el.email}</p>
            </div>        
          </div>
        )
      }
      )
      }
      </div>
     
    </div>)
}