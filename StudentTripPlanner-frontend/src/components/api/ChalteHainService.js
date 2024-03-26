import axios from "axios";

const API_URL = 'http://localhost:8080'

class ChalteHainService {

    userLogin(username,password) { 
        let loginParams = {
            username: username,
            password: password
        }       
        return axios.post(`${API_URL}/userlogin`, loginParams);
    }

    registerUser(user) {
        return axios.post(`${API_URL}/register`, user);
    }

    fetchUserDetails(user) {
        return axios.get(`${API_URL}/fetchuser/${user}`);
    }

    fetchTrips() {
        return axios.get(`${API_URL}/trips`);
    }

    fetchMyTrips(user) {
            return axios.get(`${API_URL}/fetchtrips/${user}`);
    }

    fetchTripWithId(id) {
        return axios.get(`${API_URL}/fetchtrip/${id}`);
    }

    addStudentTrips(bookingDetails) {
        return axios.post(`${API_URL}/addtrip`, bookingDetails);
    }

    cancelStudentTrips(cancellationDetails) {
        return axios.post(`${API_URL}/canceltrip`, cancellationDetails);
    }

    adminFetchUsersList() {
        return axios.get(`${API_URL}/fetchallusers`);
    }

    adminAddTrip(trip) {
        return axios.post(`${API_URL}/adminaddtrip`,trip);
    }

    updateMobile(phoneno,email) {
        return axios.put(`${API_URL}/update/${phoneno}/${email}`);
    }

}

export default new ChalteHainService();