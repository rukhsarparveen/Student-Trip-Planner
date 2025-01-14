package com.chaltehain.chaltehainbackend.user;

public class LoginParams {
    private String username;
    private String password;

    public LoginParams(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    public LoginParams() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
