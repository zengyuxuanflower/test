// JS prototype
// April 5th 
function A(){
	this.value = 10;
	this.getValue = function(){
		return this.value;
	};
}

var a1 = new A();
var a2 = new A();
console.log(a1.getValue() === a2.getValue()); // true, primitive value

console.log(a1.getValue === a2.getValue); // false, comaring two different object (reference)

// use prototype to save reference
console.log("*********use prototype to save reference****************")
function B(){
	// console.log(x);// undefined
	this.value = 20;
}

B.prototype.getValue = function(){
	return this.value;
};

var b1 = new B();
var b2 = new B();
console.log("b1 and b2: ", b1 === b2); // false
console.log(b1.getValue === b2.getValue); //true

b3 = b1;
console.log("b1 and b3: ", b1 === b3); // true

// add a new property
B.x = 100;
console.log(B.x); //100

console.log("************access and assign***************")
B.prototype.y = 30;
console.log(b1.y);//30, access
b1.y = 40;

console.log(b1.y);//40, assign
console.log(b2.y);//30

console.log("use object rather than primitive**************************")
B.prototype.z = {
	t: 50
};
console.log(b1.z.t); //50
b1.z.t = 60; // 1. find b1.z (whatever before t) 2. assign 60 to t
console.log(b2.z.t);// 60!!!!!!!!!!!!!!!!!!!!
console.log(B.prototype);

console.log("*************prototype chain****************")
// prototype chain.
// b1 -> B.prototype -> Object.prototype -> null
 
// B -> Function.prototype -> Object.prototype -> null

// "abc", new String("abc")
// "abc" -> String.prototype -> Object.prototype -> null

String.prototype.reverse = function(){
	// there are many methods in javascript
	// indexof
	// split

	//["a", "b", "c"]
	//["c", "b", "a"]
	//"cba"
	return this.split('').reverse().join('');
};

console.log("abc".reverse());

console.log("**************Inheritance*******************")

function Parent() {
	this.name = "Parent";
}

Parent.prototype.sayHello = function(){
	return this.name;
};

function Child(){
};

// ***examm point for writing heritance in JS (basic version)
var p = new Parent();
Child.prototype = p; // overwrite the existing Child.prototype to p

// **********

var c = new Child();
// c -> Child.prototype = p -> Parent.prototype  -> Objecct.prototype -> null
console.log(c.name); // "Parent"
console.log(c.sayHello()); // "Parent"

var c1 = new Child();
console.log(c.name === c1.name); //same
console.log(c.sayHello === c1.sayHello) //same


// ****************************Most important part in JS
function Base() {
	this.name = "Base"; // this -> {}. {name: "Base"}

}

Base.prototype.sayHello = function(){
	return this.name;
}

//******************************************************
function Sub() {//Step 2: this = {}
	//Step 3: {}.__proto__ = Sub.prototype;
	Base.call(this); 
	// 4. this -> {} // Base.call({})
	// Base(), it will point to global, which is not what we want
	// 5. return {name: "Base"};
}

Sub.prototype = Object.create(Base.prototype); // {} -> {}.__proto__ = Base.prototype
Sub.prototype.constructor = Sub; // Constructor reset, otherwise it will show as "Base"
// s -> Sub.prototype = {} -> Base.prototype -> Object.prototype ->

var s = new Sub(); //Step 1: {}

console.log(s); // output an object: Sub {name: "Base"}

console.log(JSON.stringify(s)); // output an object wrapping into a string format


// **********check if Base.prototype or Sub.prototype is on the prototype Chain of s

// method one : instanceof
console.log(s instanceof Sub);
console.log(s instanceof Base); // limitation: must be a function


// method two : isPrototypeOf
console.log(Base.prototype.isPrototypeOf(s)); //true
