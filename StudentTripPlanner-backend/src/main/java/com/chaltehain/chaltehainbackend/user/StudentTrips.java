package com.chaltehain.chaltehainbackend.user;

public class StudentTrips {
    private String email;
    private int tripId;
    private String status;

    public StudentTrips(String email, int tripId, String status) {
        this.email = email;
        this.tripId = tripId;
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTripId() {
        return tripId;
    }

    public void setTripId(int tripId) {
        this.tripId = tripId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
