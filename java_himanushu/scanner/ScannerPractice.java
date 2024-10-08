package java_himanushu.scanner;

import java.util.Scanner;

//systrace
// psvm
// SCANNER::
//     > Scanner class is used to take the input from the user
//     > import java.util.Scanner
//     > Scanner sc=new Scanner(System.in)
//     > System.in will take the values as input
//     > if varibales are defined inside main class, then we have to make a method to display the result.and call that method in main method.
//     > if the variables are defined in main method then the output is showed and calculated in the main method only

// >if we will take the input as a integer so we willl use .nextInt()
// >float ----> .nextFloat()
// >long ----> .nextLong()
// >for charater and string, whole sentence ----> .nextLine()
// > byte(stream) ----> .nextByte()
// > short(stream) ----> .nextShort()



public class ScannerPractice {
    static String fname;
    Integer age;

    public void takevalue(){
        System.out.println("name="+fname);
        System.out.println("age="+age);
        

    }


    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        ScannerPractice obj=new ScannerPractice();

        System.out.println("Eneter your first name");
        ScannerPractice.fname=sc.nextLine();
        System.out.println("enter your age");
        obj.age=sc.nextInt();
        
       
        obj.takevalue();

        // System.out.println("name="+fname);
        // System.out.println("age="+age);
        



        



        
        
    }

  

    
}
