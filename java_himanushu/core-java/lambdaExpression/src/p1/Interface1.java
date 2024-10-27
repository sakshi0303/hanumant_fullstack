package p1;

@FunctionalInterface
public interface Interface1 {

	public abstract void m1(int x,int y);
//	public abstract void m2(int y); lambda expression only need one abstract method in inter interface knowsn as functional interface
	// for more than one abstreact method in interface we can use anonymous function
	public static String m2(String name) {
		return name;
	}
	
	public static void main(String args[]) {
		
		//lambda-expession
		
		// factory method: the process of constructing method by hiding object creation method
//		Interface1 obj= (x)->{
//			System.out.println(2*x);
//			
//		};
//		obj.m1(10);
		
		Interface1 obj=(x,y)-> System.out.println(2*x*y);
		
		obj.m1(3, 1);
		
	}
}


