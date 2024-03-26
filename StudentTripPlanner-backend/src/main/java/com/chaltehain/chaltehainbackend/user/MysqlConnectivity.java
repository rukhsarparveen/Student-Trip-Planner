package com.chaltehain.chaltehainbackend.user;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

class MysqlConnectivity {

    private static Connection conn = null;

    private static String mysqlUser;

    private static String mysqlPassword;
    private static String mysqlDatabase;

    public static void getConnectionDetails() {
        try {
            Properties prop = new Properties();
            System.out.println(System.getProperty("user.dir"));
            FileInputStream ip = new FileInputStream(System.getProperty("user.dir")+"/src/main/resources/config.properties");
            prop.load(ip);

            mysqlUser = prop.getProperty("mysqluser");
            mysqlPassword = prop.getProperty("mysqlpassword");
            mysqlDatabase = prop.getProperty("mysqldatabase");

            System.out.println(mysqlDatabase+" "+mysqlUser+" "+mysqlPassword);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public static String addUser(User user) {
        String response="added";
        System.out.println(user);
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            String query1 = "insert into Users values('"+user.getEmail()+"','"+user.getFullName()+"','"+user.getpwd()+"','"+user.getPhoneNo()+"','"+user.getTripPoints()+"');";
            String query0 = "select * from Users where email='"+user.getEmail()+"';";
            System.out.println(query1+"\n"+query0);
            ResultSet rs = stmt.executeQuery(query0);
            if(rs.next()==false) {
                stmt.executeUpdate(query1);
            }
            else {
                response = "exists";
            }


        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return response;
    }

    public static User fetchUserDetails(String username) {
        getConnectionDetails();
        User user = null;
        try {
            String connectionURL = "jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword;
            conn = DriverManager.getConnection(connectionURL);
            Statement stmt=conn.createStatement();
            ResultSet rs=stmt.executeQuery("select * from Users where email='"+username+"';");
            rs.next();
//            System.out.println(rs);
            if(rs != null) {
                user = new User(rs.getString(1), rs.getString(2), rs.getString(3), rs.getLong(4), rs.getInt(5));
            }
            //pwdVal = rs.getString("pwd");

            // Do something with the Connection
        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        //conn.close();
        return user;
    }

    public static Trips fetchTrips() {
        Trips tripList = new Trips();
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            ResultSet rs=stmt.executeQuery("select * from Trips;");
            //rs.next();
            while(rs.next()) {
                Trip trip = new Trip(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getInt(4),rs.getInt(5),rs.getInt(6),rs.getDate(7),rs.getDate(8),rs.getInt(9),rs.getString(10));
                tripList.addTrip(trip);
            }
            //tripList = (Trips)rs;
            //pwdVal = rs.getString("pwd");

            // Do something with the Connection
        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return tripList;
    }

    public static Trips fetchStudentTrips(String email) {
        Trips tripList = new Trips();
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            ResultSet rs=stmt.executeQuery("select * from Trips A join StudentTrips B on A.tripId=B.tripId where email='"+email+"';");
            //rs.next();
            while(rs.next()) {
                MyTrip myTrip = new MyTrip(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getInt(4),rs.getInt(5),rs.getInt(6),rs.getDate(7),rs.getDate(8),rs.getString(9),rs.getString(13));
                tripList.addMyTrip(myTrip);
            }
            //tripList = (Trips)rs;
            //pwdVal = rs.getString("pwd");

            // Do something with the Connection
        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return tripList;
    }

    public static Trip fetchTripWithId(int id) {
        Trip trip = null;
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            ResultSet rs=stmt.executeQuery("select * from Trips where tripId="+id+";");
            rs.next();
            if(rs != null) {
                trip = new Trip(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getInt(4),rs.getInt(5),rs.getInt(6),rs.getDate(7),rs.getDate(8),rs.getInt(9),rs.getString(10));
            }
        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return trip;
    }

    public static String addTripToStudent(StudentTrips booking) {
        String confirmation = "";
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            stmt.executeUpdate("Insert into StudentTrips values('"+booking.getEmail()+"',"+booking.getTripId()+",'"+booking.getStatus()+"');");
            stmt.executeUpdate("Update Trips set seats=seats-1 where tripId="+booking.getTripId()+";");
            confirmation="CONFIRMED";

        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return confirmation;
    }

    public static String cancelTripForStudent(StudentTrips cancellation) {
        String confirmation = "";
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            String query = "Update StudentTrips set tripStatus='"+cancellation.getStatus()+"' where email='"+cancellation.getEmail()+"' and tripId="+cancellation.getTripId()+";";
            System.out.println(query);
            stmt.executeUpdate(query);
            stmt.executeUpdate("Update Trips set seats=seats+1 where tripId="+cancellation.getTripId()+";");
            ResultSet rs=stmt.executeQuery("select * from Trips where tripId="+cancellation.getTripId()+";");
            rs.next();
            int tripPoints  = (int)(0.8 * rs.getInt(6));
            stmt.executeUpdate("Update Users set tripPoints=tripPoints+"+tripPoints+" where email='"+cancellation.getEmail()+"';");
            confirmation="CANCELLED";

        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println(ex.getStackTrace());
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return confirmation;
    }

    public static List<User> fetchAllUsers() {
        List<User> users= new ArrayList<>();
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            ResultSet rs=stmt.executeQuery("Select * from Users;");
            while(rs.next()) {
                User u1 = new User(rs.getString(1),rs.getString(2),null,rs.getLong(4),rs.getInt(5));
                users.add(u1);
            }
        } catch (
                SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return users;
    }

    public static String addATrip(Trip trip) {
        String confirmation = "";
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            System.out.println("Insert into Trips values("+trip.getTripId()+",'"+trip.getTripLocation()+"','"+trip.getTripDesc()+"',"+trip.getSeats()+","+trip.getPrice()+","+trip.getAdvanceAmount()+",'"+trip.getStartDate()+"','"+trip.getEndDate()+"','"+trip.getDuration()+"','"+trip.getImgUrl()+"');");
            stmt.executeUpdate("Insert into Trips values("+trip.getTripId()+",'"+trip.getTripLocation()+"','"+trip.getTripDesc()+"',"+trip.getSeats()+","+trip.getPrice()+","+trip.getAdvanceAmount()+",'"+trip.getStartDate()+"','"+trip.getEndDate()+"','"+trip.getDuration()+"','"+trip.getImgUrl()+"');");
            confirmation="CONFIRMED";

        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return confirmation;
    }

    public static String updateMob(long phone, String email) {
        String confirmation = "";
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/"+mysqlDatabase+"?user="+mysqlUser+"&password="+mysqlPassword);
            Statement stmt=conn.createStatement();
            stmt.executeUpdate("Update Users set phoneNo="+phone+" where email='"+email+"';");
            confirmation="CONFIRMED";

        } catch (
                SQLException ex) {
            // handle any errors
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return confirmation;
    }
}