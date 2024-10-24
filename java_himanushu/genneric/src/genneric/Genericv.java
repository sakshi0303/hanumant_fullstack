package genneric;

// generic class/method that can take any data type

public class Genericv {
	
	public static <T> void printlist(T[] arr) {
		for(T e:arr) {
			System.out.println(e);
		}
	}
	
	public static void main(String arg[]) {
		String arrs[]={"n1","n2","n3"};
		Integer arr[]= {1,2,3};
		Genericv.printlist(arrs);
		Genericv.printlist(arr);
		
		
		
	}
	
	
	
		

}
