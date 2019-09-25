console.log("**********Problem 1*********");

const assignments = [
{city: 'San Jose', Building:'10'},
{city: 'San Jose', Building:'20'},
{city: 'Sunnyvale', Building:'30'},
{city: 'Sunnyvale', Building:'I am not a number!'},
{city: 'Sunnyvale'},
{city: 'Sunnyvale', Building:'50'},
{city: 'Sunnyvale', Building:'60'},
{city: 'San Jose', Building:'90'}
];


result = assignments.filter(function(val){
    return (val.city === 'Sunnyvale' && isNaN(parseInt(val.Building))=== false)
}).map(function(val){
    return val.Building = parseInt(val.Building)
}).reduce(function(a,b){
    return a+b;
});

console.log(result);


console.log("**********Problem 3*********")

function Person(first,last){
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.sayHello = function(){
    
    return this.firstName + " " +this.lastName;
}



function Student(first,last, score){
    Person.call(this,first, last); 
    this.score = score;
};

// var p = new Person('John','Doe');
// Student.prototype = p;

Student.prototype = Object.create(Person.prototype); // {} -> {}.__proto__ = Base.prototype
Student.prototype.constructor = Student;

var s = new Student('John','Doe', 98);

console.log("**********test*********")
console.log(s); 
console.log(s.firstName); 
console.log(s.score); 
console.log(s.sayHello()); 

console.log("**********Problem 4*********")

function MyClass() { 
    this.x = 100; 
    x = 'def';
    
    console.log('1: ', typeof getX);

    this.getX = function(){
        console.log('2: ',this.x);
        console.log('3: ',x);
        getX();
    };

    var x = 'abc';
    console.log("########")
    var getX = function(){
        console.log('4: ',this.x);
        console.log('5: ',x);
    };
    console.log('6: ', typeof getX);
}

