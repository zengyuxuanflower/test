//JS closure
// April 4th
// the most popular question asked in JS
/*
   Closure: a function inside another function (outter).
   JS will create a closure which will hold (or retain) all the local variables 
   that are defined in outter function and used in inner function.
   Even outer function finished execution, the inner function returned from 
   outer function can still access the local variables (from closure).

   Disadvantage: may cause memory leak. 
   Closure can be used to avoid using global variables.
*/ 

console.log("eg 1: **********************************")
function outer(){
	var x = 100;
	return function inner(){
		console.log(x);	
	};

}
// can treat closure as an object

var myinner = outer(); // closure: {x: 100}
console.log(typeof myinner); // function
myinner(); // 100, will find the x in the closure, but I can only access x in myinner()

console.log("eg 2: **********************************")
function getCounter(){
	var count = 0;
	return {
		getCount: function(){
			return count;
		},
		setCount: function(c){
			count = c;
		},
		increase: function(){
			count++;
		}

	};
}

var myCounter = getCounter(); // closure: {count: 0}
console.log(myCounter.getCount());//0

//myCounter.count -> return an "undefined" object, because there's no "count" in the object

myCounter.setCount(5); // change closure: {count: 0}
console.log(myCounter.getCount()); //5

var myCounter1 = getCounter();
console.log(myCounter1.getCount());//0 because we will get a new closure every time we create a new getCounter()

console.log("eg 3:**********************************")
//final exam + homework**********************************************************************
function MyClass() { // 2. this -> {}
	this.x = 100; //  {x:100}
	var y = "abc"; // y is a local variable so not added to the object above
	var getX = function() { 
		console.log(this.x); // point to the caller (global). this -> global. undifined
		console.log(y); //"abc", go to outer scope
	};
	getX(); // it will excute the function above, nothing before the function

	this.getY = function() { // myClass->{x:100, getY:[function]}
		console.log(this.x); // this -> myClass, so 100
		console.log(y); // "abc", go to closure
	}
}
console.log("%%%%%%%%")
var myClass = new MyClass(); // invoke using new, // 1. {}, closure: {y: "abc"}

myClass.getY();
myClass.getX();

// JS is by default single-threaded

// event loop (please refer to the Youtube Video)
// https://www.youtube.com/watch?v=8aGhZQkoFbQ

// Web APIS: DOM, AJAX, settimeout
// Any of the web api will push the callback to the task queue when it's done


// The event loop job is: to look at the stack and look at the task queue
// If the stack is empty, it will take the first thing in the queue and push it onto the stack
console.log("eg 4: **********************************")
setTimeout(function(){ // callback function
	console.log("timeout 2s.") // second output, even it is "0" after, because it was pushed into the queue
}, 2000);

console.log("after timeout"); //first output

console.log("eg 4: **********************************")
// ******interview question
// get rid of local variable using closure

var increase = (function(){ // closure: {count:0}
	var count = 0;
	return function(){
		return ++count;
	};
})(); // will be excute immediately, increase will be an inner function (from return function...)

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3



console.log("eg 5: setInterval**********************************")
//setInterval/ clearInterval
//setTimeout/ clearTimeout

var myinterval = setInterval(function(){ // id for this interval
	console.log(new Date());
},1000); // it will be excuted for ever by every 2 seconds


// a way to implement clock
// use ctrl + c to exit or it will run eternally
console.log("eg 6: clearInterval**********************************")
setTimeout(function(){
	clearInterval(myinterval); //cancel interval after 5 seconds
}, 5000)

// using recursive function (will be on the stack)
// function tick(){
// 	setTimeout(function(){ // it will excute forever :(, cooment out
// 		tick()
// 	}, 10000);
// }
// tick();

for(var i = 1; i <=5; i++){
	console.log("eg 7: **********************************")
	setTimeout((function(c){ // 5*closure: {}
		// var c = i; c = 1, 2, 3... for each closure
		return function(){
		console.log(c); // i will be assigned to c
	};
	})(i), 0);
}
// but i is already 6
// Queue: [cb, cb, cb, cb, cb]


console.log("end of file.")

// sequence will be: end of file ,66666
