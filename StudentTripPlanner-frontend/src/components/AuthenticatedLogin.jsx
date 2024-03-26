import React,{ Component } from "react";
import AuthenticationService from "./AuthenticationService";
import {Route, Navigate} from 'react-router-dom';

class AuthenticatedLogin extends Component {
    render() {
        if(AuthenticationService.isUserLoggedIn()) {
            return <Navigate to = "/homepage"/>
        } else {
            return <Navigate to = "/login"/>
        }
    }
}

export default AuthenticatedLogin;