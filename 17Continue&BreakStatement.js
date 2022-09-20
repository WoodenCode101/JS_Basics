for(var i=0; i<10 ; i++){
    console.log(i);
}

console.log("New One");

for(var i=0; i<10 ; i++){
    if(i==5){
        console.log("Break");
    }
    console.log(i);
}

console.log("New One");

for(var i=0; i<10 ; i++){
    if(i==5){
        console.log("Break");
        break; //break keyword ta use korar fole 4 er pore theke r result show korbena.
    }
    
    console.log(i);
}

//ekhane i==5 equals hole break now asche thik e kintu trpr e 5 tao asche jodi chai j ota soman jeta likhechi shudhu setai asbe 5 ta asbena tahole continue keyword apply korte hobe
for(var i=0; i<10 ; i++){
    if(i==5){
        console.log("Break");
        continue;
    }
    
    console.log(i);
}


//break: apply korar porer line theke r output dakhabena
