package trycatch;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatchWithThrows extends Exception{
	
	public TryCatchWithThrows (String name) {
		super(name);
	}
	
	public static void main(String args[]) throws TryCatchWithThrows, InputMismatchException {
		try {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the salary");
		int Salary=sc.nextInt();
		if (Salary>=0 & Salary<=1200) {
			TryCatchWithThrows obj=new TryCatchWithThrows("salary is too low");
			throw obj;
		}
		if (Salary<0) {
			TryCatchWithThrows obj=new TryCatchWithThrows("salary cannot be negative");
			throw obj;
			
		}
		}
		
//		catch(TryCatch2 obj) { //user-defined exception
//			System.out.println(obj.getMessage());
//		}catch(InputMismatchException ime) {
//			System.out.println(ime);	
//		}
//		catch(Exception e) { // pre-defined exceptions
//			e.printStackTrace();
//		}
		
		//2md way: only with one catch-->
		catch(Exception e) {
			
			e.printStackTrace();
			
		}
		
		
	}
	
	

}
