//var er moddhe confirm neoa jay , var er moddhe alert neoa jay, var er moddhe prompt neoa jay,var er moddhe function neoa jay sob neoa jay.

//jokhon akta variable(var) er vitore akta function declare kora hoy tokhon take bole function expression.

//ex:  var x = function(y){something;};
//funcion expression hoisted hoina karon function toiri krar age etake declare kora jayna.


var FunExpression = function callMe(){
    console.log("Call Back");
}
FunExpression() //function expression korar fole function er name ta r callMe thakbena ,, tokhon var er name ta e hoye jabe function er name r ota die e output asbe.
//callMe ta tokhon anonymus function hye jabe.. anonymous function mane name-hin function.
//ekhetre callMe ta na dileo hobe karon akon otar kono kaj nei

var FunExpression = function(message,message1){
    console.log(message,message1);
}
FunExpression("I Love CSS","I Love JS");
FunExpression("I Love CSS"+"  I Love HTML","I Love JS"); //eivabe + use kore onkgulo vaue deoa jay.