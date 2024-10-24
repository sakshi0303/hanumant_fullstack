package set;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

// set is an interface coming from java,util package
// it does not hold any duplicate values
// it is not organized at specific index value

//HashSet:
//
//Unordered.
//Allows null values.
//Best for general-purpose usage where ordering is not important.
//LinkedHashSet:
//
//Maintains insertion order.
//Slightly slower than HashSet due to maintaining a linked list internally.
//TreeSet:
//
//Sorted set.
//Does not allow null values.
//Useful when sorting is required.

public class SetMethods {
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Set<Integer> set=new HashSet<>();
		set.add(12);
		set.add(13);
		set.add(12);
		set.add(90);
		
		System.out.print(set);
		set.remove(13);
		
		System.out.print(set.contains(90));
		System.out.print(set.size());
		System.out.print(set.isEmpty());
		Set<Integer> anotherset=new HashSet<>();
		anotherset.add(12);
		anotherset.add(91);
		set.addAll(anotherset);
		System.out.println("after addall"+set);
		
		
		set.retainAll(anotherset); //all intersection 
		System.out.println(set);
		
		set.removeAll(anotherset);
		set.clear();
		System.out.println(set);
		
		Set<String> setlinkedhashOrdered=new LinkedHashSet<>();
		setlinkedhashOrdered.add("riya");
		setlinkedhashOrdered.add("sa");
		setlinkedhashOrdered.add("hanumant");
		setlinkedhashOrdered.add("riya");
		
		System.out.println(setlinkedhashOrdered);
		
		  Set<Integer> treeSet = new TreeSet<>();
	        treeSet.add(5);
	        treeSet.add(1);
	        treeSet.add(3);
	        treeSet.add(2);

	        System.out.println("TreeSet: " + treeSet);  // [1, 2, 3, 5]
		
		
		
		
		
		
		
		
		
		
		

	}

}
