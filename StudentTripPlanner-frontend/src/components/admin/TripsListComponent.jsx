import React,{Component} from "react";
import "../css/MyAccount.css";
import ChalteHainService from "../api/ChalteHainService";

class TripsListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
    }

    componentDidMount() {
        ChalteHainService.fetchTrips().then(
            response => {
                this.setState( {
                            trips: response.data.trips
                    });
            }
        );
    }
    
    render() {
        return(
            <div className="page-fullWidthComponent1">
                {/* <div className="trips"> */}
                <table className="profile-infoTable">
                    <thead>
                        <tr>
                            <th>Trip Id</th>
                            <th>Trip Location</th>
                            <th>Trip Description</th>
                            <th>Seats</th>
                            <th>Package</th>
                            <th>Advance Amount</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trips.map(trip => (
                            <tr>
                                <td>{trip.tripId}</td>
                                <td>{trip.tripLocation}</td>
                                <td>{trip.tripDesc}</td>
                                <td>{trip.seats}</td>
                                <td>{trip.price}</td>
                                <td>{trip.advanceAmount}</td>
                                <td>{trip.startDate}</td>
                                <td>{trip.endDate}</td>
                                <td>{trip.duration}</td>
                            </tr>
                        ))}      
                    </tbody>
                </table>
                {/* </div> */}
            </div>
        );
    }
}

export default TripsListComponent