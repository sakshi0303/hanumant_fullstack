package annonomousAsImplementationClass;

public class Main{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Interface1 interface_obj=new Interface1(); #erre: cannot innitatie interface
		Interface1 interface_obj=new Interface1()
				{
				public void display(int x) {
					System.out.println(x);
				}
				// only abstract method which is non static can 
				
//				public static String cm(String name){
//					return name;
//				}
				
				};
				
				interface_obj.display(10);
	}
	

}
