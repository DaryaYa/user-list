import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from './Modal';
import { fetchUsers, deleteItem } from "../store/action-creators/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
import './userList.css';
interface IUser {
  user: {};
}

export const UserList: React.FC = () => {

  let { users, errors, loading } = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({ user: {} });

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (errors) {
    return <h1>Error</h1>
  }

  const getActiveUser = (el: IUser) => {
    setActive(true);
    setUser(el);
  }

  return (
    <div>
      <h1>List of Users</h1>
      <button className="fetch" onClick={() => dispatch(fetchUsers())}>FETCH USERS</button>
      <div className="list">
        {users.map(el => {
          const id = el.id;

          return (
            <div key={id} className="userList" >
              <div className="button">
                <button onClick={() => dispatch(deleteItem(id))}>X
                  <span className="tooltiptext">Delete this User</span></button>
              </div>
              <div className="list-text" onClick={() => getActiveUser(el)}>
                <div className="text" >
                  <p>NAME: {el.name}</p>
                  <p>USERNAME: {el.username}</p>
                  <p>E-MAIL: {el.email}</p>
                </div>
              </div>

            </div>
          )
        }
        )
        }
      </div>

      <Modal active={active} setActive={setActive} user={user} />
    </div>)
}