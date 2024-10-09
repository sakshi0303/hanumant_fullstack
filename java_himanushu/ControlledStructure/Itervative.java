// for , while, do-while
package java_himanushu.ControlledStructure;

import java.util.Scanner;

public class Itervative {
   
    public static void main(String[] args) {
        //int arr[]={1,2,3}; #1D array
        Scanner sc =new Scanner(System.in);
        System.out.println("enter value n");
        // int res=Integer.parseInt(sc.nextLine());
        float res=Float.parseFloat(sc.nextLine());

        for(int i=5;i>=1;i--){
            res*=i;
           
        }
        System.out.println(res);

        System.out.println("enter any string");
        String outs=sc.nextLine();
        System.out.println(outs);
        int i=0;
        // while (outs.length()>i){
        //     System.out.println(outs.charAt(i));
        //     i++;

        // }
            //   sakshi
            // i 123456
        do {
            System.out.println(outs.charAt(outs.length()-1-i));
            i++;
            
        } while (outs.length()>i);

        

    }
    
}
