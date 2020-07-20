let answer =confirm(`Do You Agree?`);
let reply = ()=>{
    if(answer){
        console.log(`You Agreed.`);
    }
    else{
        console.log(`You cancelled the Execution.`);
    }
}
reply();