package java_himanushu.constructor;

import java.util.Scanner;

public class NonParameterisedConstructor {

    static long phonenumber;
    String name,address,email;
    NonParameterisedConstructor(){
        System.out.println(phonenumber);
        System.out.println(name);

    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
       
        System.out.println("enter phone no");
        long phonenumber=sc.nextLong();
        sc.nextLine();
        System.out.println("enter name");
        // String name= Integer.parseString(sc.nextLine());
        String name= sc.nextLine();
        System.out.println("enter address");
        String address=sc.nextLine();
        System.out.println("enter email");
        String email=sc.nextLine();
        NonParameterisedConstructor obj=new NonParameterisedConstructor();



    }

    
}
