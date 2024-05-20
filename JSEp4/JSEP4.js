let userName = "Gen Exus";
let len1 = userName.length;
alert(`Output of length name : ${len1}`);

let userPassword = "genexus01";
alert(`Output of another length name : ${userPassword.length}`);

let accessName = "Anna Kendrick";
alert(`Output of accessing name using index : ${accessName[5]}`);    

let accessName2 = "Anna Kendrick";
alert(`Output of accessing name in last word : ${accessName[accessName2.length-1]}`);    

let upper = "Dave";
alert(`UpperCase : ${upper.toUpperCase()}`);

let lower = "Dave";
alert(`LowerCase : ${lower.toLowerCase()}`);

let trim1 = " Dave ";
trim1 = trim1.trim();
alert(`Trim : ${trim1.length}`);
/*
let trimend = " Dave ";
trimend = trimend.trimEnd();
alert(`TrimEnd ${trim.length}`);
*/
let rep = "This is a sample text, A text is a written word";
rep = rep.replace("text", "sentences"); //replaceAll
alert(`Replace word : ${rep}`);

rep = rep.slice(0,4);
alert(`Slice word : ${rep}`);

// String Template Literals //
let btick = `'Backtick' : "Gen"`;
alert(btick);

let btick2 = "Gen";
alert(`Hi, ${btick2}!`);

let num1 = 10;
let num2 = 40;
let sum = num1 + num2;
alert(`Sum Answer of ${num1} + ${num2} = ${sum}`);


let num3 = 200;
let num4 = 100;
alert(`Sum Answer of ${num3} + ${num4} = ${num3 + num4}`);