// JS prototype
// April 5th 

//inheritance betwwen objects.
var a = {
	x:100
};
var b = {};
 // b.__proto__ = a; // b -> a, a will be on the prototype chain of b

Object.setPrototypeOf(b, a);
console.log(b.x); // 100

console.log(a.isPrototypeOf(b)); // true, cannot use instanceof here because a is not a function

console.log("**************************************************************************")

function Shape(){
	this.x = 0;
	this.y = 0;
}

Shape.prototype.move = function(x,y){
	// this->p
	this.x = x;
	this.y = y;
}

function Triangle(){
	Shape.call(this);//like super in Java

}

//inheritance: Triangle -> Shape
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;



var t = new Triangle();
t.move(1,2);
console.log(t);


function Point() {

}

Point.prototype.move = function(x,y){
	Shape.prototype.move.call(this, x, y); // this -> p
};

var p = new Point();
p.move(3,3); 
console.log(p); // {x:3, y:3}