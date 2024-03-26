package com.chaltehain.chaltehainbackend.user;

public class User {
    private String email;
    private String fullName;
    private String pwd;
    private long phoneNo;
    private int tripPoints;

    public User() {
    }

    public User(String email, String fullName, String pwd, long phoneNo, int tripPoints) {
        this.email = email;
        this.fullName = fullName;
        this.pwd = pwd;
        this.phoneNo = phoneNo;
        this.tripPoints = tripPoints;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getpwd() {
        return pwd;
    }

    public void setpwd(String pwd) {
        this.pwd = pwd;
    }

    public long getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public int getTripPoints() {
        return tripPoints;
    }

    public void setTripPoints(int tripPoints) {
        this.tripPoints = tripPoints;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", fullName='" + fullName + '\'' +
                ", pwd='" + pwd + '\'' +
                ", phoneNo=" + phoneNo +
                ", tripPoints=" + tripPoints +
                '}';
    }
}
