package innerclassp1;

public class Parent {
	
	public static int a=1;
	public String b="a";
	
	public void m1() {
		System.out.println(a);
		System.out.println(b);
	}
	
	public static class Subclass{
		
		public static int age=0;
		public  String name="innerclass concepts";
		
		public static void m2() {
			System.out.println(age);
			System.out.println(a);
			//System.out.println(b);//error not static method cannot be access inside the static method of the inner class
		}
		
		public void m3() {
			System.out.println("non static method inside subclass");
			System.out.println(a);
//			System.out.println(b); #error: not static mehi
			System.out.println(age);
			System.out.println(name);
			
			
		}
		
	}
	
	public static void main(String args[]) {
		Parent obj =new Parent();
		obj.m1();
		Parent.Subclass objsubclas=new Parent.Subclass();
		objsubclas.m
	}
	

}
