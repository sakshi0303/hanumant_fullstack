package withoutSpringIntialiser;

import org.springframework.stereotype.Component;

@Component
public class Student {
//	#generate constructor using field
	public String studentname="sakshi";
	public Student(String studentname) {
		super();
		this.studentname = studentname;
	}


	// generate constructor using supper class
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}



	public String getStudentname() {
		return studentname;
	}

	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}

	

	
	

}
