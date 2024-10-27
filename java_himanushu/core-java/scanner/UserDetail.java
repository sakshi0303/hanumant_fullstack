package java_himanushu.scanner;

import java.util.Scanner;

//sysout
public class UserDetail {
    
    String name,email,address;
    Long phonenumber;

    public void showresult(){
        System.out.println("name is "+name);
        System.out.println("email is "+email);
        System.out.println("address is "+address);
        System.out.println("phonenumber is"+phonenumber);
    }

    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        UserDetail obj=new UserDetail();
        System.out.println("enter the name:");
        obj.name=sc.nextLine();
        System.out.println("enter the email:");
        obj.email=sc.nextLine();
        System.out.println("enter the address:");
        obj.address=sc.nextLine();
        System.out.println("enter the phonenumber:");
        obj.phonenumber=sc.nextLong();

        obj.showresult();



        
    }
    
    
}
