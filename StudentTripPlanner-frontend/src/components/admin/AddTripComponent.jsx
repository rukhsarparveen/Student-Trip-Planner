import React,{Component} from "react";
import ChalteHainService from "../api/ChalteHainService";

class AddTripComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripId: "",
            tripLocation: "",
            tripDesc: "",
            seats: "",
            price: "",
            advanceAmount:"",
            startDate: "",
            endDate:"",
            duration: "",
            imgUrl: ""
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submit() {
        let trip={
            tripId: this.state.tripId,
            tripLocation: this.state.tripLocation,
            tripDesc: this.state.tripDesc,
            seats: this.state.seats,
            price: this.state.price,
            advanceAmount: this.state.advanceAmount,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            duration: this.state.duration,
            imgUrl: this.state.imgUrl
        };
        ChalteHainService.adminAddTrip(trip)
        .then(
            response => {
                alert("Trip Added Successfully");
                this.props.refresh();
            }
        );
    }

    handleChange(event) {
        //console.log(this.state)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return(
            <div className="page-fullWidthComponent1">
                <table className="profile-infoTable">
                    <tbody>
                        <tr>
                            <td>Trip Id:</td>
                            <td><input type="text" placeholder="Enter Trip ID" className="input-field" name="tripId" value={this.state.tripId} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Trip Location:</td>
                            <td><input type="text" placeholder="Enter Trip Location" className="input-field" name="tripLocation" value={this.state.tripLocation} onChange={this.handleChange} /></td>
                        </tr>
                        {/* <tr>
                            <td>Trip Description:</td>
                            <td><input type="text" placeholder="Enter Trip Description" className="input-field" name="tripDesc" value={this.state.tripDesc} onChange={this.handleChange} /></td>
                        </tr> */}
                        { <tr>
                            <td>Trip Description:</td>
                            <td><input type="text" placeholder="Enter Trip Description" className="input-field" name="tripDesc" value={this.state.tripDesc} onChange={this.handleChange} /></td>
                        </tr> }
                        <tr>
                            <td>Seats:</td>
                            <td><input type="text" placeholder="Enter no. of Seats" className="input-field" name="seats" value={this.state.seats} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td><input type="text" placeholder="Enter Price" className="input-field" name="price" value={this.state.price} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Advance Amount:</td>
                            <td><input type="text" placeholder="Enter Advance Amount" className="input-field" name="advanceAmount" value={this.state.advanceAmount} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Start Date:</td>
                            <td><input type="text" placeholder="YYYY-MM-DD" className="input-field" name="startDate" value={this.state.startDate} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>End Date:</td>
                            <td><input type="text" placeholder="YYYY-MM-DD" className="input-field" name="endDate" value={this.state.endDate} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Duration:</td>
                            <td><input type="text"  placeholder="Duration" className="input-field" name="duration" value={this.state.duration} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Image url:</td>
                            <td><input type="text"  placeholder="Url" className="input-field" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-info" onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default AddTripComponent