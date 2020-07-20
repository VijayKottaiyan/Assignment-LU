let prime=null;
let primeRange = prompt(`Enter the Range`);
for(let i=23;i<primeRange;i++){
    if(primeRange%i==0){
      prime=false;
      break;
    }
    prime=true;
}
if(primeRange<=2){
prime=true;
}
if (prime==true) {
    console.log(`${primeRange} is a Prime Number`);
} else {
    console.log(`${primeRange} is not a Prime Number`);
}