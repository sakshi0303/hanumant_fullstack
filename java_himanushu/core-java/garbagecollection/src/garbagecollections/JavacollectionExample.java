package garbagecollections;

public class JavacollectionExample {
	
	public void finalize() throws Throwable{
		System.out.println("gc "+this);
		
	}

	public static void main(String[] args) {
		
		
		for(int i=0;i<1000000;i++){
			JavacollectionExample obj=new JavacollectionExample();
			obj=null;
			
		}
		System.gc();
		
		
		
		// TODO Auto-generated method stub

	}

}
