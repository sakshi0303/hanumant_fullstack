package multithreading;

public class mutlithreadingMainclassThread {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		for (int i=0;i<2;i++) {
			SubClassExtendsThread mythread=new SubClassExtendsThread(i);
			//mythread.start();
			Thread t1=new Thread(mythread);
			t1.start();
			//t1.join(); // this thread will wait for the t1 thread to die
			///t1.yield();
			System.out.println(t1.isAlive());			
		}		
		

	}

}
