//variable er moddhe amra sadharanoto j kono akta value store kore rakhte pari(segulo change o korte pari), But variable er moddhe onk gulo data store kore rakha jayna .Kintu jodi ami kono object declare kori tokhon tar moddhe onk gulo data store kore rakhte parbo. Orthat akta variable e j kaj gulo kora jayna se kaj gulo korar jonno object ta toiri.

//ekhetre o same variable lekhar moto kore var likhte hobe. var er pore object tar akta name dite hobe then {} er moddhe property and property r value lekha hobe.Ekhetre khanikta CSS er moto kore likhte hobe ':' use kore. Onekta array r motoi. Array r khetre [] er moddhe likhte hoy, object er khetre {} er moddhe likhte hoy.

var MyInfo = {
    Myname:"Sayeed Sarkar", 
    Location: "Kharibari" ,
    Ph: 1908438343,
}
console.log(MyInfo)
//kono akta object theke kono akta specific property r value k call kore nite parbo. Object tar name die dot die property tar name likhte hobe
console.log(MyInfo.Location);

//aro akvabe output bar kora jabe.
var newProperty = MyInfo["Myname"];
console.log(newProperty);




//erokom 100 joner jodi data store korar dorkar hoy tahole ki 100 ta object declare korte hobe? =na. akta object die e kaj hobe . Amra shudhu template toiri kore rqakhbo. Etake function die declare korte hobe.Object er khetre Function er 1st letter ta capital e hobe must.
function MyInfo(MyName,Location,Ph){
    this.MyName = MyName;
    this.Location = Location;
    this.Ph = Ph;   //eivabe template ta toiri kore nite hobe. this. die likhte hoy eguloke
}
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); //new ta keyword
var NewObject2 = new MyInfo("Sarkar","mudia",932187499); 
var NewObject3 = new MyInfo("Sayeed","Kharibari",932187499); //eivabe ami hajarbar korte parbo shudhu jar jar moto name chng kore  
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
var NewObject = new MyInfo("Sayeed","Kharibari",932187499); 
console.log(NewObject);
console.log(NewObject2); //NewObject 1 ,2,3 ..eivabe alada alda kore prottectar console.log korte pari

//jodi object tar kono specific property somporke jante chai tale dot die sei property e nam
console.log(NewObject2.Location);

