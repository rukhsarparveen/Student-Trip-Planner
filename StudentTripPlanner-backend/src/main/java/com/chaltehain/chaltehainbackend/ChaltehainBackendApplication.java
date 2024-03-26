package com.chaltehain.chaltehainbackend;

import com.chaltehain.chaltehainbackend.user.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
public class ChaltehainBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(ChaltehainBackendApplication.class, args);
	}
}
