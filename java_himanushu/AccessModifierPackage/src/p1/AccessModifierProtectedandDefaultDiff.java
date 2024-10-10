package p1;

public class AccessModifierProtectedandDefaultDiff {
	
	public void access() {
		AccessModifiers obj= new AccessModifiers();
		System.out.println(obj.name); // public
		System.out.println(obj.title); // protected
		System.out.println(obj.def); // default
		
	}

}
