console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0);  // true

console.log(NaN == 0); // false
console.log(false == 0); // true


ob1 = {'a': 1, 'b': 2}
ob2 = Object.create(ob1);
console.log('ob1 and ob2: ', ob1 === ob2);
console.log('ob1 and ob2: ', ob1 == ob2);

array = ['112', 'abc'];
console.log(array[0].length);


var str = 'I love you'
console.log(str.substr(-3));
// console.log(str*3);
// string.repeat()


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result=[];
  var sub;
  for (var i = 0; i<arr.length; i=i+size)
    {sub = arr.slice(i, i+size);
	console.log(sub);

	if(result.length == 0){
		result[0] = sub;
	}
	else{result.push(sub);}
	}
	console.log(result);
  return result;
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

console.log(isNaN(parseInt("A")));

function mutation(arr) {
  var set1 = new Set(arr[0].toLowerCase().split(""));
  var set2 = new Set(arr[1].toLowerCase().split(""));
  console.log(set1);
  console.log(set2);
	var flag = 1;
  set2.forEach(function(element) {
    
    if(set1.has(element)==false){
    	console.log(element);
      	flag=0;;
    } 

  });
  return flag ==1;
}

console.log(mutation(["hello", "neo"]));
// false, null, 0, "", undefined, and NaN.
var y=null;
var x;
console.log('&&&&&')
console.log(false==0);
console.log(y==null);
console.log(""==0);
console.log(typeof x=="undefined");


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(val){
    return val !=0 && val!= null && typeof val!= "undefined" ;
  });
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));

console.log(isNaN("ate"));
console.log(typeof "ate");


console.log(String.fromCharCode(65, 77))
console.log('############################')
function destroyer(arr) {
  // Remove all the values
  arr = arguments[0];
  console.log(arr);
  var targets = Array.prototype.slice.call(arguments, 1);
  console.log(targets);
  var arr = arr.filter(function(val){
    return arr.indexOf(val.id) === -1;  
                   });
  console.log(arr);
  return arr;
}

console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3));


console.log("my exam:   ")

var peoples = [
    {
        name: 'Bob',
        age: 21
    },
    {
        name: 'Jack',
        age: 25
    },
    {
        name: 'Alice',
        age: 22
    },
    {
        name: 'Alex',
        age: 23
    },
    {
        name: 'Bruce',
        age: 31
    },
    {
        name: 'Jim',
        age: 12
    },
    {
        name: 'Adam',
        age: 33
    }
];

// Only change code below this line.

var newArray = peoples.map(function(val){
  return val.age;
});
var av_age = newArray.reduce(function(a,b){return a-b});
var one_record = peoples.filter(function(val){
  return val.name == 'Bob';
});
console.log(newArray);
console.log(av_age);
console.log(one_record);

// 



console.log("%%%%%%%%")
var myClass = new MyClass(); // invoke using new, // 1. {}, closure: {y: "abc"}
console.log("!!!!!!!!!")
myClass.getX();

// hoisting
console.log('test1: ',testdata1);

var testdata1;
testdata1 = 5;

// console.log('test2: ',testdata2);

// var testdata5 = 5; // throw error

// Promise:

// Promise is a preferable way to handle asynchronous actions. We wrap async operations in a promise and resolve/reject with optional values after async operation returns. 
// Afterwards the pre-registered success or failure in promise.then() will be executed automatically. We can chain promise to avoid callback hells.

// JS is single threaded. Normally we use callbacks to handle async events. However we may lead callback hells if we want to write callback functions for dealing with multiple async events. 

function task1(){
    console.log('Executing task1!')
}

function createPromiseForTask1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            try{
                task1();
                resolve(100);
            }catch(e){
                reject();
            }
        }
        ,500)
    });
}

var t1Promise = createPromiseForTask1();

t1Promise.then(function(data){
    console.log('t1 success!!');
    console.log(data);
},function(e){
    console.log('t1 failure!!');
    console.log(e)
    }); 


// jQuery:

// $("ul *:nth-child(2)")
// $("ul li: even")
// $("ul li: nth-of-type(2)")

// $("ul").append("<p>hhh</p>")
// $("<p>hhh</p>").appendTo($("ul"))

// $("ul").prepend("<p>hhh</p>")
// $("<p>hhh</p>").prependTo($("ul"))

// $("ul li").eq(2);

// remove current element itself and all the associated jQuery data
// detach: remove current element itself, but retain all the associated jQuery data
// empty: empty will remove all the children
// event propogation:
// event propagation is a process browser use to run handlers for events triggered by user actions.
// 1. Capturing: browser will scan from root to target element to execute event handlers registered for capturing phases
// 2. targeting: browser will execute event handler registered on target element
// 3. Bubbling: browser will scan all elements from target to root to execute event handlers registered for bubbling phase.

// target is the element who triggers the event.
// currentTarget is the element who is currently handling the event



