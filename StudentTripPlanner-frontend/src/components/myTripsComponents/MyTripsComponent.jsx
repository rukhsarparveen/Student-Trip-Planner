import React, {Component} from "react";
import SidebarComponent from "../myAccountComponents/SidebarComponent";
import TripListComponent from "./TripListComponent";
import './../css/MyAccount.css';
import './../css/MyTrips.css';
import ChalteHainService from "../api/ChalteHainService";
import AuthenticationService from "../AuthenticationService";

class MyTripsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: []
        };
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        let userEmail = AuthenticationService.getLoggedInEmail();
        ChalteHainService.fetchMyTrips(userEmail).then(
            response => {
                this.setState( {
                            trips: response.data.myTrips
                    });
            }
        );
        
    }

    refresh() {
        let userEmail = AuthenticationService.getLoggedInEmail();
        ChalteHainService.fetchMyTrips(userEmail).then(
            response => {
                this.setState( {
                            trips: response.data.myTrips
                    });
            }
        );
    }

    render() {
        return(
            <div className="page-page">
                    <SidebarComponent/>
                    <TripListComponent trips={this.state.trips} refresh={this.refresh}/>
            </div>
        );
    }

}

export default MyTripsComponent;