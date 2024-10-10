package p2;
import p1.AccessModifiers;
//import p1.AccessModifiers;
public class AccessModifier2 extends AccessModifiers {
	
	
		
//		System.out.println(obj.name);
		public void display() {
			System.out.println(title);  // title is protected and can be called by other packages with the help of extend 
		}
				
		public static void main(String args[]) {
			AccessModifier2 obj=new AccessModifier2();
			obj.display();
			
		}
	

}
