package localMemberInnerClass;

public class ClassInsideMethod {
	int x=10;
	
	public void getdata() {
		
		class InnerClass{
			
			public void displayx() {
				System.out.println(x);
				
			}
			
		}
		
		InnerClass innerobj =new InnerClass();
		innerobj.displayx();
	}
	
	
	public static void main(String args[]) {
		
		ClassInsideMethod outerobj=new ClassInsideMethod();
		outerobj.getdata();
		
	}

}
