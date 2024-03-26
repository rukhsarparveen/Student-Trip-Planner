import React,{Component} from "react";
import "../css/MyAccount.css";
import ChalteHainService from "../api/ChalteHainService";

class UsersListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        ChalteHainService.adminFetchUsersList().then(
            response => {
                this.setState( {
                            users: response.data
                    });
            }
        );
    }
    
    render() {
        return(
            <div className="page-fullWidthComponent1">
                <div className="trips">
                <table className="profile-infoTable">
                    <thead>
                        <tr>
                            <th>Email Id</th>
                            <th>Full Name</th>
                            <th>Contact No.</th>
                            <th>Trip Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            <tr>
                                <td>{user.email}</td>
                                <td>{user.fullName}</td>
                                <td>{user.phoneNo}</td>
                                <td>{user.tripPoints}</td>
                            </tr>
                        ))}      
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default UsersListComponent