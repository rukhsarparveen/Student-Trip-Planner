package com.chaltehain.chaltehainbackend.user;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private static User user;
    private int returnVal;

//    static {
//        todos.add(new Todo(++idCounter,"Ipshita","Learn to dance", new Date(), false));
//        todos.add(new Todo(++idCounter,"Ipshita","Learn Java Development", new Date(), false));
//        todos.add(new Todo(++idCounter,"Ipshita","Paint the box", new Date(), false));
//    }


    public User logIn(String username, String password) {
        //if object is already fetched and saved in status, np else fetch
        User user = MysqlConnectivity.fetchUserDetails(username);
        System.out.println(user);
        if(user!=null && password.equals(user.getpwd())){
            return user;
        }
        else {
            return null;
        }
    }

    public String register(User user) {
        return MysqlConnectivity.addUser(user);
    }

    public User fetchUser(String username) {
        return MysqlConnectivity.fetchUserDetails(username);
    }

    public Trips fetchAllTrips() {
        return MysqlConnectivity.fetchTrips();

    }

    public Trips fetchMyTrips(String email) {
        return MysqlConnectivity.fetchStudentTrips(email);
    }

    public Trip fetchTripId(int id) {
        return MysqlConnectivity.fetchTripWithId(id);
    }

    public String addStudentTrip(StudentTrips booking) {
        //String confirmation = "";
        return MysqlConnectivity.addTripToStudent(booking);
        //return confirmation;
    }

    public String cancelStudentTrip(StudentTrips cancellation) {
        //String confirmation = "";
        return MysqlConnectivity.cancelTripForStudent(cancellation);
        //return confirmation;
    }

    public List<User> fetchUsers() {
        return MysqlConnectivity.fetchAllUsers();
    }

    public String addNewTrip(Trip trip) {
        return MysqlConnectivity.addATrip(trip);
    }

    public String updateMobileNumber(long phone, String email) {
        return MysqlConnectivity.updateMob(phone,email);
    }


}
