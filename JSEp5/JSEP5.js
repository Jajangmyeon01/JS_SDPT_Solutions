let names = ["Gen", "Philip", "Panda", "Leo", "Clara"];
let numbers = [10, 20, 30, 40, 50];
let mixed = [true, 50.42, "Anna"];
alert(names.length);
alert(names[2]);
// alert([names.length-1]);
let cars = ["Toyota", "Honda", "Mitsubishi", "Chevrolet"];
// Changing the Value;
cars[1] = "Ford";
alert(cars[1]);
// Adding value on the last //
cars[4] = "Mercedez";
alert(cars);
// Adding value on the last using Push //
cars.push("BMW");
alert(cars);
// Adding value on the first using Unshift //
cars.unshift("Hyundai");
alert(cars);
// Deletes the value using length //
cars.length = 4;
alert(cars);
// Deletes the last value using Pop //
cars.pop();
alert(cars);
// Deletes the first value using Pop //
cars.shift();
alert(cars);
// Gets a part value in the array using slice //
cars.slice(0, 1);
alert(cars);