import React, {Component} from "react";
import AddTripComponent from "./AddTripComponent";
import TripsListComponent from "./TripsListComponent";
import UsersListComponent from "./UsersListComponent";

class AdminHomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserClicked: false,
            isTripsClicked: false,
            isAddTripClicked: false
        };
        this.usersListClicked = this.usersListClicked.bind(this);
        this.tripsListClicked = this.tripsListClicked.bind(this);
        this.addTripClicked = this.addTripClicked.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    usersListClicked() {
        this.setState({
            isUserClicked: true,
            isTripsClicked: false,
            isAddTripClicked: false
        });
    }

    tripsListClicked() {
        this.setState({
            isUserClicked: false,
            isTripsClicked: true,
            isAddTripClicked: false
        });
    }

    addTripClicked() {
        this.setState({
            isUserClicked: false,
            isTripsClicked: false,
            isAddTripClicked: true
        });
    }

    refresh() {
        this.setState({
            isUserClicked: false,
            isTripsClicked: true,
            isAddTripClicked: false
        });
    }


    render() {
        return(
            <div>
                <div className="admin-menu">
                    <button className="btn btn-info" onClick={this.usersListClicked}>View Users</button> &nbsp; &nbsp;
                    <button className="btn btn-info" onClick={this.tripsListClicked}>View Trips</button> &nbsp; &nbsp;
                    <button className="btn btn-info"onClick={this.addTripClicked}>Add Trip</button>
                </div>
                {this.state.isUserClicked && <UsersListComponent/>}
                {this.state.isTripsClicked && <TripsListComponent/>}
                {this.state.isAddTripClicked && <AddTripComponent refresh={this.refresh}/>} 
            </div>

        );
    }
}

export default AdminHomePageComponent