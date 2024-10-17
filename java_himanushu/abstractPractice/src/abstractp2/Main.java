package abstractp2;

import abstractP1.AbstractClass;


public class Main extends AbstractClass{
	
	public void  abstractmethod1(int x){
		System.out.println(x);
		
	};
	

	public void concretemethod2(String name) {
		System.out.println(name);
	}
	
	

	public static void main(String[] args) {
		
		//AbstractClass obj1=new AbstractClass();## error cannot instantiate abstract class
		
		Main obj=new Main();
		obj.abstractmethod1(2);
		obj.concretemethod2("sakshi");
		// TODO Auto-generated method stub

	}

}
