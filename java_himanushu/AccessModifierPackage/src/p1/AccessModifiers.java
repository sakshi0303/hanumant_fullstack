package p1;

//> public -> accessed throughout the project by creating obj
//> private -> access only withon a class
//> protected -> access within the package and outside the package by extend keyword
//> default -> access within the package by creating object
// import is to make the classes available to the other classes
// we can call import with packagename.*; for all 
// pacakagename.classname for specific //import p1.AccessModifiers;
// we can sysout only inside methods

public class AccessModifiers {
	
	public String name="sakshi"; //it can be accessed in whole project
	
	private String desciption="private modifier"; // caccess with in the class only
	
	protected String  title="protected moditifer"; // access within the access and outside the package using extend keyowrd, 
	
	String def="default modifier";// only with the package
	
 
}
