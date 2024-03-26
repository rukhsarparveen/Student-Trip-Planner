import React, { Component, useState } from "react";
import AuthenticationService from "./AuthenticationService.js";
import "./css/Login.css";
import ChalteHainService from "./api/ChalteHainService";
import {Link} from 'react-router-dom';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.registerClicked = this.registerClicked.bind(this);
        this.fetchUserDetails = this.fetchUserDetails.bind(this);
        this.adminLogin = this.adminLogin.bind(this);
    }

    //now the username and password field is a controlled field, since its controlled by the state
    //this is also now a generic function
    handleChange(event) {
        //console.log(this.state)
        this.setState({ [event.target.name]: event.target.value })
    }

    userAvailable() {
        ChalteHainService.isUserAvailable(this.state.username)
        .then(
            response => {
                if(response.data === false) {
                    this.setState({isUserPresent: response.data});
                };
                return response.data;
            }
        );
        
    }

    fetchUserDetails() {
        ChalteHainService.userLogin(this.state.username,this.state.password)
                    .then(
                        response => {
                            console.log(response);
                            if(response.data != "") {
                                AuthenticationService.registerSuccessfulLogin(response.data.fullName, response.data.email);
                                this.props.navigate(`/homepage`);
                            }
                            else {
                                this.setState({hasLoginFailed: true, isUserPresent:false});
                            }
                        }
                );

    }

    loginClicked() {
            this.fetchUserDetails();
    }

    registerClicked() {

        this.props.navigate(`/register`);
    }

    adminLogin() {
        this.props.navigate(`/adminlogin`);
    }

    render() {
        return (
            <div className="main" style={{height:'100vh'}}>        
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials! Please check the Input Details/Register as New User!</div>}    
                <div className="container" >
                    <div className="button-box">
                        <div id="btn"></div>
                    <button type="button" className="toggle-btn" >Login</button>
                    <button type="button" className="toggle-btn" onClick={this.registerClicked}>Register</button>
                    </div>
                    {/* <ShowInvalidCreds hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    <div className="input-group">
                    <input type="text" className="input-field" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Email Id" /><br/>
                    <input type="password" className="input-field" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password"/><br/>
                    <button type="button" className="submit-btn" onClick={this.loginClicked}>Login</button><br/><br/>

                    <button className="btn btn-warning" onClick={this.adminLogin}>Administrator Login</button>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

function ShowInvalidCreds(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccessful(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div>
    }
    return null
}

export default LoginComponent