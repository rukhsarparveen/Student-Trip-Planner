import React, { Component, useState } from "react";
import AuthenticationService from "../AuthenticationService";
import "../css/Login.css";

class AdminLoginComponent extends Component {

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
    }

    //now the username and password field is a controlled field, since its controlled by the state
    //this is also now a generic function
    handleChange(event) {
        //console.log(this.state)
        this.setState({ [event.target.name]: event.target.value })
    }


    loginClicked() {
        //assumption - valid usname and passwd = admin and chaltehain123
        if (this.state.username === "admin" && this.state.password === "chaltehain123") {
            AuthenticationService.registerAdmin();
            this.props.navigate(`/adminhome`);
            
        }
        else {
            this.setState(
                {
                    showSuccessMessage: false,
                    hasLoginFailed: true
                });
        }
    }

    render() {
        return (
            <div className="main" style={{height:'100vh'}}>        
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials! Please check the Input Details/Register as New User!</div>}    
                <div className="container">
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    <div className="input-group">
                    <h4>Administrator Login</h4>
                    <input type="text" className="input-field" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Email Id" /><br/>
                    <input type="password" className="input-field" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password"/><br/>
                    <button type="button" className="submit-btn" onClick={this.loginClicked}>Login</button>
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

export default AdminLoginComponent