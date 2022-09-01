// create object using object literals
const player = {};
player.name = 'Shakib Al Hasan';
player.specilaty = 'Number One Cricket Player';
player.bat = function(){
    // console.log('swing your bat');
}
//  console.log(player);
player.bat(); 

const student = {name: 'pandey', job:'khaye andey',
ball: function()
{
    console.log('Throw the ball')
},
salary: 10000

 
}

// 2. object constructor

const person = new Object();
 
// console.log(person);

// 3. object create method

const item = Object.create(player);
// console.log(item.name, item.specilaty);
// console.log(item);

// 4. class
class person1{
    name = 'Shakib';
    address  = 'dhaka';
    constructor(age)
    {
           this.age = age;

    }
}
const person2 = new person1(56);
console.log(person2);

// 5. Function

 function car(model, price){
    this.model = model;
    this.price = price;
 }
 const tesla = new car('elon', 32);
