package com.firstdemo.firstspringboot;

public class Classaswell {

    String name;
    int age;
    String address;

    public Classaswell(String name, int age, String address) {
        this.name=name;
        this.age=age;
        this.address=address;
        //TODO Auto-generated constructor stub
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Classaswell [name=" + name + ", age=" + age + ", address=" + address + "]";
    }

}
