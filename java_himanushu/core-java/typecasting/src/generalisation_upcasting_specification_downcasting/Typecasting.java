package generalisation_upcasting_specification_downcasting;

public class Typecasting {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		double b=3.12;
		//#--> loosing the data: 3 specilisation narrowing the scope
		int a=(int) b; 
		
		System.out.println(a);
		
		
		A objA=new A();
		objA.showA();
		
		B objB=new B();
		objB.showB();
		objB.showA(); ///extends
	
		
		// B is the child class extending A
		// A is parent class A does not know about B
		
		A obj=(A) new B(); // dynamic method dispatch --> upcasting A is parent and B is child happends implicity
		//obj.showB --> error not allowed object of B but reference of A, A does not about B atall
		
		B obj_=(B) obj; //downcaating
		obj_.showB();

	}

}
