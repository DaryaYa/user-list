import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/userReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;