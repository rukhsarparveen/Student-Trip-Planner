import { Button } from "bootstrap";
import React, {Component} from "react";
import "./../css/MyAccount.css";
import "./../css/MyTrips.css";
import ChalteHainService from "../api/ChalteHainService";
import AuthenticationService from "../AuthenticationService";

class TripListComponent extends Component {
    constructor(props) {
        super(props);
        this.cancelSeat = this.cancelSeat.bind(this);
        this.checkDisabled = this.checkDisabled.bind(this);
    }

    cancelSeat(tripid) {
        let userEmail = AuthenticationService.getLoggedInEmail();
        let cancellationDetails = {
                    email: userEmail,
                    tripId: tripid,
                    status: "CANCELLED"
        }
        ChalteHainService.cancelStudentTrips(cancellationDetails).then(
            response => {
                alert("Trip Cancelled!");
                this.props.refresh();
            }
        );
    }

    checkDisabled(tripStatus) {
        if(tripStatus=="CANCELLED") {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return(
            <div className="page-fullWidthComponent1" style={{height:"100vh"}}>
                <div className="trips">
                <div className="infoLabel">My Trips</div>
                    {this.props.trips.map(trip => (
                        <div className="trip">
                            <div className="my-trip-label">
                                <span className="Text-Text">{trip.tripLocation}</span>
                            </div>
                            <div className="trip-id-label">
                            <div className="trip-status">{trip.tripStatus}</div>
                            <p className="trip-date">{trip.startDate} - {trip.endDate}</p>
                            {this.checkDisabled(trip.tripStatus) && <div className="trip-book-btn"><button type="button" className="btn btn-warning" onClick={() => this.cancelSeat(trip.tripId)}>Cancel Booking</button></div>}
                            {/* <div className="trip-description">{trip.tripDesc}</div> */}
                            <div className="trip-advance">Package - Rs.{trip.price}</div>
                            <div className="trip-advance">Advance Paid - Rs.{trip.advanceAmount}</div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TripListComponent;