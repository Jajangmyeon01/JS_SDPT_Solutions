/*
let x = 5;
let y = 12;

alert(`Strict (Equals) : ${x === y}`);

alert(`Not Equals : ${x != y}`);
 
alert(`Strict (Not Equals) : ${x !== y}`);

// Comparison //
alert(`Greater than : ${x > y}`);
alert(`Less than : ${x < y}`);
alert(`Greater than (Equals) : ${x >= y}`);
alert(`Less than (Equals) : ${x <= y}`);
*/

// If Statement //
let age = 10;

if(age >= 18){
    console.log("Legal Age!");
}
    console.log("Not Legal Age!");

// If Else Statement //
let age2 =  17;

if(age2 >= 21){
    console.log("You can pass!");
}else{
    console.log("You cannot pass!");
}
    console.log("Thank you!");

// Else if //
let age3 = 17;

if(age3 >= 18 ){
    console.log("Your age is Legal");
}
else if(age3 <= 0){
    console.log("Invalid Age");
}
else if(age > 0){
    console.log("Minor Age");
}