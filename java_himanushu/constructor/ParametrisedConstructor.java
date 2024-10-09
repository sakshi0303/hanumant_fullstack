// this refers to the current class or component

package java_himanushu.constructor;

public class ParametrisedConstructor {

    static long phonenumber;
    String name,email,password,address;

    ParametrisedConstructor(String name,String email,String password,String address,long phonenumber){
        this.name=name;
        this.email=email;
        this.password=password;
        this.address=address;
        ParametrisedConstructor.phonenumber=phonenumber;
    }

    public static void main(String[] args) {


        ParametrisedConstructor obj=new ParametrisedConstructor("sakshi","one@gmail.com","pass","lucknow",123456789077L);
        System.out.println(obj.name+" "+obj.address+" "+obj.email+" "+obj.password+" "+ParametrisedConstructor.phonenumber);
        
    }

    
}
