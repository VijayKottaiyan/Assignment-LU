const student = {
    name : `helsinki`,
    age : 24,
    projects : {
        diceGame : `Two player dice game using JavaScript`
    } 
}
const {name, age, projects:{diceGame}} = student ;
console.log(`${name} of age ${age} is playing a ${diceGame}`);