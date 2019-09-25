// JS Promise
// April 5th


function task1() {
	console.log("Executing task1");
	// throw new Error("i am an Error");
}

function task2() {
	console.log("Executing task2");
}

function task3() {
	console.log("Executing task3");
}



// Promise: handle asynchronous actions -> may not happen immediately but in the future, need a period of time

// different status: pending, resolved, rejected.

// explaination with coffee shop:
// after swiping card, you get a promise: you will get a cup of coffee

// making coffee in the process: pending

// if everything works fine and get the coffee: resolved

// no milk so coffee not dilivered: rejected

// 500 -> task1 -700 -> task2 -> 1000 -> task3

function createPromiseForTask1(){
	return new Promise(function(resolve, reject){ // both resolve, reject are methods
		setTimeout(function(){ // asynchronous action
			try{
				task1();// action is done
				resolve(100); // promise will be resolved
			}
			catch(e){
				reject(); // promise will be rejected
			}		
			
		},500);

	});
}



function createPromiseForTask2(){
	return new Promise(function(resolve, reject){ // both resolve, reject are methods
		setTimeout(function(){ // asynchronous action
			try{
				task2();// action is done
				resolve(200); // promise will be resolved
			}
			catch(e){
				reject(); // promise will be rejected
			}		
			
		},700);

	});
}

function createPromiseForTask3(){
	return new Promise(function(resolve, reject){ // both resolve, reject are methods
		setTimeout(function(){ // asynchronous action
			try{
				task3();// action is done
				resolve(300); // promise will be resolved
			}
			catch(e){
				reject(); // promise will be rejected
			}		
			
		},1000);

	});
}

// return a promise and it will start to execute the async action

var t1Promise =  createPromiseForTask1(); // t1Promise is a promise object

// register callbacks for promise
// resolve -> success
// reject -> failure
t1Promise.then(function(data){
	console.log("t1 success!");
	console.log(data);
	return createPromiseForTask2(); // promise for task2

}, function(e){// failure callback
	console.log("t1 fail!");
	console.log(e);

}).then(function(data){
	console.log("t2 success!")
	console.log(data);
	return createPromiseForTask3(); // promise for task3

}).then(function(data){
	console.log("t3 success!")
	console.log(data);	
});












