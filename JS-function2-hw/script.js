//Bai1

    function year(a) {
        return console.log(Math.ceil(a/100))
    }

//Bai2
    
    function stringSliced(string1) {
        return console.log(string1.slice(0,10) + "...");
    }

//Bai3

    function wordUppercase() {
        let string2 = "techmaster";
        let firstLetter = string2.substring(0,1);
        let theRest = string2.substring(1);
        return console.log(firstLetter.toLocaleUpperCase() + theRest)
    }


    function cutString(num){
        let string3 = "Thong bao nghi le nhan ngay Thong nhat va Quoc te lao dong 30/4 & 1/5"
        return console.log(string3.slice(num) + "...")
    }


