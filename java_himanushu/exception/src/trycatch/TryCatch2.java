package trycatch;

import java.util.Scanner;

public class TryCatch2 extends Exception{
	
	public TryCatch2 (String name) {
		super(name);
	}
	
	public static void main(String args[]) {
		try {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the salary");
		int Salary=sc.nextInt();
		if (Salary>=0 & Salary<=1200) {
			TryCatch2 obj=new TryCatch2("salary is too low");
			throw obj;
		}
		}catch(TryCatch2 obj) {
			System.out.println(obj.getMessage());
		}
		
		
//		if (Salary>)
	}
	
	

}
