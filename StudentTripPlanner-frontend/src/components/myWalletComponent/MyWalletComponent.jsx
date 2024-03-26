import React,{Component} from "react";
import SidebarComponent from "../myAccountComponents/SidebarComponent.jsx";
import "../css/MyAccount.css";
import "../css/MyWallet.css";
import AuthenticationService from "../AuthenticationService.js";
import ChalteHainService from "../api/ChalteHainService.js";

class MyWalletComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripPoints: 0
        }
        
    }
    componentDidMount() {
        let email = AuthenticationService.getLoggedInEmail();
        console.log(email); 
        ChalteHainService.fetchUserDetails(email).then(
            response => {
                //console.log(response.data);
                this.setState( {
                            tripPoints: response.data.tripPoints
                    });
            }
        );
        
    }
    render() {
        return(
            <div className="page-page">
                <SidebarComponent/>
                <div className="page-fullWidthComponent1" style={{height:"100vh"}}>
                    <div className="trip-point-component">
                        <div class="points-label"> Total Available Trip-Points </div>
                        <div class="points-pointsCount">{this.state.tripPoints}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyWalletComponent