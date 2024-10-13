package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyApp {
	
//	@Value("myname")
	@Value("${myapp.name}")
	public String myappname;
	
	@Value("${myapp.version}")
	public float mynameversion;
	
	@Value("${myapp.description}")
	public String myappdesc;
	
	
	public MyApp(String myappname, float mynameversion, String myappdesc) {
		super();
		this.myappname = myappname;
		this.mynameversion = mynameversion;
		this.myappdesc = myappdesc;
	}
	public MyApp() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMyappname() {
		return myappname;
	}
	public void setMyappname(String myappname) {
		this.myappname = myappname;
	}
	public float getMynameversion() {
		return mynameversion;
	}
	public void setMynameversion(float mynameversion) {
		this.mynameversion = mynameversion;
	}
	public String getMyappdesc() {
		return myappdesc;
	}
	public void setMyappdesc(String myappdesc) {
		this.myappdesc = myappdesc;
	}
	
	

}
