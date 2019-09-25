// never seen in interviews before, but better to know :)
console.log('*****************JS Object Property descriptor and object status********************');

// property descriptors: emumerable, writable, configurable

var alice = {
	name: "Alice"//all 3 descriptors are true
};
alice.name = "Alice1";

// Enumerable: I can access to all of them using a for..in loop. Also, enumerable property keys of an object are returned using Object.keys method.
// Writable: I can modify their values, I can update a property just assigning a new value to it: ob.a = 1000;
// Configurable: I can modify the behavior of the property, so I can make them non-enumerable, non-writable or even non-cofigurable if I feel like doing so. Configurable properties are the only ones that can be removed using the delete operator.

// all 3 descriptors default to be false
// http://arqex.com/967/javascript-properties-enumerable-writable-configurable
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

Object.defineProperty(alice, "salary", { //descriptor object
	value: 1000,
	enumerable: true,  
	configurable: true

});

console.log(alice.salary); // 1000, value
console.log(Object.keys(alice)); //[ 'name', 'salary' ]

console.log('*********************emumerable***********************'); 

// emumerable
for (var key in alice) {
	console.log(key);
}

console.log('*********************writable************************'); 
// writable
alice.salary = 2000;
console.log(alice.salary);//salary still 1000 because writable is false in default

console.log('*********************configurable*********************'); 
//configurable
Object.defineProperty(alice, "salary", { //descripter object
	writable: true
});

alice.salary = 3000;
console.log(alice.salary);

console.log('*************status: extensible, sealed, frozen****************')
//status: extensible, sealed, frozen

//extensible: add new property, 
//dynamically add to new propertos
var obj = {};
obj.x =100;

console.log("extensible ",Object.isExtensible(obj));
Object.preventExtensions(obj);

console.log('*********************'); 
console.log("extensible ",Object.isExtensible(obj));
obj.y =200;
console.log(obj) //{ x: 100 }


// sealed: can't add/delete property
var obj1 = {
	x:100
}

console.log("sealed", Object.isSealed(obj1)); //false
Object.seal(obj1);
console.log("sealed", Object.isSealed(obj1)); //true
obj1.y = 100;
console.log(obj1); //{ x: 100 }

delete obj1.x;
console.log(obj1);//x will be saved because it has been sealed


// frozen: can't add/delete/update property
var obj2 = {
	x: 100
};
console.log("frozen: "+Object.isFrozen(obj2)); //false
Object.freeze(obj2);
console.log("frozen: "+Object.isFrozen(obj2)); //true
obj2.x = 200;
console.log(obj2); // { x: 100 }






