package trycatch;

import java.lang.reflect.Constructor;

public class NewAndNewInstance {


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//NewAndNewInstance obj=new NewAndNewInstance();
		
		try {
		Constructor<NewAndNewInstance> constructor=NewAndNewInstance.class.getDeclaredConstructor();
//		NewAndNewInstance obj=(NewAndNewInstance) Class.forName("NewAndNewInstance").newInstance();
		NewAndNewInstance obj = constructor.newInstance();
		System.out.println("Instance created using Constructor.newInstance(): " + obj);
        
		
		}catch(Exception e) {
			e.printStackTrace();
			
		}
	}

}