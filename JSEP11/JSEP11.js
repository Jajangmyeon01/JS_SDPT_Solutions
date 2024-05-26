let names = {
    pets:{
      1:{
        name: "Kobe",
        type: "Dog",
        breed: "Shiba Inu"
      },
      2:{
        name: "Bubbles",
        type: "Cat",
        breed: "Siamese"
      }
  
    },
    fruits:{
       1:{
        name: "Apple",
        type: "Fuji",
        price: 39
       },
       2:{
        name: "Banana",
        type: "Lakatan",
        price: 63
       }
    
    },
    hobbies: ["Coding", "Playing", "Eating"],
    gender: "Male",
    firstName: "Gen",
    lastName: "Vergara",
    age: 22
};
// Read //
console.log(names);
console.log(`${names["firstName"]} ${names["lastName"]}`);
console.log(`I'm ${names.age} years old and a ${names.gender}`);
console.log(`My Hobbies are ${names["hobbies"][0]}, ${names["hobbies"][1]}, ${names["hobbies"][2]}`);
console.log(`My Pet is ${names["pets"][1]["name"]}, He is a ${names["pets"][1]["type"]}, My Dog breed was ${names["pets"][1]["breed"]}`); 
console.log(`My Pet is ${names["pets"][2]["name"]}, She is a ${names["pets"][2]["type"]}, My Cat breed was ${names["pets"][2]["breed"]}`);
console.log(`My Favorite fruit is ${names.fruits[1].type}, ${names.fruits[1].name}, price: ${names.fruits[1].price}`);
console.log(`My another favorite fruit is ${names.fruits[2].type}, ${names.fruits[2].name}, price: ${names.fruits[2].price}`);

// Write //
/*
names["firstName"] = "Anna";
names["gender"] = "She";
console.log(names);
names["MiddleInitial"] = "C";
console.log(names);

names.firstName = "Cedrick";
console.log(names);
names.gender = "He";
console.log(names);

names.hobbies[1] = "Sleeping";
console.log(names.hobbies);
*/

let strNames = JSON.stringify(names);
console.log(strNames);

let strPerson = `{"firstName" : "Gen", "lastName": "Vergara", "age" : 21}`;
let person = JSON.parse(strPerson);
console.log(person);    

let cars = [
    {
      carName: "Honda",
      model: "Hutchback",
      variant: "Type R"
    },
    {
      carName: "Chevrolet",
      model: "Electric-Sedan",
      variant: "Camaro"
    },
];
console.log(`${cars[0].carName} ${cars[0].model} ${cars[0].variant}`);
console.log(`${cars[1].carName} ${cars[1].model} ${cars[1].variant}`);

console.log("");

console.log(`${cars[0]["carName"]} ${cars[0]["model"]} ${cars[0]["variant"]}`);
console.log(`${cars[1]["carName"]} ${cars[1]["model"]} ${cars[1]["variant"]}`);