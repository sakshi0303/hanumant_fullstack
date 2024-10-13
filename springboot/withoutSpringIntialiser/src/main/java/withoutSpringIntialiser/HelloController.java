package withoutSpringIntialiser;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class HelloController {
	
	@GetMapping("/home")
	public String Home() {
		return "Hello Spring Boot";
	}
	
	@GetMapping
	public String hii() {
		return "hi sakshi";
	}

}
