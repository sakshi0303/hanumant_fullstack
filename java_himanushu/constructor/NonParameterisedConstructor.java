//Non parametriesed constructor are the constructore which does not take any argument
// we have to create method and obj to display the output stored.
// parameters are the variables which are used to transfer data from one method to another


package java_himanushu.constructor;

import java.util.Scanner;

public class NonParameterisedConstructor {

    static long phonenumber;
    String name,address,email;
    NonParameterisedConstructor(){
    }

    public void display(){
        System.out.println(phonenumber+name+address+email);
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        NonParameterisedConstructor obj=new NonParameterisedConstructor();
       
        System.out.println("enter phone no");
        NonParameterisedConstructor.phonenumber= Long.parseLong(sc.nextLine());
        System.out.println("enter name");
        // String name= Integer.parseString(sc.nextLine());
        obj.name= sc.nextLine();
        System.out.println("enter address");
        obj.address=sc.nextLine();
        System.out.println("enter email");
        obj.email=sc.nextLine();
        
        obj.display();



    }

    
}
