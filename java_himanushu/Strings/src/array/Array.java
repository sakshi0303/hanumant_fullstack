package array;

public class Array {
	
	
	public static void main(String args[]) {
		
//		int arr1[]= {5,6};
//		
//		for (int num:arr1) {
//			System.out.println(num);
//		}
//		
//		int doubarr[][]= {{2,5},{3,8},{4,8}};
//		
//		for (int i=0;i<=doubarr.length-1;i++) {
//			for (int j=0;j<=doubarr[0].length-1;j++) {
//				System.out.println(doubarr[i][j]);
//			}
//			
//		}
		
//		int arr[][]=new int [3][3];
		int arr[][]= {{12,14,29},{23,31,35},{78,61,21}};
		
		for (int i=0;i<arr.length;i++) {
			for (int j=0;j<arr[0].length;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
		
		
		
		
		
		
	}

}
