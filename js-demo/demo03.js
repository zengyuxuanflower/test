// JS Object
// April 4th
// Object
// Array
// Date
// Error
// Function
// RegExp

var alice = {
	name: 'Alice',
	age: 20,
	address:{// object can also be a property
		city: "Princeton",
		state: "NJ"
	},//address is an object, since value can be anything!
	sayHello: function(){//sayHello is a function, since value can be anything!
		return "Hello, " + this.name; //this will point to alice
	}
};

console.log(alice.sayHello()); //"Hello, Alice"

var keys = Object.keys(alice);

console.log(keys); //[ 'name', 'age', 'address', 'sayHello' ]

// function, array are objects!


// map, reduce, filter, sort...

 //forEach function: used to iterate over the array
keys.forEach(function(value, index){ // var index = "name"
// "name", 0
// "age", 1
	console.log("value:");
	console.log(value);
	console.log("index:");
	console.log(index);	

	// console.log(alice[value]);
	if (typeof alice[value]==="function"){// here value == 'sayHello'
		console.log(alice[value]()); //add () since its a function
	}

	else{
		console.log(alice[value]);
	}
});

// for(int i = 0; i < keys.length; i++){
	// console.log(alice[keys[i]]);
// }

console.log("******keys vs getOwnPropertyNames**************************");
// keys vs getOwnPropertyNames

//identical
console.log(Object.keys(alice)); 

console.log(Object.getOwnPropertyNames(alice)); 


console.log("*****************array****************************************");
var array = [1, "a", false, {}, function(){}]; //create array using array literal, you can put anything in js array
console.log(Object.keys(array)); // only return all emumrable properties for the array
console.log(Object.getOwnPropertyNames(array)); // has an additional properties 'length', namely return all the properties

for( var key in array) { // use for in loop to get emumerable properties
	console.log(key); // 0, 1, 2, 3, 4
}

console.log("************default：accesor and mutator***************************");
// accesor and mutator (getter and setters)

var bob = {
	_name: 'Bob',// default：using a "_" before a property, 
	// it indicates it's a private property, which cannot be used directly
	
	get name(){
		return this._name;
	},
	set name(n){
		this._name = n;
	}
}

console.log(bob._name); 
console.log(bob.name);
bob.name = "new name";
console.log(bob.name);// name does not change the _name, 





