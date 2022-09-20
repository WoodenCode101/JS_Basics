//if statement
var a=5;
var b=10;
if(a < b){
    console.log("True")
}
//or
var a=5;
if(a < 10){
    console.log("True")
}
//or
if(5<10){
    console.log("True")  //ekhane direct if er moddhe lekha hoyeche kono var neoa hoini
}


//else condition, obossoi if er oppor dependant
var a=5;
var b=0;
if(a<b){
    console.log("True")
}
else{
    console.log("False")
}


// else if :1000 times o use kora jabe 
var a=5;
var b=5;
if(a>b){
    console.log("a boro")
}
else if(a<b){
    console.log("b boro")
}
else {
    console.log("dutoi soman")
}


//switch statement
//Switch statement er kaj holo just j sorto ta deboo seta miliyew dakha
//if statement r switch statement pray ak e, shudhu difference gulo holo:
//1-if e sorto gulo perinthesis er moddhe deoa hoy r switch e carly braces er moddhe case likhe trpr lekha hoy
//2-if er khetre j sorto ta debo seta jodi akbar mile jay trpr o r kichu dekhbena but switch mile jaoar poreo sob sorto gulo dekhbe jotokhon na break apply korbo

var sum=0;  //var likhe sei var tar name ta switch e deoa jabe or switch(10){...}erokom o kora jabe.
switch(sum){
    case 10:
        console.log("currect");
        break;
    case 0:
        console.log("now in 0");
        break;
    case 5:
        console.log("now in 5");
        break;
    default:
        console.log("meleni");//jodi kono sorter sasthe na mele tale default dakhabe
}
//j sorter sathe milbe seta show korbe
//jodi break gulo kete die run kore dekhi tale j sorto ta mile jabe tarpor theke sobkota output debe karon sobkota read kore switch statemnent