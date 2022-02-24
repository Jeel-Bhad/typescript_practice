var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//fucnction inside class
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.hello = function () {
        return this.fname + " " + this.lname;
    };
    return person;
}());
var perobj = new person(); //obj
perobj.fname = "jeel";
perobj.lname = "bhad";
console.log(perobj.hello());
//constructor
var room = /** @class */ (function () {
    function room(table, book) {
        this.table = table;
        this.book = book;
    }
    room.prototype.printroom = function () {
        return this.table + " " + this.book;
    };
    return room;
}());
var tableobj = new room("table1", "got");
console.log(tableobj.printroom());
var abc = /** @class */ (function () {
    function abc() {
    }
    abc.prototype.greet = function () {
        console.log("hello im inside class-1");
    };
    return abc;
}());
var abc2 = /** @class */ (function (_super) {
    __extends(abc2, _super);
    function abc2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abc2.prototype.greet2 = function () {
        console.log("im in class-2");
    };
    abc2.prototype.newm = function () {
        _super.prototype.greet.call(this);
        console.log("use of super keyword");
    };
    return abc2;
}(abc));
//var objabc:abc=new abc2(); now obj refer to only class -1
var objabc = new abc2();
objabc.greet2();
objabc.newm();
objabc.greet();
var Per2 = /** @class */ (function () {
    function Per2() {
    }
    Per2.prototype.getname = function () {
        console.log("this is interface implementation");
        return this.std + " " + this.ps2;
    };
    return Per2;
}());
var objinter = new Per2();
//duck obj 
var duckobj = {
    std: 1,
    ps2: "xyz",
    getname: function () { return 'anmsn'; }
};
objinter = duckobj;
objinter.getname();
//readonly --give value at the time of declaration and by constructor 
//enum
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SUN"] = 100] = "SUN";
    DayOfWeek[DayOfWeek["MON"] = 101] = "MON";
    DayOfWeek[DayOfWeek["TUE"] = 102] = "TUE";
})(DayOfWeek || (DayOfWeek = {}));
var day;
day = DayOfWeek.MON;
console.log(day);
