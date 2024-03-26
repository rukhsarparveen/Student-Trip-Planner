package com.chaltehain.chaltehainbackend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserResource {

    @Autowired
    private UserService userService;

    @PostMapping("/userlogin")
    public User userLogin(@RequestBody LoginParams loginParams) {
        return userService.logIn(loginParams.getUsername(),loginParams.getPassword());
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return userService.register(user);
    }

    @GetMapping("/fetchuser/{username}")
    public User fetchUser(@PathVariable String username) {
        return userService.fetchUser(username);
    }

    @GetMapping("/trips")
    public Trips getTrips() {
        return userService.fetchAllTrips();
    }

    @GetMapping("/fetchtrips/{email}")
    public Trips fetchStudentTripList(@PathVariable String email) {
        return userService.fetchMyTrips(email);
    }

    @GetMapping("/fetchtrip/{id}")
    public Trip fetchTripWithId(@PathVariable int id) {
        return userService.fetchTripId(id);
    }

    @PostMapping("/addtrip")
    public String addStudentTrip(@RequestBody StudentTrips booking) {
        return userService.addStudentTrip(booking);
    }

    @PostMapping("/canceltrip")
    public String cancelStudentTrip(@RequestBody StudentTrips cancellation) {
        return userService.cancelStudentTrip(cancellation);
    }

    @GetMapping("/fetchallusers")
    public List<User> fetchAllUser() {
        return userService.fetchUsers();
    }

    @PostMapping("/adminaddtrip")
    public String addTrip(@RequestBody Trip trip) {
        return userService.addNewTrip(trip);
    }

    @PutMapping("/update/{phoneno}/{email}")
    public String UpdateMobile(@PathVariable long phoneno, @PathVariable String email) {
        return userService.updateMobileNumber(phoneno,email);
    }

}
