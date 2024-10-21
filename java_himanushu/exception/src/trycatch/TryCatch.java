package trycatch;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatch extends Exception{
	
	public TryCatch(String name) {
		super(name);
	}
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			
			Scanner sc=new Scanner(System.in);
			
			System.out.println("enter the salary");
			int Salary=sc.nextInt();
			if (Salary<12000 & Salary>=0 ) {
				
				TryCatch obj=new TryCatch("salary is too low");
				throw obj; // obj throw in the catch block
				
			}
			if (Salary<0) {
				TryCatch obj=new TryCatch("salalry cannot be negative");
				throw obj;
			}
			
			
		}catch(TryCatch obj) {
		
			System.out.println(obj.getMessage());
		}catch(InputMismatchException ime) {
			System.out.println("salary should be in int type");
		}

	}

}
