
let grade = 96 ;
if(grade >= 101){
    console.log(`Average : ${grade} (Invalid Grade)`);
}else if(grade >= 98 && grade <= 100){
    console.log(`Average : ${grade} (With Highest Honor)`);
}else if(grade >= 95 && grade <= 97){
    console.log(`Average : ${grade} (With High Honor)`);
}else if(grade >= 90 && grade <= 94){
    console.log(`Average : ${grade} (With Honor)`);
}else if(grade >= 75 && grade <= 89){
    console.log(`Average : ${grade} (Passed)`);
}else {
    console.log(`Average : ${grade} (Failed)`);
}
