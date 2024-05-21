let registered = true;
let age = 18;

if(registered){
    if(age >= 18){
        console.log("Valid Voter");
    }else{
        console.log("Invalid Voter");
    } 
}
if(!registered){
    if(age >= 18){
        console.log("Register First");
    }else{
        console.log("Non Voter");
    }
}
    

