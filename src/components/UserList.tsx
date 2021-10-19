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
  const [search, setSearch] = useState<string>('');

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

  const highlight = (str) => {
    if (!search) return str
    const regexp = new RegExp(search, 'ig')
    const matchValue = str.match(regexp)
    if (matchValue) {

      return str.split(regexp).map((s, index, array) => {
        if (index < array.length - 1) {
          const c = matchValue.shift()
          return <span key={index}>{s}<span className={'highlight'}>{c}</span></span>
        }
        return s
      })
    }
    return str
  }

  return (
    <div>
      <h1>List of Users</h1>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      </div>

      <button className="fetch" onClick={() => dispatch(fetchUsers())}>FETCH USERS</button>
      <div className="list">
        {users.filter(el => {
          if (el.username.toLowerCase().includes(search.toLowerCase())) {
            return el;
          } if (el.name.toLowerCase().includes(search.toLowerCase())) {
            return el;
          } if (el.email.toLowerCase().includes(search.toLowerCase())) {
            return el;
          }
        })
          .map(el => {
            const id = el.id;
            return (
              <div key={id} className="userList" >
                <div className="button">
                  <button onClick={() => dispatch(deleteItem(id))}>X
                    <span className="tooltiptext">Delete this User</span></button>
                </div>
                <div className="list-text" onClick={() => getActiveUser(el)}>
                  <div className="text" >
                    <p>NAME: {highlight(el.name)}</p>
                    <p>USERNAME: {highlight(el.username)}</p>
                    <p>E-MAIL: {highlight(el.email)}</p>
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