import React, {Component} from "react";
import ChalteHainService from "../api/ChalteHainService";
import AuthenticationService from "../AuthenticationService.js";

class MyProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '',
            phoneno: '',
            editEnabled: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.editClicked = this.editClicked.bind(this);
        this.saveClicked = this.saveClicked.bind(this);
    }

    componentDidMount() {
        let email = AuthenticationService.getLoggedInEmail();
        console.log(email); 
        ChalteHainService.fetchUserDetails(email).then(
            response => {
                console.log(response.data);
                this.setState( {
                            email: response.data.email,
                            fullname: response.data.fullName,
                            phoneno: response.data.phoneNo
                    });
            }
        );
        
    }

    handleChange(event) {
        //console.log(this.state)
        this.setState({ [event.target.name]: event.target.value })
    }
 
    editClicked() {
        this.setState({editEnabled:true});
    }

    saveClicked() {
        ChalteHainService.updateMobile(this.state.phoneno,this.state.email).then(
            response => {
                this.setState({editEnabled:false});
            }
        )
    }

    render() {
        return(
            <div className="page-fullWidthComponent1"  style={{height:"100vh"}}>
                        {!this.state.editEnabled && <div className="profile-card">
                            <div className="infoLabel">Profile Details</div>
                            <table className="profile-infoTable">
                                <tbody>
                                    <tr>
                                        <td>Email ID</td>
                                        <td>{this.state.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>{this.state.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>{this.state.phoneno}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="profile-editButton" onClick={this.editClicked}> EDIT Mobile Number </button>
                        </div>}
                        {this.state.editEnabled && <div className="profile-card">
                            <div className="infoLabel">Profile Details</div>                            
                            <table className="profile-infoTable">
                                <tbody>
                                    <tr>
                                        <td>Email ID</td>
                                        <td>{this.state.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>{this.state.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td><input type="phoneno" placeholder="Enter Contact number" className="input-field" name="phoneno" value={this.state.phoneno} onChange={this.handleChange} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="profile-editButton" onClick={this.saveClicked}> Save Changes </button>
                        </div>}
        </div>
        );
    }
}

export default MyProfileComponent;