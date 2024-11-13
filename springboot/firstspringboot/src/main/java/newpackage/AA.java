package newpackage;

import org.springframework.stereotype.Component;

@Component
public class AA {
    AA() {
        System.out.println("this is outside package class");
    }

}
