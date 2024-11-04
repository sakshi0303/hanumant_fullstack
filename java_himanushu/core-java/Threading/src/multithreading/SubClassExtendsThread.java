package multithreading;

//public class SubClassExtendsThread extends Thread{ -- nothing else in SubclassextendThread class,,change in main class and call thread object

public class SubClassExtendsThread implements Runnable{
	private int threadnumber;
	
	public SubClassExtendsThread(int threadnumber) {
		this.threadnumber=threadnumber;
	}
	
	@Override
	public void run() {
		for (int i=0;i<3;i++) {
			System.out.println(i+"from thread"+threadnumber);
			if (threadnumber==3) {
				throw new RuntimeException(); // threads works independently and 3 will have runtime expetion but other will keep on running
			}
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		}
		
	}

}
