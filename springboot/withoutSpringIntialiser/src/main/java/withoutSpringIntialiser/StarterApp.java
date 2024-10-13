package withoutSpringIntialiser;

import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//@EnableAutoConfiguration
//@ComponentScan

@SpringBootApplication
public class StarterApp {

	public static void main(String[] args) {
		
//		SpringApplication app=new SpringApplication(StarterApp.class);
//		ConfigurableApplicationContext container = app.run(args); # args values coming from run configuration argunment 
//		ConfigurableApplicationContext container = app.run();
//		Student student =container.getBean(Student.class);
//		System.out.println(student);
//		System.out.println(student.getStudentname());
		
		
//		@Bean
//		public Student createobj() {
//			return new Student();
//		}
		
		
		// since this method is static we can create obj directly caling the classname
		// we can have differnt class insitead of starterApp classs, that class should have @springbootapplication
		ConfigurableApplicationContext container=SpringApplication.run(Main.class, args);
		Student student=container.getBean(Student.class);
		System.out.println(student);
		System.out.println(student.getStudentname());

	}

}
