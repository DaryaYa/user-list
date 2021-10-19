import './modal.css';
// import { store } from "../store";

export const Modal = ({ active, setActive, user }) => {
  // let user = store.getState().users.find(el => el.id === id);
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div>
          <h3>ADDRESS:</h3>
          <p>Street: {user.address?.street}</p>
          <p>Suite: {user.address?.suite}</p>
          <p>City: {user.address?.city}</p>
          <p>Zip Code: {user.address?.zipcode}</p>
        </div>
        <div>
          <h3>COMPANY:</h3>
          <p>Name: {user.company?.name}</p>
          <p>Phrase: {user.company?.catchPhrase}</p>
          <p>Business: {user.company?.bs}</p>
        </div>
      </div>
    </div>
  )
}
