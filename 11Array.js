//arrray holo amon akta jinis jate onk ta variable ba onk ta number store kore rakha jay,  [] er moddhe comma die die likhte hoy array...[] er moddhe likhle seta array hoye jabe...string type and numkber type array hote pare...multiple data storre korar jonno use kkora hoy...onk gulor moddhe j kono akta variable k call kora jete pare

var numbers=[20,20,40,44395,983475,7,337]
console.log(numbers[3]) //eivabe jkono aktake call korte pari ba onk gulokeo call korte pari

var names=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
names[2]=20; //eivabe jkono aktake replce o korte pari
console.log(names) 


//push:kono string ba number k jodi array r list a add korte chai
var names=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
names.push("aklsjdfhdklj") //string ta last er dik theke add hobe.
names.pop() //push kore abar pop korara fole ota abar sore jabe.
console.log(names)

//pop: push er opposite method.kono value k remove korte use kora hoy...sobar last e j value ta thakbe setake remove kore deve
var namess=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
names.pop()
console.log(namess);


//era duto value e sesh er dik theke remove kore ...josi starting er dik theke remove korte chai tobe ei value duto use korte hobe
//shift:1st er dik theke akta ke remove kore debe
var names=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
names.shift()
console.log(names)

//unshift:1st er dik theke add hoye jabe
var names=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
names.unshift("sayeed")
console.log(names)


//slice and splice method er maddhome 1st r last charao majher ba j kono jaygay string ba number add ba remove kora jay
var names=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
console.log(names.slice(2,5)) //kotha theke kotota output chai seta likhte hobe, 2,5 mane 2 theke start kore 5 no er ager ta obdi mane 4 obdi asbe...r jodi shudhu 2 likhi tale 2 er pore j kota ache sobkota show korbe

//splice:j kojno jinis remove kore tar jaygay onno kichu add korte pari
var names=['kjhdf','asdjf',"iaiff","hfsdfk",'sadlkfj']
names.splice(0,3,"Sayeed Sarkar")
console.log(names)
names.splice(0,4,"Sayeed Sarkar","SayeedProgrammer")
console.log(names)