package com.chaltehain.chaltehainbackend.user;


import java.util.ArrayList;

public class Trips {
    ArrayList<Trip> trips;
    ArrayList<MyTrip> myTrips;

    public Trips() {
        trips = new ArrayList<>();
        myTrips = new ArrayList<>();
    }

    public ArrayList<Trip> getTrips() {
        return trips;
    }

    public ArrayList<MyTrip> getMyTrips() {
        return myTrips;
    }

    public void setMyTrips(ArrayList<MyTrip> myTrips) {
        this.myTrips = myTrips;
    }

    public void setTrips(ArrayList<Trip> trips) {
        this.trips = trips;
    }

    public void addTrip(Trip trip) {
        this.trips.add(trip);
    }

    public void addMyTrip(MyTrip trip) {
        this.myTrips.add(trip);
    }
}
