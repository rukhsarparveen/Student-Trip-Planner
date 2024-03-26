class AuthenticationService {
    registerSuccessfulLogin(username,email) {
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('email',email);
    }

    registerAdmin() {
        sessionStorage.setItem('admin',"admin");
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('email');
    }

    adminLogout() {
        sessionStorage.removeItem('admin');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");
        // console.log(user);
        if(user===null) return false;
        return true;
    }

    isAdmin() {
        let admin = sessionStorage.getItem("admin");
        if(admin===null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return "";
        return user;
    }

    getLoggedInEmail() {
        let email = sessionStorage.getItem('email')
        if(email===null) return "";
        return email;
    }

    


}
export default new AuthenticationService();