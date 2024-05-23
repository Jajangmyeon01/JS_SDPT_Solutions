// Reversed 
/*
let names = ["Gen", "Anna", "Lucy", "Betty", "Justin"]
let i = names.length-1;

while(names[i]){
    console.log(names[i]);
    i--;
*/
    let names = ["Gen", "Anna", "Lucy", "Betty", "Justin"]
    let i = 0;
    let search = "Lucy";
    
    while(names[i]){
        if(names[i] === search){
            console.log(names[i]);
            break;
        }
        i++;
    /*
    if(i === 1){
        break;

    }
    */

    let a = 0;
    do{
        console.log("Hello");
    }
    while(a > 5){
        console.log("This is not true");
        a++;
    }


}           