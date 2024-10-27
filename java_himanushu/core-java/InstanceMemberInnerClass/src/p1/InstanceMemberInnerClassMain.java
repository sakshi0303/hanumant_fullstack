package p1;

public class InstanceMemberInnerClassMain {
	
	public static int outer_x=20;
	public int outer_y=200;
	
	public static void outer1() {
		System.out.println(outer_x);
		
	}
	
	public void outerm2() {
		System.out.println(outer_x);
		System.out.println(outer_y);
	}
	
	
	public class InnerClass{
		
		public static int x=10;
		public int y=100;
		
		public static void innerm1() {
			System.out.println(x);
			
		}
		
		public void innerm2() {
			System.out.println(x);
			System.out.println(y);
		}
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		InstanceMemberInnerClassMain objoutter=new InstanceMemberInnerClassMain();
		InstanceMemberInnerClassMain.InnerClass objinner=objoutter.new InnerClass();
		
//		//rules:::
//			1) objoutter will have access to only outer class component
//			2) objinner  will have access to only inner class component
//			3) static members of innerclass can access to static memeber of the outer class
//			4) non static memeber of the innerclass can access to non static memeber of the  inner class


	}

}
