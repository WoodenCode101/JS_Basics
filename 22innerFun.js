//akta function er vitore r akta function declare korake bola hoy inner function.

//ekhane vitorer j function ta neoa hoyeche seta orthat india ta inner function, oi function tar vitore thekeo world namok function tar accewss pete pari orthat console.log kore output pete pari. but,
//ekhane baire j function ta neoa hoyeche seta orthat world ta outer function, oi function tar vitore theke india namok function tar access paoa jabe na orthat console.log kore output paoa jabena.

function world(){
    var name = "sayeed";
    console.log(name);
    // console.log(title); ei line ta korlei vul dakhabe. karon baire theke vitorer jinis er access pabona.

    function india(){
        let title = "sarkar";
        console.log(title);
        console.log(name); //but ekhetre vul dakhabena karon vitor theke bairer access paoa jabe.
    }
    india();
}
world()


