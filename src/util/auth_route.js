import {Navigate, useLocation, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IsAuthenticated} from "../modules/auth/auth.reducer";
import RoutePaths from "./routes";


export const ProtectedWrapper = ({  ...props }) => {
    const location = useLocation();
    const state = useSelector(state => state)
    const authenticated =IsAuthenticated(state);
    console.log("state==", state.auth)
    return authenticated? (

        <Outlet />
    ) : (
        <Navigate
            to={RoutePaths.LOGIN}
            replace
            state={{ location }}
        />
    )
};export const AuthWrapper = ({  ...props }) => {
    const location = useLocation();
    const state = useSelector(state => state)
    const authenticated =IsAuthenticated(state);
    return !authenticated? (
        <Outlet />
    ) : (
        <Navigate
            to={RoutePaths.dashboard}
            replace
            state={{ location }}
        />
    )
};


