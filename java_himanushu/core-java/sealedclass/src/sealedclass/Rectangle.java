package sealedclass;
// it can be sealed,  non -sealed and final
non-sealed class Rectangle extends sealedwithabstract {
	
	int l;
	int w;
	
	public Rectangle(int l, int w) {
		this.l=l;
		this.w=w;
		
	}
	
	public  double area() {
		return l*w;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Rectangle obj=new Rectangle(3,6);
		obj.displayarea();
		
		

	}

}
