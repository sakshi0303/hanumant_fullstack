package sealedclass;

//sealed class
//> We can add sealed keyword infront of the class
//> in sealed class we cannot extends the class without the permission of the sealed class
//> class A permits B,C,d
//> Class B extends A
//> we create obj of the child class
//> sealed class without abstract class
//> absrtact class with sealed classs
//> child class can only be final , sealed and non-sealed
//> sealed class have a more control of the classs

public abstract sealed class  sealedwithabstract permits Circle,Rectangle {
	public abstract double area();
	
	public void displayarea() {
		System.out.println("the area ="+area());
	}

}
