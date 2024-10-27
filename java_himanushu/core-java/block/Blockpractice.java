// static { }

//  non static { }
// static will acces only static block,component
//  non static will access both
// static and non-static block both automatically executed but for non-static block we create obj
// Flow=== static block--> main function--> obj created--> non stactic block execution of same obj --> constructor of same obj---> rest of code

package java_himanushu.block;

public class Blockpractice {

   

    static String name="sakshi";
    int age=30;

    {
        System.out.println("inside non static block");
        System.out.println(name);
        System.out.println(age);
    }


    Blockpractice(String name,int age){
        // System.out.println("inside constructor"+name+age);
        this.name=name;
        this.age=age;
        System.out.println("inside Blockpractice(String name,int age) constructor");
    }
    Blockpractice(){
        System.out.println("inside  Blockpractice() constructor");
       
    }

    static{
        System.out.println("inside static block");
        System.out.println(name);
        // System.out.println(age);
    }
    


    
    public static void main(String[] args) {
        System.out.println("Creating the first object of Blockpractice:");

        Blockpractice obj=new Blockpractice("sakshi-ci=onst",999);
        Blockpractice obj1=new Blockpractice("sakshi-ci=onst",999);
        Blockpractice obj2=new Blockpractice();

        
        int newage=obj.age;
        System.out.println("accessing the non static "+newage);



        
    }
    
}
