import React, { Component } from "react";
import ChalteHainService from "./api/ChalteHainService";
import "./css/Register.css";

class RegisterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            fullname: '',
            password: '',
            phoneno: '',
            showUserExistsMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.registerationClicked = this.registerationClicked.bind(this);
    }

    //now the username and password field is a controlled field, since its controlled by the state
    //this is also now a generic function
    handleChange(event) {
        //console.log(this.state)
        this.setState({ [event.target.name]: event.target.value })
    }

    registerationClicked() {
        let user = {
            email: this.state.email,
            fullName: this.state.fullname,
            pwd: this.state.password,
            phoneNo: this.state.phoneno,
            tripPoints: 0
        };
        console.log(user);
        ChalteHainService.registerUser(user)
        // this.props.navigate(`/login`);
        .then(
            response => {
                console.log(response.data);
                if(response.data=="added") {
                    this.props.navigate(`/login`);
                } else {
                    this.setState({showUserExistsMessage: true});
                }
            }
        );
        
        
    }

    loginClicked()
    {
        this.props.navigate(`/login`);
    }

    render() {
        return (
            <div className="main" style={{height:'100vh'}}>     
                {this.state.showUserExistsMessage && <div className="alert alert-warning">This Email is already registered!</div>}           
                <div className="container2">
                <div className="button-box">
                        <div id="btnn"></div>
                    <button type="button" className="toggle-btn" onClick={this.loginClicked}>Login</button>
                    <button type="button" className="toggle-btn" onClick={this.registerClicked}>Register</button>
                    </div>
                    {/* <ShowInvalidCreds hasLoginFailed={this.state.hasLoginFailed}/> */}

                    <div className="input-group">
                    <input type="text" placeholder="Full Name" className="input-field" name="fullname" value={this.state.fullname} onChange={this.handleChange} /><br/>
                    <input type="text" placeholder="Enter Email ID" className="input-field" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <input type="password" placeholder="Enter Password" className="input-field" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
                    <input type="phoneno" placeholder="Enter Contact number" className="input-field" name="phoneno" value={this.state.phoneno} onChange={this.handleChange} /><br/>
                    <button type="button" className="submit-btn" onClick={this.registerationClicked}>Register</button>
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

export default RegisterComponent