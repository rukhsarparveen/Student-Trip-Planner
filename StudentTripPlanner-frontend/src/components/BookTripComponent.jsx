import React, {Component} from "react";
import ChalteHainService from "./api/ChalteHainService";
import AuthenticationService from "./AuthenticationService";
import "./css/BookTrip.css";

class BookTripComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {}
        }
        this.handlePayment = this.handlePayment.bind(this);
    }

    componentDidMount() {
        ChalteHainService.fetchTripWithId(this.props.params.tripId).then(
            response => {
                this.setState( {
                            trip: response.data
                    });
            }
        );
        
    }

    handlePayment(advanceAmount,tripId) {
        const options = {
            key: "rzp_test_LlBcxCOw4moqR3",
            key_secret:"5jlEMrFwxdJgTvs0GBIHFhGv",
            amount: advanceAmount*100,
            currency:"INR",
            name:"ChalteHain-TripPayment",
            description:"Trip Advanced Payment",
            handler: function(response){
                //write code to add data to studentsTrips table
                let userEmail = AuthenticationService.getLoggedInEmail();
                let bookingDetails = {
                    email: userEmail,
                    tripId: tripId,
                    status: "BOOKED"
                }
                ChalteHainService.addStudentTrips(bookingDetails).then(
                    response => {
                        alert("Trip Booked Successfully!");
                    }
                );
              
            },
            theme: {
              color:"#3399cc"
            },
            
          };
          let pay = new window.Razorpay(options);
          pay.open();        
    }

    render() {
        return(
            <div className="trip-booking">
                <div>
                    <span><h2 className="trip-heading">{this.state.trip.tripLocation}</h2></span>
                </div>
                <img className="trip-image" src={this.state.trip.imgUrl}/>
                <div className="trip-details">
                    <div className="trip-desc">{this.state.trip.tripDesc}</div>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Duration:- </b></td>
                                <td>{this.state.trip.duration}</td>
                            </tr>
                            <tr>
                                <td><b>Dates:- </b></td>
                                <td>{this.state.trip.startDate} - {this.state.trip.endDate}</td>
                            </tr>
                            <tr>
                                <td><b>Trip Package:- </b></td>
                                <td>{this.state.trip.price}</td>
                            </tr>
                            <tr>
                                <td><b>Advance Amount to be paid:- </b></td>
                                <td>{this.state.trip.advanceAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                <div><button type="button" className="btn btn-info" onClick={() => this.handlePayment(this.state.trip.advanceAmount, this.state.trip.tripId)}>Proceed to payment</button></div>
            </div>
            </div>
        );
    }
}

export default BookTripComponent;