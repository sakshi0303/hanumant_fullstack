package stringmethods;

import java.util.StringJoiner;
import java.util.StringTokenizer;

public class StringMethods {
	
	String s1=new String("s1");
	String s2="s2";
	
	String s3=s1.concat(s2);
	int i1=s1.charAt(0);
	
	
	
	
	public void display() {
		System.out.println(s3.toString()+s3.length());
		System.out.println(i1);
	}
	
	
	//String s3=s1.append(s2); -> we can mutate after creating stringbuilder,stringBuffer obj
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// stringbuffer is thread safe and used in multithreaded env, it is syncronised and slow
		StringBuffer sb=new StringBuffer("hello");
		sb.append("world");
		sb.insert(6,"beautiful");
		sb.reverse();
		sb.replace(0, 2, "him");
		System.out.println(sb);
		
		// stringbuffer is not thread safe and used in single threaded env, it is non syncronised and fast
		StringBuilder sbu=new StringBuilder("hello");
		
		StringTokenizer sk=new StringTokenizer("hello world you beautiful"," ");
		while (sk.hasMoreTokens()) {
			System.out.println(sk.nextToken());
		}
		
		StringJoiner sj=new StringJoiner(", ");
		sj.add("hi").add("hell").add("you");
		System.out.println(sj);
		

	}

}
