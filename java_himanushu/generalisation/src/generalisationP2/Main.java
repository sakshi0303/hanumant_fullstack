package generalisationP2;

import generalisationP1.*;

public class Main {
	public static void main(String args[]) {
		
		//ParentClass obj=(ParentClass) new ChildClass(); // it only takes the overidieng method of child
		
		ChildClass obj=(ChildClass) new ParentClass();
		System.out.println(ParentClass.m1("hanumantparent"));
		System.out.println(ChildClass.m1("hanumantchild"));
		
		System.out.println(obj.allchild("SUV"));
		//obj.m
		
		
		
	}

}
