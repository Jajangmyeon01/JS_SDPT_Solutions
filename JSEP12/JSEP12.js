let cars = {
    carName: "Honda",
    color: "White",
    variant: "Type R"

};
for(let i in cars){
    console.log(`${i} : ${cars[i]}`);
}

let keys = Object.keys(cars);
console.log(keys);

for(let a = 0; a < keys.length; a++){
    console.log(`${cars[keys[a]]}`);
};
let size = Object.keys(cars).length;
console.log(size);

