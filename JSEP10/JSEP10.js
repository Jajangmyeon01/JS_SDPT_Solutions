console.log('(For Loop)');
let names1 = ["Gen", "Anna", "Justin", "Kate"];

for(let i = 0; i < names1.length; i++){
    console.log(`Output of names1 : ${names1[i]}`);
}
console.log('');


// Reversed
console.log('(For Loop Reversed)');
let names2 = ["Gen", "Anna", "Justin", "Kate"];

for(let o = names2.length-1; o >= 0; o--){
    console.log(`Output of names2 : ${names2[o]}`);
    if(o === 1) break;
}
console.log('');

// For/In Loop
console.log('(For/In Loop)');
let names3 = ["Gen", "Anna", "Justin", "Kate"];

for(let p in names3){
    console.log(`${parseInt(p)+1}. ${names3[p]}`);
}
console.log('');

// For/Of Loop
console.log('(For/Of Loop)');
let names4 = ["Gen", "Anna", "Justin", "Kate"];
let k = 1;
for(let person of names4){
    console.log(`${k}. ${person}`);
    k++;
}