// var is the keyword used to declare variables. It is Function-scoped
var name = "vijay";
var age = 20;
var city = "Chennai";
console.log({name, age, city});
{
    // let is also used to declare variables but it is a block-scoped
let name = "seenu";
console.log("This is LET declaration..", name);
}
name = "vj";
console.log("This Changed var", name)
//const is used to declare constant variables. Once declared they cannot be changed.
const number = 14; //My Birthday date BTW

