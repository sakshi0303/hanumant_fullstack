package queuemethods;

import java.util.ArrayDeque;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.PriorityBlockingQueue;

public class QueueCollections {
	
//	queue is the interface extending from java.util packagae
//	fifo
	
	
	
	
	
	Queue<Short> q3=new ArrayDeque<>();
	
	Queue<Long> q4=new LinkedBlockingQueue<>();
	
	Queue<Double> q5=new PriorityBlockingQueue<>();
	
	Queue<Integer> q6=new ArrayBlockingQueue<>(10); // 10 is the q5 capacity
	
	

	public static void main(String args[]) {
		Queue<Integer> q1=new LinkedList<>();
		q1.offer(12);
		q1.offer(13);
		q1.offer(14);
		System.out.println(q1); //[12, 13, 14]
		q1.poll();
		System.out.println(q1); //[13, 14]
		
		
		Queue<String> q2=new PriorityQueue<>();
		//Queue<String> q2=new PriorityQueue<>(Comparator.reverseOrder());
		q2.offer("sakshi");
		q2.offer("akshitaaa");
		q2.offer("zs");
		System.out.println(q2); //[akshitaaa, sakshi, zs] ---> lexocial order
		q2.poll();
		System.out.println(q2); //[sakshi, zs] 
		
		
	
		
		
		
		
	}

}