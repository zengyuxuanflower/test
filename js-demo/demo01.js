// JS basic
// April 3rd
// the folowwing code can only be excuted in Node.js, not in browser

//1-undefined

var assert = require("assert"); //require a module called "assert", like "import" in Java

console.log('************************1-undefined******************************');
// Writing into the browser console, using console.log()
assert.ok(true); //ok method, pass True value, Tests if value is truthy. it means your assertion will be succesfull and vice versa

// assert.equal(1, 2); // pass two parameters, like 1 == 1, can be used in unit testing in JavaScript


// what is undefined in JavaScript? Can be regarded as a keyword

var a; // if we declare a variable and do not assign any value, undefined will be the default value
assert.equal(a, undefined);  //assert.equal(actual, expected[, message])

// **** interview point: difference between a & b
console.log(a); // a is declared but not assigned -> undefined
// console.log(b); // b is nerver declared, it will throw an error -> "not defined"

//2-null
console.log('************************2-null******************************');
var c = null; // null: variable has no value, can be used as flag in "if" statements to check

//3-falsy value: 
//false, 0, undefined, null, '', NaN (not a number)
console.log('************************3-falsy value******************************');
//use any of them above if in JaveScript, not like in Java!!
console.log(0 == false); // compare the value, doesn't compare the type; Here false was converted to 0
console.log(0 === false); // compare both the value and type
console.log(1 + "1"); // "11". string concatenation, for "+" only
console.log(1 - "1"); // 0. it is an int
console.log(1 + true); // true -> 1, if false ->0
console.log("a"/ 1); // there is no meaning here, so the result will be NaN

console.log(NaN == NaN); // false, it does not equal to itself only in JavaScript
console.log(isNaN(NaN)); // the correct way to check NaN, remember this

console.log('************************4-functions******************************');
// how to create a function in JavaScript
// var y;
function local(t){
	// Here t is a local variable, can be passed with any type as a parameter
	// in js, every function will create a scope!!!!!
	console.log(t);

	var x = 1; // local variable to the function, you can not use this outside this fucntion!

	y = 2; // we declare y without using var keyword, but assign a value to y
	// Basically, js will check as follows:
	// 1. check where y is declared inside the function scope
	// 2. check whether y is declared in the file scope

	z = 3; // global.z = 3, fails for both senario 1 & 2, js will create global.z object

	// scope: function scope-> file scope -> global scope

	// for glocal object: in nodejs: global; in browser: window

	// when access: search until global, if the variable is not defined in global, then throw out error
	// here "access" is like console.log()

	//assign: ... create a vriable in global
}

local("do not hit & run"); // we can use '' and "", ```

// console.log(x); //error
console.log(y); // here we decalred y in file scope
console.log(global.z); // here we decalred z in global scope

// self invoked function. IIFE(IMMEDIATE INVOKE FUNCTION EXPRESSION), 
//The function becomes a function expression which is immediately executed. 
// The variable within the expression can not be accessed from outside.

(function(){
	console.log("IIFE");
})();

var p = "hello";
p = 1;
console.log(p);  // 1

var array = [1,2,3,4,5];
var obj = {
	"name": "bob",
	"age":1,
};

console.log(obj["name"])

function avg(){//if pass a,b,c as parameter here, more parameters will be ignored here after 3
	// arguments: array-like object, implemented implictly
	console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
	console.log(arguments[1]); //2
	console.log(arguments.length); //3

	var result = 0;
	for(var i = 0; i< arguments.length; i++){
		result += arguments[i]
	}
	return result; // 6
	// return; //retrun; by default, which will be undefined

}
console.log(avg(1,2,3))

// 5-hoisting
console.log('************************5-hoisting******************************');
//hoist variable/ function declaration to the top of current scope
// hoisting:
 // JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

(function(){
	// var i; //js will move all the variable declaration at the top of this function, so it will be undefined
	// var j;
	// var y
	var i = 1;
	console.log(i); // 1
	console.log(j); //no error because hoisting and set undefined as defalut value
	x();//You can use function safely here, hoisting
	// y();//it will throw an error because undefined is not a function

	for(var j = 0; j <10; j++){
	}
	console.log(j);//you can get j outside of for loop
	
	function x(){
	//create a function inside function, it's not allowed in Java
	console.log("x");
	}
	x();//use function x after declaration

	var y = function(){//a var in js can be a function!!!
		console.log("y");

	}

})();

// differrence between ==, ===
console.log('************************6-==, ===******************************');
var s1 = "abc"; // String literal
var s2 = new String("abc"); //String Object

console.log(s1 == s2); // compare value only

console.log(s1 === s2); // compare both value and type



