let grade = {
    dataStruc : 88,
    Literature : 90,
    dBase : 95,
    AppDev : 97,
    InfoAs : 85
};
let average = 0;
for(let i in grade){
    console.log(`${i} ${grade[i]}`);
    average += grade[i]
}
average /= Object.keys(grade).length;
console.log(`\nTotal Average : ${average}`);
