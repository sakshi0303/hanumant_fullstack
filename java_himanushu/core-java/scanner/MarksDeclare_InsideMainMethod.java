package java_himanushu.scanner;

import java.util.Scanner;

public class MarksDeclare_InsideMainMethod {

    public static void main(String[] args) {
        

  
        float m2;
        float m3;
        float m4;
        float m5;
        float m6;

        float precentage;
        

        Scanner sc=new Scanner(System.in);
        System.out.println("enter first subject marks");
        float m1=sc.nextFloat();
        System.out.println("enter second subject marks");
        m2=sc.nextFloat();
        System.out.println("enter third subject marks");
        m3=sc.nextFloat();
        System.out.println("enter forth subject marks");
        m4=sc.nextFloat();
        System.out.println("enter fifth subject marks");
        m5=sc.nextFloat();
        System.out.println("enter sixth subject marks");
        m6=sc.nextFloat();
        precentage=(m1+m2+m3+m4+m5+m6)/6;
        System.out.println(precentage);






    }
    
}
