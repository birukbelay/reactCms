import React from "react";
import { useLocation, useNavigate, useParams, } from "react-router-dom";

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (React.createElement(Component, Object.assign({}, props, { router: { location, navigate, params } })));
    }
    return ComponentWithRouterProp;
}