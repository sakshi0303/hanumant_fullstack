package list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;
import java.util.Vector;

public class listClass {
	
	
	
	
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<Integer> l1=new ArrayList<>(); // Maintains the insertion order, containes duplicate
		l1.add(2);
		l1.add(222);
		l1.remove(22);
		l1.contains(1);
		l1.isEmpty();
		l1.size();
		
		
		List<String> l2=new Stack<>(); //lifo
		
		List<Float> l3=new Vector<>(); // threadsafe
		
		List<Short> l4=new LinkedList<>(); // Maintains the insertion order two pointer, containes duplicate
		
		

	}

}
