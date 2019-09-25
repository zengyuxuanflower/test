console.log("Problem 1, case 1*************");



console.log("Problem 2, case 1*************");
var foo = {
	bar: function() {
		// console.log(this);
		return this.baz;
	},
	baz: 1
}

var f = foo.bar;
console.log(f()); // undefined

console.log("Problem 2, case 2*************");
var foo = {
	bar: function() {
		return this.baz;
	},
	baz: 1
}

var f = foo.bar;
console.log(f.call(foo)); // 1


