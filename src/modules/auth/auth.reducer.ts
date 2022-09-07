import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Query, Status } from "../../util/constants";
import { AppThunk } from "../../app/store";
import { useNavigate } from "react-router-dom";
import jwtDecode, {JwtPayload} from "jwt-decode";
import { destroyToken, getToken, saveTokenToLocalStorage } from "../../util/jwt.service";
import axios from "axios";
import ApiService from "../../util/api.service";
import { ActionError, AuthResponse, AuthState } from "./auth.model";
import {  AnyAction } from "redux";
import RoutePaths from "../../util/routes";

const initState:AuthState={
    user:null,
    error:null,
    loadingStatus:Status.NORMAL,
    queryType:"",
}
export const authReducer = createSlice({
    name: "auth",
    initialState: initState,
    reducers: {
        queryStart(state, action: PayloadAction<string>){
            state.loadingStatus=Status.LOADING
            state.queryType=action.payload
        },
        loginSuccess: (state, action) =>{
            state.user = action.payload;
            state.loadingStatus = Status.SUCCESS
            state.queryType=Query.LOGIN
            state.error = null
        },
        queryFailure(state, action: PayloadAction<ActionError>) {
            state.loadingStatus = Status.ERROR
            state.error = action.payload.error
            state.queryType=action.payload.queryType

        },
        logout: (state) =>{
            state=initState
        }
    }
})

export const {queryStart, queryFailure, loginSuccess, logout} = authReducer.actions;


export const login = (usr: any, checked:boolean): AppThunk => async dispatch => {

    console.log("```````````--we are in login", usr)
    try {
        dispatch(queryStart(Query.LOGIN))
        const usrRes = await ApiService.post("auth/login", usr)

        let user:AuthResponse=usrRes.data
        console.log("logedIn user ==", user)
        dispatch(loginSuccess(user))
        axios.defaults.headers.common['Authorization'] = user.access_token;
        if (checked) {
            saveTokenToLocalStorage(user);
        }
        if (user.permission === "ac@job") window.location.href = RoutePaths.dashboard
        else
            window.location.href = RoutePaths.dashboard;
        return

    } catch (err:any) {
        console.log("login error happned", err.message)
        dispatch(queryFailure(<ActionError>{error:err.message, queryType:Query.LOGIN}))
    }
}

export const logoutUser = () => (dispatch:any) => {
    destroyToken()
    delete axios.defaults.headers.common['Authorization'];
    dispatch(logout());
    window.location.href =RoutePaths.LOGIN;
};

export const refreshToken=(info:AuthResponse): AppThunk => async dispatch =>{
    try{
        const usrRes = await ApiService.post("auth/token", {"refresh_token":info.refresh_token})
        const newTokens=usrRes.data
        console.log("refreshIng Token", newTokens)
        info.refresh_token=newTokens.refresh_token
        info.access_token=newTokens.access_token

        dispatch(loginSuccess(info))
    }catch (e:any){
        dispatch(logout());
    }



}

export const CheckExpiredToken=()=>(dispatch: any)  =>{
    const token = getToken();

    if (token) {
        try{
            let info:AuthResponse=token.user
            console.log("info==", info)

            const decodedToken = jwtDecode<JwtPayload>(info.access_token)
            console.log("decodedTOkn==", decodedToken)

            // @ts-ignore
            if (decodedToken.exp * 1000 < Date.now()) {
                dispatch(refreshToken(info));
            } else {
                dispatch(loginSuccess(info));
                axios.defaults.headers.common['Authorization'] = token.token;
            }
        }catch (e:any){
            console.log("token Exists but jwtDecoding err>>", e.message)
        }

    }else {
        dispatch(logout());
    }
}
export const selectUser = (state: any) => state.auth.user;
export const IsAuthenticated =(state: any)=> state.auth.user !==null
export default authReducer.reducer;
