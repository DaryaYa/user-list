import { UserState, UserActionTypes, UserAction} from "../../types/users";

const initialState: UserState = {
  users: [],
  loading: false,
  errors: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {loading: true, errors: null, users: []}
    case UserActionTypes.FETCH_USERS_SUCCESS: 
      return {loading: false, errors: null, users: action.payload}
    case UserActionTypes.FETCH_USERS_ERROR: 
      return {loading: false, errors: action.payload, users: []}   
    case UserActionTypes.DELETE_USER:
    return {loading:false, errors: null, users: action.payload}  
    default:
     return state;
  }
}

export type RootState = ReturnType<typeof userReducer>