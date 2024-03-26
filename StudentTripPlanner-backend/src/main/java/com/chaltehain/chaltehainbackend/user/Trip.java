package com.chaltehain.chaltehainbackend.user;

import java.sql.Date;

public class Trip {
    private int tripId;
    private String tripLocation;
    private String tripDesc;
    private int seats;
    private int price;
    private int advanceAmount;
    private Date startDate;
    private Date endDate;
    private int duration;

    private String imgUrl;

    public Trip(int tripId, String tripLocation, String tripDesc, int seats, int price, int advanceAmount, Date startDate, Date endDate, int duration,String imgUrl) {
        this.tripId = tripId;
        this.tripLocation = tripLocation;
        this.tripDesc = tripDesc;
        this.seats = seats;
        this.price = price;
        this.advanceAmount = advanceAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
        this.imgUrl = imgUrl;
    }

    public int getTripId() {
        return tripId;
    }

    public void setTripId(int tripId) {
        this.tripId = tripId;
    }

    public String getTripLocation() {
        return tripLocation;
    }

    public void setTripLocation(String tripLocation) {
        this.tripLocation = tripLocation;
    }

    public String getTripDesc() {
        return tripDesc;
    }

    public void setTripDesc(String tripDesc) {
        this.tripDesc = tripDesc;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getAdvanceAmount() {
        return advanceAmount;
    }

    public void setAdvanceAmount(int advanceAmount) {
        this.advanceAmount = advanceAmount;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    @Override
    public String toString() {
        return "Trip:-" +
                "Id=" + tripId +
                ", Location='" + tripLocation + '\'' +
                ", Description='" + tripDesc + '\'' +
                ", seats=" + seats +
                ", price=" + price +
                ", advanceAmount=" + advanceAmount +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", duration='" + duration + '\'' +
                ", Image URL='" + imgUrl + '\'' +
                '}';
    }

}