package java_himanushu.scanner;

import java.util.Scanner;

public class CalculatorDeclare_InsideClass {
    int x;
    int y;
    static int a;
    static int b;
    int z;


    public void getresult(){
        int z=(x*y)+(a+b);
        System.out.println("calculated value (x*y)+(a+b)= "+z);
    }

    public static void main(String[] args) {

        
        Scanner sc=new Scanner(System.in);

        CalculatorDeclare_InsideClass obj=new CalculatorDeclare_InsideClass();

        System.out.println("enter value of x");
        obj.x=sc.nextInt();
        System.out.println("enter value of y");
        obj.y=sc.nextInt();
        System.out.println("enter value of a");
        CalculatorDeclare_InsideClass.a=sc.nextInt();
        System.out.println("enter value of b");
        CalculatorDeclare_InsideClass.b=sc.nextInt();
        obj.getresult();
    
        
    }

    
}
