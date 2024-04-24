//variables
var a; //declarando
var b; // declarando y reasignando
b = "bb"; //reasignacion
var a = "aa" //redeclaracion

//global scope
var fruit = "Apple"; // global

function bestfruit(){
    console.log(fruit);
}

bestfruit();

function countries(){
    country = "colombia"; // si no le pones var, en automatico es var
    console.log(country);
}

countries();
console.log(country);