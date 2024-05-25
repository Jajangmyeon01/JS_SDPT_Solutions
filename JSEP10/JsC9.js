console.log("(For Loop)");
let names = ["Gen", "Anna", "Keith", "Levi", "Philip"];
let search = "anna";
let found = false;

for (let i = 0; i < names.length; i++){
    if(names[i].toLowerCase() === search.toLowerCase()){
        found = true;
            console.log(`Found : ${names[i]}`);
            break;
    }
}
if(!found){
    console.log(`${search} Not Found`);
}
console.log("");
console.log("(For/In Loop)");
for (let i in names){
    if(names[i].toLowerCase() === search.toLowerCase()){
        found = true;
            console.log(`Found Again : ${names[i]}`);
            break;
    }
}
if(!found){
    console.log(`${search} Not Found`);
}

console.log("");
console.log("(For/Of Loop)");
for(let humans of names){
    if(humans.toLowerCase() === search.toLocaleLowerCase()){
        found = true;
            console.log(`Last Found : ${humans}`);
    }
}
if(!found){
    console.log(`${search} Not Found`);
}