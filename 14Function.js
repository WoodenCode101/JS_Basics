//function chara onno kichu die korar somoy bar bar variable likhte hobe ar baar bar  calculation korte hobe. but function nie korle variable gulo akbar likhe Fun() er moddhe j kono calculation jotobar icha use korte par.
//function likhe fun tar akta name dite hobe jate oi name ta dhore ore cal kora jay. then() then{}

function funName(){
    console.log("Hellow")
}
funName() //call korle tobei ans debe nato debena. funName jotobar likhbo totobar output dakhabe.


//perinthesis er moddhe jeta lekha hobe setake parameter bola hoy .ota variable hisabe e kaj kore.r function er pore j lekha ta seta variable er name hisabe kaj kore.
function fun(num1, num2){     
    console.log(num1 + num2);    
}
fun(50, 50);
fun(400, 200) //eivabe jotogulo ichha totogulo alada alada bar korte parbo.





//jodi chai j jokhon call korbo shudhu tokhon e  result ta show koruk tahole return use korte hobe and fun er pore console use korte hobe.Sekhetre shudhu jokhon console use korbo  tokhon e result shoe korbe nato korbe na.
function fun(num1){
    var total=num1*2;
    return total;
}
var a = fun (20);   //ekhetre akta variable nite hoy
console.log(a)

var b = fun (30);
console.log(b)

//ekhane new atta console.log likhe ami tar moddhe ja ichha jotobar ichha bar korte parbo.
console.log(a+a+a+b)
console.log(a*b)
console.log(a%b)
console.log(9*a+b)
console.log((a+b)+(a*b)) //etc
