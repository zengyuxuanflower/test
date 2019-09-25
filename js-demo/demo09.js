//JS Promise
// April 5th 

function task1() {
	console.log("Executing task1");
}

function task2() {
	console.log("Executing task2");
}

function task3() {
	console.log("Executing task3");
}

// *****callback hell, need to be avoided in actual working
// 500 -> task1 -> 700 -> task2 -> 1000 -> task3
setTimeout(function(){
	task1();
	setTimeout(function(){ // nested structure
		task2();
		setTimeout(function(){
			task3();
		},1000);
	},700);
},500);



// take 1000 miliseconds in total