// JS: this
// April 4th

// constructor function
// es5: use a constructor function to simulate a class and use new keyword to create an object (it is not a class! kind of a class)
function Vehicle(name){
	console.log(name);
	this.name = name; // when this -> global, global.name = name;

} 
// invoke with "new" keyword
var v = new Vehicle("BMW");
console.log(v);
//invoke without using "new" keyward, this will point to the caller of the function
var u = Vehicle("Toyota"); 
// caller here: global object

console.log(u); // undifined, here we treat Vehicle as a function without return
console.log(name); // 'Toyota', because this point to global, global.name = name

//interview point: answer in 2 parts about this keyword, with and without "new"

//interview point*****************
console.log("****************safe constructor**************************"); 
//"safe constructor" (regardless whether use "new" or not), using instanceof****************
function Person(name){
	if(this instanceof Person){
		this.name = name;
	}
	else{
		return new Person(name);// for people who forget to use new keyword to invoke
	}
}
console.log(Person("bob")); // Person: {name: 'bob'}

console.log("Q1*******************************************"); 

var bob = {
	name: 'bob',
	hello: function(){
		return "Hello, " + this.name;
	}
};
console.log(bob.hello()); //"Hello, bob"
var helloFunc = bob.hello; 
console.log(helloFunc()); // "Hello, Toyota", global will be the caller, since global.name = 'Toyota'
// ->"Hello, undifined" if no code before

console.log("Q2*******************************************"); 

// *Q2*************change binding of this. from caller -> bob
// apply, call, bind
console.log(helloFunc.apply(bob)); // force JS to use bob
console.log(helloFunc.call(bob)); // same effect as apply here
console.log(helloFunc.bind(bob)()); // the function will not excute, need to excute manually


console.log("Q3*******************************************"); 
// *Q3*************
var order = {
	price: 100,

	calculate: function(){
		var that = this; //that -> this -> order
		return {
			name: 'table',
			getTotalPrice: function(qty){
				return qty * this.price ; 
				// if it is this here, it will return NaN finally

			}

		};
	},

	calculate1: function(){
		var that = this; //that -> this -> order
		return {
			name: 'table',
			getTotalPrice: function(qty, discount){
				return qty * that.price * discount ; //js will go outer scope to find "that"
				// if it is this here, it will return NaN finally
			}

		};
	}

};

var calc = order.calculate(); 
// this - > calc
console.log(calc.getTotalPrice(5)); //500? No, it's NaN

var calc1 = order.calculate1(); 

// all three methods are used to change "this" binding which are under Function.prototype
console.log(calc1.getTotalPrice.apply(order, [5, 0.8])); // parameter array, "apply" needs to wrap all parameters in an array
console.log(calc1.getTotalPrice.call(order, 5, 0.8)); // comma delimited parameters, "call" should not use array to pass parameters

console.log(calc1.getTotalPrice.bind(order)(5, 0.8)); //because it is a function, we need to pass parameters like this

// **********************************************************
function checkout(price, qty, member){
	var result = price * qty;
	switch(member){
		case "VIP":
			result *= 0.7;
			break;
		case "Premium":
			result *= 0.6;
			break;
		default:
			break;
	}
	return result;
}

console.log(checkout(100, 5, "VIP"));

console.log(checkout(100, 5, "Premium"));

console.log(checkout(100, 5, "Regular"));
// not very convenient if I want to add a new option "Super Premium" here, need to be extended

console.log("SOLID design principles:*******************************************"); 
// SOLID design principles: **********************
// open-close principle: open for extension, close for modification

var membership = { //object

	"VIP": 0.7,
	"Premium": 0.6,
	"Super Premium": 0.5
};

function checkout1(price, qty, memeber){
	// this -> membership
	// membership["VIP"]
	// if(typeof this[memeber] === "undifined"){
	// 	this[memeber] = 1;
	// }
	// ************************easy ways like below, using default value
	this[memeber] = this[memeber] || 1; //undefined || 1
	// Double pipe (||) will cast the first argument to boolean and if resulting boolean is true - do the assignment otherwise it will assign the right part.
	//Basically || checks if the value before the || evaluates to true, if yes, it takes this value, if not, it takes the value after the ||.

	// Values for which it will take the value after the || (as far as i remember):

	// undefined
	// false
	// 0
	// '' (Null or Null string)

	return price * qty * this[memeber];
}

console.log(checkout1.apply(membership, [100, 5, "VIP"]));
console.log(checkout1.apply(membership, [100, 5, "Premium"]));


