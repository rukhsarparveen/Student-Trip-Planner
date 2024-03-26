import React,{Component} from "react";
// import { BsWallet2 } from "react-icons/bs";

class SidebarComponent extends Component {
    render() {
        return(
            <div className="sidebar-sidebar" style={{height:"100vh"}}>
                            
                        <div className="segment-segment">
                            <div className="segment-heading"></div>
                            <a href="/myaccount" className="segment-link">My Account</a>
                        </div>
                        <div className="segment-segment">
                            <div className="segment-heading"></div>
                            <a href="/mytrips" className="segment-link">My Trips</a>
                        </div>
                        <div className="segment-segment">
                            <div className="segment-heading" ></div>
                            
                            <a href="/mywallet" className="segment-activeLink segment-link">My wallet</a>
                            
                        </div>
            </div>
        );
    }
}

export default SidebarComponent;