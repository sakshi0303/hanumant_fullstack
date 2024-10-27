package anonymousasclassextension;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ClassExtention obj=new ClassExtention() {
			
			// error: we cannot override static
//			public static void m1(int a){
//                System.out.println(a);
//            }
            public  String m2(String n){
                return n;
            }
            
		};
		
//		ClassExtention.m1(100);
		System.out.println(obj.m2("sakshi"));

	}

}
