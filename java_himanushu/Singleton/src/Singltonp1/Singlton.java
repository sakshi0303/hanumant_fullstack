package Singltonp1;

//rule one: 
//	one private constructor
//	one variable  with final so that no other class can make an instance
//	both variable with static so that it can access method with class name
public class Singlton {
	
	private final static Singlton instance=new Singlton(); 
	
	private Singlton() {
		
	}
	
	public static Singlton getinstance() {
		return instance;
		
	}

}
