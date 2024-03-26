import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";

class DropdownMenuComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const user = "Hi "+ this.props.username;
        return(
            <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                    className="NavDropdown"
                    // id="nav-dropdown-dark-example"
                    title={user}                   // menuVariant="dark"
                    >
                    <NavDropdown.Item>
                        <Link className="nav-link" to="/myaccount">My Account</Link></NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className="nav-link" to="/mytrips">My Trips</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className="nav-link" to="/mywallet">My Wallet</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        <Link className="nav-link" to="/login"  onClick={AuthenticationService.logout}>Logout</Link>
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>

        );
    }

}

export default DropdownMenuComponent;