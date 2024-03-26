import React,{ Component } from "react";
import AuthenticationService from "./AuthenticationService";
import {Route, Navigate} from 'react-router-dom';

class AdminAuthentication extends Component {
    render() {
        if(AuthenticationService.isAdmin()) {
            return {...this.props.children}
        } else {
            return <Navigate to = "/login"/>
        }
    }
}

export default AdminAuthentication;