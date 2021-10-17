import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));