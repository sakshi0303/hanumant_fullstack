package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.PropertySource;

//@PropertySource("/static/application.properties")
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext container=SpringApplication.run(DemoApplication.class, args);
		MyApp myapp=container.getBean(MyApp.class);
		System.out.println(myapp);
		System.out.println(myapp.myappname);
		System.out.println(myapp.mynameversion);
		System.out.println(myapp.myappdesc);
		
	}

}
