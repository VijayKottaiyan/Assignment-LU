let posNum =[], decision;
do{
let num=prompt(`Enter a Number To add in the array`);
posNum.push(num);
decision = confirm("Do you want to add another number to the array");
}while(decision==true);
console.log(`Your Array is ${posNum}`);
let oddArr = posNum.filter(el=>{
    if(el%2!=0){
        return el;
    }
});
console.log(`The Array of Odd Number is ${oddArr}`);
oddArr = oddArr.map(val=>{
    // flush(num);
    return val = val**3;

})
console.log(`The Cubes of the Odd Numbers are ${oddArr}`);