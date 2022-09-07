import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { combineReducers, AnyAction } from "redux";
import authReducer from "../modules/auth/auth.reducer";
import { useDispatch } from "react-redux";

//you can import other reducers here
const rootReducer = combineReducers({

    auth: authReducer,

})


const store = configureStore({
    reducer: rootReducer
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export default store
