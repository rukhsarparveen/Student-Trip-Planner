import React,{Component} from "react";
import ChalteHainService from "./api/ChalteHainService";
import "./css/AllTrips.css";


class AllTripsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
        this.bookSeat = this.bookSeat.bind(this);
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

    bookSeat(tripId) {

        console.log(tripId);
        this.props.navigate(`/booktrip/${tripId}`);
    }

    render() {
        return(
            <div className="page-fullWidthComponent">
                <div className="trips">
                <div className="infoLabel">All Trips</div>
                    {this.state.trips.map(trip => (
                        <div className="trip">
                            <div className="trip-label">
                                <span className="Text-Text"><b>{trip.tripLocation}</b></span>
                            </div>
                            <div className="trip-desc">{trip.tripDesc}</div>
                            <div className="trip-book-btn"><button type="button" className="btn btn-info" onClick={() => this.bookSeat(trip.tripId)}>Book a Seat</button></div>
                            <table className="all-trip-table">
                                <tbody>
                                    <tr>
                                        <td><b>Duration:- </b></td>
                                        <td>{trip.duration}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Dates:- </b></td>
                                        <td>{trip.startDate} - {trip.endDate}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Trip Package:- </b></td>
                                        <td>Rs.{trip.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                           
 
                            
                    </div>
                    ))}
                </div>
            </div>
        );
    }

}

export default AllTripsComponent;