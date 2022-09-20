//scope mainly 3 types er. Global, Local/function, block scope.


var frndName = "sayeed sarkrar"; //global scope:jeta sob jayga theke access kora jabe...ei j var ta baire nilam ,etake sob jayga thke access kora jabe.but jodi ami function er vitore var ni tale shudhu ota function er vitore e access kora jabe .orthat function er vitore console.log korlei output paoa jabe or baire paoa jabenna.ota local scope.
console.log(frndName);

function me(){
    console.log(frndName);
}
me()



function me(){
    var Name = "sayeed"; //local scope or function scope
    console.log(Name); 
}
me()
// console.log(Name); //eije oi var take function er vitore niyechi tai bairre console.log korle hobena.



//block sccope: let block scope er kaj kore, seta ES6 e bpojha jabe. akta second bracet er moddhe let dile sei let tar output shudhu oi bracet er moddhe console.log korlei paoa jabe tar baire korle paoa jabena.

{
    let a = "sayeed";
    console.log(a);
}
// console.log(a); // Block scope.