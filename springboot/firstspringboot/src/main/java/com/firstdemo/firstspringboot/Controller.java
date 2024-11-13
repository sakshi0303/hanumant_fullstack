package com.firstdemo.firstspringboot;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/hi")
    public String hello() {
        return "this is rest api";
    }

    @GetMapping("/hii")
    public ArrayList<Classaswell> hii() {
        ArrayList<Classaswell> list = new ArrayList<>();
        Classaswell v1 = new Classaswell("sakshi", 32, "dellas");
        Classaswell v2 = new Classaswell("swarna", 35, "austin");
        Classaswell v3 = new Classaswell("gaurav", 40, "arlington");
        Classaswell v4 = new Classaswell("renne", 2, "huston");
        Classaswell v5 = new Classaswell("ruchi", 90, "seattle");
        list.add(v1);
        list.add(v2);
        list.add(v3);
        list.add(v4);
        list.add(v5);

        return list;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/hi3")
    // @GetMapping("/hi3")
    public String[] home() {
        String[] str = { "sd", "sds", "sf" };
        // return "my name is ";
        return str;
    }

    @GetMapping("/hii/{name}/{age}")
    public ArrayList<Classaswell> hii(@PathVariable String name, @PathVariable int age) {
        System.out.println("dynamic username is" + name);
        ArrayList<Classaswell> list = new ArrayList<>();
        if (name.equals("sakshi") && age > 30) {
            list.add(new Classaswell("sakshi", 32, "dellas"));
        } else if (name.equals("swarna") && age < 21) {
            list.add(new Classaswell("swarna", 20, "seattle"));
        } else if (name.equals("aditi") && age == 10) {
            list.add(new Classaswell("aditi", 10, "austin"));
        } else if (name.equals("soniya") && age == 25) {
            list.add(new Classaswell("soniya", 25, "town"));
        } else {
            list.add(new Classaswell("riya", 9, "hieght"));
        }
        return list;

    }

}