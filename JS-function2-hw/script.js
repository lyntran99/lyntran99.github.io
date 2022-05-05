//Bai1

    function year(a) {
        return console.log(Math.ceil(a/100))
    }

//Bai2
    
    function stringSliced() {
        let string1 = "shiDaiShaoNianTuan";
        return console.log(string1.slice(0,10)+"...");
    }

//Bai3

    function wordUppercase() {
        let string2 = "techmaster";
        let firstLetter = string2.substring(0,1);
        let theRest = string2.substring(1);
        return console.log(firstLetter.toLocaleUpperCase() + theRest)
    }


