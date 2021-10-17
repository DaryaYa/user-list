export interface UserState {
  users: any[];
  loading: boolean;
  errors: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  DELETE_USER = 'DELETE_USER',
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface DeleteUserAction {
  type: UserActionTypes.DELETE_USER;
  payload: any[];
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction | DeleteUserAction;