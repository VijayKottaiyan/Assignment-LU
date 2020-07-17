let mark = prompt(`Enter Your Mark`,`50`);
console.log(`Grade System:
80 and Above - A
50 to 79 - B 
Below 50 - C`);
let grade = (mark >= 80) ? `A` : (mark < 80 && mark >= 50) ? `B` : `C`;
console.log(`Mark is ${mark} and Grade is ${grade}`);

