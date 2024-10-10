package p1;
// final vaiables are the variables wihich is instalised with value and we cannot modify it at a run time

//Differnce between: 
//	local variable are variable which is declared inside a methood.abstract
//	instance variable are the variable which is written outside of method

public class LocalVarAndInstanceVarDiff {
	final int x=12323;  //instance variable
	static String y="instance variable";		//instance variable	
	
	
	public void add() {
		int age=12; // local variable
		String name="local-variable"; // local varible
		System.out.println(age);
		System.out.println(name);

	
	}
	
	
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String a="normalvariable";
		
		LocalVarAndInstanceVarDiff obj= new LocalVarAndInstanceVarDiff();
				System.out.println(a);
				obj.add();
				System.out.println(obj.x);
				System.out.println(LocalVarAndInstanceVarDiff.y);
		
		
		

	}

}
