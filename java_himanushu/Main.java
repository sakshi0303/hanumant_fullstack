package java_himanushu;

public class Main {

    static int age=20;
    int price=400;

    //non statuc method will access static and non static components 
    // systrace
    // static member in class will accesseble with class name

    void number(){ 
        System.out.println("age="+age);
        System.out.println("price="+price);

    }

    static void Calculator(){
        //System.out.println("price="+price); ---> ERROR
        System.out.println("age"+age);
    }

    public static void main(String agrs[]){
        Main obj=new Main();
        //obj.Calculator(); obj can call both static and non static
        obj.number(); 
        Main.Calculator();

        

       
        




        // String str="hello world";
        // System.out.println(str);
        // int a=10;
        // int b=20;
        // int c=a*b;
        // System.out.println("a*b="+c);

        // String s1="hie";
        // String s2="everyone";
        // System.out.println(s1+' '+s2);


    }
    
}
