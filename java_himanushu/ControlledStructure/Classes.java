// we cant have other classes with public keyword , Public class will be with final class that has psvm 
// when we return we dont use void
// public is used i main class , main class method only and no other vasls

// for , do-while,while
package java_himanushu.ControlledStructure;

import java.util.Scanner;

class Greater{
    int displaygreaternum(int x,int y){
        if (x>y){
            return x;
        }else{
            return y;
        }
  
    }
    
}

class Lesser{

    int displaylessernum(int x, int y){
        if (x<y){
            return x;
        }else{
            return y;
        }
    }

}
public class Classes {

    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        System.out.println("enter the value of x");
        int value1= sc.nextInt();
        System.out.println("enter the value of y");
        int value2= sc.nextInt();
        if (value1==value2){
            System.out.println("same numbers");
        }else{
                System.out.println("click 1 for greater value or 2 for lesser value");
                int inputnum=sc.nextInt();
                if (inputnum==1){
                    Greater gt= new Greater();
                    System.out.println(gt.displaygreaternum(value1, value2)+"is greater number");
                    
                }else if (inputnum==2){
                    Lesser ls=new Lesser();
                    System.out.println(ls.displaylessernum(value1, value2)+"is lesser number");
                    

                }else{
                    System.out.println("invalid numbers");
                }
    }

    }
    
}
