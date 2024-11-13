package com.firstdemo.firstspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
//autocongiguration
// @EnableAutoConfiguration

@ComponentScans({ @ComponentScan("com.firstdemo.firstspringboot"), @ComponentScan("newpackage"),
		@ComponentScan("subpakage") })
// @ComponentScan({ "com.firstdemo.firstspringboot", "subpakage", "newpackage"
// })
@SpringBootApplication
public class FirstspringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstspringbootApplication.class, args);
	}

}
