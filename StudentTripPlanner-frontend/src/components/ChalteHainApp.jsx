import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import withNavigation from './WithNavigation.jsx';
import withParams from "./withParams.jsx";
import LoginComponent from "./LoginComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import HomepageComponent from "./HomepageComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import RegisterComponent from "./RegisterComponent.jsx";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import AuthenticatedLogin from "./AuthenticatedLogin.jsx";
import MyAccountComponent from "./myAccountComponents/MyAccountComponent";
import MyTripsComponent from "./myTripsComponents/MyTripsComponent.jsx";
import MyWalletComponent from "./myWalletComponent/MyWalletComponent.jsx";
import AllTripsComponent from "./AllTripsComponent.jsx";
import BookTripComponent from "./BookTripComponent.jsx";
import AdminLoginComponent from "./admin/AdminLoginComponent.jsx";
import AdminHomePageComponent from "./admin/AdminHomePageComponent.jsx";
import AdminAuthentication from "./AdminAunthetication.jsx";

class ChalteHainApp extends Component {

    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const HomepageComponentWithNavigation = withNavigation(HomepageComponent);
        const RegisterComponentWithNavigation = withNavigation(RegisterComponent);
        const MyAccountComponentWithNavigation = withNavigation(MyAccountComponent);
        const MyTripsComponentWithNavigation = withNavigation(MyTripsComponent);
        const MyWalletComponentWithNavigation = withNavigation(MyWalletComponent);
        const AllTripsComponentWithNavigation = withNavigation(AllTripsComponent);
        const BookTripComponentWithParams = withParams(BookTripComponent);
        const AdminLoginComponentWithNavigation = withNavigation(AdminLoginComponent);
        const AdminHomePageComponentWithNavigation = withNavigation(AdminHomePageComponent);
        return (
            <div className="todoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<AuthenticatedLogin><LoginComponentWithNavigation /></AuthenticatedLogin>} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/adminlogin" element={<AdminLoginComponentWithNavigation/>}/>
                        <Route path="/register" element={<RegisterComponentWithNavigation/>} />
                        <Route path="/adminhome" element={
                            <AdminAuthentication>
                                <AdminHomePageComponentWithNavigation/>
                            </AdminAuthentication>} />
                        <Route path="/homepage" element={
                            <AuthenticatedRoute>
                                <HomepageComponentWithNavigation/>
                            </AuthenticatedRoute>} />
                        <Route path="/myaccount" element={
                            <AuthenticatedRoute>
                                <MyAccountComponentWithNavigation/>
                            </AuthenticatedRoute>} />
                        <Route path="/mytrips" element={
                            <AuthenticatedRoute>
                                <MyTripsComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/mywallet" element={
                            <AuthenticatedRoute>
                                <MyWalletComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/alltrips" element={
                            <AuthenticatedRoute>
                                <AllTripsComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/booktrip/:tripId" element={
                            <AuthenticatedRoute>
                                <BookTripComponentWithParams/>
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        {/* <Route path="/logout" element={<LogoutComponent/>} /> */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default ChalteHainApp