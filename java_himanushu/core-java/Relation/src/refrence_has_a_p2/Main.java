package refrence_has_a_p2;
import java.util.Scanner;

//cmd+shift+o
import refrence_has_a_p1.Customer;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		Customer cust=new Customer();
		System.out.println("enter customer id");
		cust.Customer_id=Integer.parseInt(sc.nextLine());
		System.out.println("enter customer name");
		cust.Customer_name=sc.nextLine();
		
		System.out.println("enter country");
		cust.ad.Country=sc.nextLine();
		System.out.println("enter pincode");
		cust.ad.pincode=Integer.parseInt(sc.nextLine());
		System.out.println("enter city");
		cust.ad.City=sc.nextLine();
		
		cust.ad.displayAddress();
		cust.displayCustomer();
		
		
	}	
}