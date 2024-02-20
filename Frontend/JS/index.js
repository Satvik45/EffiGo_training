
console.log('hello world');


let interestRate= 0.3;
--interestRate;
console.log(interestRate);
sum = interestRate+1;
console.log(sum);


let name='satvik';
let age = '30';
let isApproved= false;
let firstName= undefined;


let person = {

    namee: 'Satvik', 
    agee: 30
};

console.log(person);
person.namee='aryan';
console.log(person.namee);
person['namee']= 'abya';
console.log(person.namee);


let selectedColors = ['red', 'blue'];

selectedColors[2]=1;
console.log(selectedColors);
typeof selectedColors;


function greet(nameee){
    console.log('hellooooooo  '+ nameee);
}

greet('satvik');

function square(number){
    return number*number;
}

let number = square(2);
console.log(number);
console.log(square(4));

// var num = prompt("enter num");
// let num = square(num);
// console.log(num);

        var userInput = prompt("Enter a number:");

        // Convert the input to a number
        var num = parseFloat(userInput);

        var square = num*num;

        alert(square);
        console.log(square);