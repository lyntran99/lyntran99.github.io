//Bai1

    function year(a) {
        return console.log(Math.ceil(a/100))
    }

//Bai2
    
    function stringSliced(string1) {
        return console.log(string1.slice(0,10) + "...");
    }

//Bai3

    function wordUppercase(string2) {
        let firstLetter = string2.substring(0,1);
        let theRest = string2.substring(1);
        return console.log(firstLetter.toUpperCase() + theRest.toLowerCase())
    }


    function cutString(string3, num){
        return console.log(string3.slice(num) + "...")
    }


