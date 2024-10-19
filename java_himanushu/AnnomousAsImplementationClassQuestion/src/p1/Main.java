package p1;

import java.util.Scanner;

public class Main {
	
	questionInterface obj=new questionInterface(){
		
		public void diplay(int num){
		System.out.println(num);
		}
	};
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		
		Main objm=new  Main();
		
		
		System.out.println("exter value1");
		int x=Integer.parseInt(sc.nextLine());
		
		System.out.println("exter value2");
		int y=Integer.parseInt(sc.nextLine());
		
		System.out.println("enter greater or smaller");
		String value=sc.nextLine();
		System.out.println(value);
		if (value.equals("greater")) {
			if(x>y) {
				objm.obj.diplay(x);
			}else {
				objm.obj.diplay(y);
			}
		}else {
			
			if(x<y) {
				objm.obj.diplay(x);
			}else {
				objm.obj.diplay(y);
			}
			
		}
		
		
		 
		
	}

}



