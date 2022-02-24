var s1 = "hello";
var s2 = "hi";
console.log(s1 + " jeel " + s2);
//function
function sub(x, y, d) {
    if (d === void 0) { d = 10; }
    return x + y;
}
console.log(sub(30, 30));
//arrow function
var add = function (x, y) { return x + y; };
console.log(add(20, 30));
console.log(typeof add);
var a = 10;
console.log(a);
//array
var myarr = [1, 2, 3, 4];
myarr.push(4, 5);
myarr.pop();
var a;
a = myarr.pop();
console.log(a);
console.log(myarr);
var myarr2 = [1, 2, 'jeel'];
console.log(myarr2[2]);
//
