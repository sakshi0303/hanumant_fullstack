package trycatch;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatchUsingThrow extends Exception{
	
	public TryCatchUsingThrow(String name) {
		super(name);
	}
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			
			Scanner sc=new Scanner(System.in);
			
			System.out.println("enter the salary");
			int Salary=sc.nextInt();
			if (Salary<=120 & Salary>=0 ) {
				
				TryCatchUsingThrow obj=new TryCatchUsingThrow("salary is too low");
				throw obj; // obj throw in the catch block
				
			}
			if (Salary<0) {
				TryCatchUsingThrow obj=new TryCatchUsingThrow("salalry cannot be negative");
				throw obj;
			}
			
			if (Salary > 120) {
			     throw new IllegalArgumentException("Age must less that 120");
			  }
			//throw new ArithmeticException("Division by zero");
			
			
		}catch(TryCatchUsingThrow obj) {
			System.out.println(obj.getMessage());
		}catch(InputMismatchException ime) {
			System.out.println("salary should be in int type");
		}catch(Exception e) {
			e.printStackTrace();
		}

	}

}
