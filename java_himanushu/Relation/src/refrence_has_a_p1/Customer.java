package refrence_has_a_p1;


public class Customer {
	public int Customer_id;
	static public String Customer_name;
	
	public Address ad=new Address();
	
	public void displayCustomer() {
		System.out.println("Customer details");
		System.out.println(Customer_id);
		System.out.println(Customer_name);
		
	}
	
	
	
	

			

}
