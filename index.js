let code1;

code1 = 7 + 3;

let code2 = (100 - 20) / 2; //delcared valuable code2
console.log(code2);

let code3 = (4 % 2) + 39;
console.log(code3);

let message = "The vault has been secured. The combination is:"; //string

let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

let codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

console.log(`${message}${codeB}`);
