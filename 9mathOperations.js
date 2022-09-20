var num1=10;
var num2=5;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)


// other functions

// absolute function : negative e thakle positive kore debe
var num1=-20;
var absolute = Math.abs(num1)
console.log(absolute)


// round function : asonno man er moto kaj kore jamon 0.4 thakle 0 kore debe r 0.5 thakle 1 kore debe
var num1=0.4;
console.log(num1=Math.round(num1))
//othoba evabe o kora jete pare
var num1=0.5;
var RoundKorbo=Math.round(num1)
console.log(RoundKorbo)


// ceilling function : celling mane upore. joto kome thakuk na kano boro sonkhata te nie jabe. mane 1.1 thakle o 2 te nie jabe 1.9 thakle o 2 te nie jabe
var num1=0.00001;
var celing=Math.ceil(num1)
console.log(celing)

var num1=0.9;
var celling=Math.ceil(num1)
console.log(celling)


//floor function : floore mane mejhe. joto beshi thakuk na kano boro sonkhatake choto te nie jabe. mane 1.1 thakle o 1 te nie jabe 1.9 thakle o 1 te nie jabe
var num1=0.9;
var celling=Math.floor(num1)
console.log(celling)

var num1=0.1;
var celling=Math.floor(num1)
console.log(celling)


//random function : 0 theke 1 er moddhe je kono akta random number k choose kore
var lottery =Math.random();
console.log(lottery) //ans esche 0.7517278043554092, proti bar j kono aste pare

//jodi chai er value ta 100 ba 1000 ba anything value i want tar moddhe show korak tahole seta gun kore dite hobe
var lottery =Math.random() *100;
console.log(lottery)


//kono kichur pore  .  deoa mane tar vitore ja ja ache seguloke call korchi, Ex: Math. mane math er vitorer jinis guloke call korchi.