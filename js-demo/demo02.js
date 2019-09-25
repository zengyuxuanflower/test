// JS data types
// April 4th
// 1. Boolean		true or false
// 2. Number 	Any integer or floating-point numeric value 
// 3. String		A character or sequence of characters delimited by 			either single or double quotes (JavaScript has no 			separate character type) 
// 4. Null		A primitive type that has only one value, null 
// 5. Undefined	A primitive type that has only one value, undefined 			(undefined is the value assigned to a variable that is not 		initialized) 
// 6. Symbol		*ES6. Symbol([description]). Can be used as object 			property, designed to resolve conflits.

console.log('************************JS data types******************************');
console.log('************************1-Primitive type******************************');
// Primitive type: boolean, string, number, null, undefined, symbol
var x = 1;
x = "hello";
// x++; -> NaN
if(typeof x === "number"){
	x++;
}//typeof takes a variable, returns a string

console.log("hello" + 1);

console.log(x);
console.log(typeof "hello"); //"string"
console.log(typeof false); //"boolean"
console.log(typeof null); //"object" *actually it is a bug in js, because null is a primitive type**************************************************
console.log(typeof undefined); //"undefined"
console.log(typeof [1,2,3]); //"object"
console.log(typeof function(){}); //"function"
console.log(typeof NaN); //"number"
console.log(typeof {"name": "Bob"});//"object"
console.log(typeof Symbol("key")); //"symbol", ES6 feature***, it can ensure unique key in object (like hashmap)

// Q: how to check if the variable is an array?
console.log(Array.isArray([1,2,3])); //true

// Q: how to compare null and undefined? 
console.log(null == undefined); // true: same value
console.log(null === undefined); // false: different dt

// Q: how to check if a variable is null? (since if we use typeof it will return "object")
y = null;
console.log('ttt');
console.log(typeof y); // it will show y is an object
if(y === null){ // we can not use typeof here, make use of null is a primitive type in JS
	y = 1;  
}

// Q: how to check if an variable is undefined, when variable z is not defined as a variale?

console.log(typeof z);
if(typeof z === "undefined"){ // type a variable that is never declared is also undefined
	console.log("z is never declared");  
}

console.log('************************2-Reference type******************************');
// JS is a dynamic, weakly typed language
// There are 3 ways to create objects.

// 1) By object literal, 2) By creating instance of Object directly, 3) By using an object constructor (using new keyword)

// 1. object literal(using {})
// object is a "kind of" key-value pairs
var obj = {}; // JS is dynamic, you can change its property as follows:
obj.name = "bob";
obj.age = 22;
console.log(obj);

console.log(obj.name); //dot notation
console.log(obj["name"]); // bracket notation

//without "", it will be regarded as a variable, so we can also access name as follows:
var nameKey = "name";
console.log(obj[nameKey]);

// console.log(obj.nameKey);// ->return undifined, since we do not have an key named "nameKey"

// we can only use bracket notation if we want to contain blank in the key
obj["last name"] = "Li"; 
console.log(obj["last name"]);

/////////////////////////
var a = Object(100); // directly pass a value to Object will wrap primitive value into an object
console.log(a); // [Number: 100]
console.log(a == 100); // like a.valueOf(), true

console.log(a === 100);//false, a is an object
 /////////////////////////

var o = {name: "bob"} //can ignore "" for key if it is a simple word without space
var b = Object(o); //return object itself , it will point b to o
console.log(b == o); //true
console.log(b === o); //true

/////////////////////////
console.log("compare two empty objects: ")
var o1 = {};
var o2 = {};
console.log(o1 == o2); // false, it will compare the reference (memory location) internally
console.log(o1 === o2); // false



function isObject(obj) {
	// body...
	return obj === Object(obj); //it will compare type, not using typeof
}

console.log(isObject(null)); //false, because we compare null === Object

console.log('******************************************************');
var c;
c = c + " String!";
console.log(c);





