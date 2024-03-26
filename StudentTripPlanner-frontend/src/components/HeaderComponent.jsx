import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import DropdownMenuComponent from "./DropdownMenuComponent";
import AuthenticationService from "./AuthenticationService";


class HeaderComponent extends Component {
    render () {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // const isUserLoggedIn = true;
        const username = AuthenticationService.getLoggedInUserName();
        //console.log(isUserLoggedIn);

        const isAdmin = AuthenticationService.isAdmin();

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark" variant="dark" bg="dark">
                    <div><a hred="http://localhost:3000" className="navbar-brand" style={{"fontFamily": "Ink Free"}}>Chalte Hain!</a></div>
                    <ul className="navbar-nav navbar-collapse justify-content-end" id="outer-container">
                        {isUserLoggedIn && !isAdmin && <li><Link className="nav-link" to="/homepage">Home</Link></li>}
                        {isUserLoggedIn && !isAdmin && <li><Link className="nav-link" to="/alltrips">All Trips</Link></li>}
                        {!isUserLoggedIn && !isAdmin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {/* {isUserLoggedIn && <li><Link className="nav-link" to="/logout">Logout</Link></li>} */}
                        {/* {isUserLoggedIn && <li><HamburgerMenuComponent/></li>} */}
                        {isUserLoggedIn && !isAdmin && <li><DropdownMenuComponent username={username}/></li>}
                        {!isUserLoggedIn && isAdmin && <li><Link className="nav-link" to="/login" onClick={AuthenticationService.adminLogout}>Log Out</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent