package sealedclass;

final class Circle extends sealedwithabstract{
	private double radius;
	
	private Circle(double radius) {
		this.radius=radius;
		
	}
	
	public double area() {
		return 2*3.5*radius;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Circle obj=new Circle(3);
		obj.displayarea();

	}

}
