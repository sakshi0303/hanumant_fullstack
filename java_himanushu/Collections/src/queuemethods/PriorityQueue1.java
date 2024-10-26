package queuemethods;

import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

public class PriorityQueue1 {
	
	private String name;
	private Integer loyalitypnt;
	
	private Integer getloyalitypnt() {
		// TODO Auto-generated method stub
		return loyalitypnt;
	}
	
	public PriorityQueue1(String name,Integer loyalitypnt){
		this.name=name;
		this.loyalitypnt=loyalitypnt;
	}
	
	@Override
	public String toString() {
		return "customer-name"+name+"loyality point"+loyalitypnt;
	}
		

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//lambda expression
		Comparator<PriorityQueue1> CustomComparator =(c1,c2)->Integer.compare(c1.getloyalitypnt(),c2.getloyalitypnt());
		
		
		Queue<PriorityQueue1> p1=new PriorityQueue<>(CustomComparator);
		
		p1.add(new PriorityQueue1("sakshi",12));
		p1.add(new PriorityQueue1("sakshi-2",22));//??////////
		p1.add(new PriorityQueue1("s",1));
		p1.add(new PriorityQueue1("s3",00));
		
		while(!p1.isEmpty()) {
			System.out.println(p1.poll());
		}
		
		
		

	}

	
}
