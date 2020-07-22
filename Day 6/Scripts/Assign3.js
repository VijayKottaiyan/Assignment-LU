let name = prompt("Enter Your Name",'Stranger'),
hName = document.getElementById('userName'),
clock = document.getElementById('clock');
hName.innerHTML += ` ${name}. Thank You For Visiting`;
dispClock= ()=>{
    let date = new Date(),
    time = date.toLocaleTimeString();
    clock.innerHTML = time;
}
dispClock();
setInterval(dispClock,1000);
const darkMode = document.getElementById('darkmode');
// console.log(darkMode);
darkMode.onclick = ()=>{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}