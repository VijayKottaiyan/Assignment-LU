let multiplicant = prompt(`Enter the Multiplicant`,1),
result= document.getElementById('result'),
value;
let mul= document.getElementById('mul');
// console.log(mulT);
mul.innerHTML+=` ${multiplicant}`;
for (let i = 1; i <= 10; i++) {
    value=multiplicant*i;
    result.innerHTML += `<h4>${multiplicant}x${i}=${value}<br></h4>`;
}
 