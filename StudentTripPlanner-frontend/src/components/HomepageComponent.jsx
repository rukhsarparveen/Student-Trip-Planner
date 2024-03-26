import React, {Component} from "react";
import {Link} from 'react-router-dom';
import HomepageCarouselComponent from "./HomepageCarouselComponent";

class HomepageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage : '',
            errorMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    render() {
        return (
            <>
            <div><h3 style={{"fontFamily": "Ink Free"}}>Let no plan ever get Cancelled! Chalo, Chalte hain!</h3></div>
                <HomepageCarouselComponent/>
            </>
        )
        }

    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage: response.data.message});
    }

    handleError(error) {

        let errorMessage = '';
        if(error.message) {
            errorMessage += error.message;
        }

        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        
        this.setState ({errorMessage : errorMessage});
        //console.log(error.response.data.message);
    }

}

export default HomepageComponent