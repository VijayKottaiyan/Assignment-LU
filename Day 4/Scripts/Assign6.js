let userVal;
do{
    userVal= prompt(`Enter a number Greater than 100`);
    if(userVal==null || userVal=="") 
    break;
}while(userVal<100);
