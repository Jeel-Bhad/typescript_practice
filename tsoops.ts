//fucnction inside class
class person
{
    fname:string; //member
    lname;
    hello() {
        return this.fname+" "+this.lname;
    }
}
var perobj=new person();//obj
perobj.fname="jeel";
perobj.lname="bhad";
console.log(perobj.hello());

//constructor
class room
{
    table:string;
    book:string;
    constructor(table:string,book:string)
    {
        this.table=table;
        this.book=book;
    }
    printroom(){
        return this.table + " "+this.book;
    }

}
var tableobj=new room("table1","got");

console.log(tableobj.printroom());

class abc
{
    a:string;
    b:string;
    greet()
    {
        console.log("hello im inside class-1");
    }
}
class abc2 extends abc
{
    greet2()
    {
        console.log("im in class-2");
    }
    newm()
    {
        super.greet();
        console.log("use of super keyword");
    }
}
//var objabc:abc=new abc2(); now obj refer to only class -1
var objabc=new abc2();
objabc.greet2();
objabc.newm();
objabc.greet();

//interface
interface Per1{
    std:number;
    ps2:string;
    getname():string;
}
class Per2 implements Per1
{
    std:number;
    ps2:string;
    getname():string
    {
       
        console.log("this is interface implementation");
        return this.std + " " +this.ps2;
    }
}
let objinter:Per1=new Per2();

//duck obj 
let duckobj={
    std:1,
    ps2:"xyz",
    getname:()=>'anmsn'
};
objinter=duckobj;
objinter.getname();

//readonly --give value at the time of declaration and by constructor 

//enum
enum DayOfWeek{SUN =100, MON,TUE}
let day:DayOfWeek;
day=DayOfWeek.MON;
console.log(day);

