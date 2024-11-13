package subpakage;

import org.springframework.stereotype.Component;

@Component
public class A {
    A() {
        System.out.println(
                "-------------------------------------this is also outside package cllas--------------------------");
    }

}
