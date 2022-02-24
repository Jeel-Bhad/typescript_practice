var s1: string = "hello";
var s2: string = "hi";
console.log(s1 + " jeel " + s2);


//function



function fun2(x,y,d=10)
{
    return x+y;
}
console.log(fun2(30,30));

//arrow function
var add=(x,y)=>x+y;
console.log(add(20,30));
console.log(typeof add);

var a:number=10;
console.log(a);

//array
var myarr:number[]=[1,2,3,4];
myarr.push(4,5);
myarr.pop();
var a:number;
a=myarr.pop();
console.log(a);
console.log(myarr);

var myarr2=[1,2,'jeel'];
console.log(myarr2[2]);

//union type
var abc:number|string;
abc=10;
abc="jeel";
