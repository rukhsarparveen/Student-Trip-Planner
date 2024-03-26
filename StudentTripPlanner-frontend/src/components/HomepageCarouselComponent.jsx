import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import ChalteHainService from "./api/ChalteHainService";

class HomepageCarouselComponent extends Component {

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
        return (
            <Carousel>
                {this.state.trips.map(trip => (
                    <Carousel.Item>
                    <Link to="/alltrips">
                        <img className="d-block w-100" src={trip.imgUrl} height="50%"/>
                    </Link>
                    <Carousel.Caption>
                        <h3>{trip.tripLocation}</h3>
                        <p>{trip.startDate} - {trip.endDate}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                ))

                }
            </Carousel>
        )
    }
}

export default HomepageCarouselComponent