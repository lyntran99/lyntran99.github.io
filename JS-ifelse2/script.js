//Bai 1

let a = new Date();
let date = a.getDate();
let month = a.getMonth() + 1;
let year = a.getFullYear();
function season() {
  if (month >= 2 && month <= 4) {
    return document.write(month + "/" + date + "/" + year + ", " + "Spring");
  } else if (month >= 5 && month <= 7) {
    return document.write(month + "/" + date + "/" + year + ", " + "Summer");
  } else if (month >= 8 && month <= 10) {
    return document.write(month + "/" + date + "/" + year + ", " + "Autumn");
  } else if (month == 1 || month == 11 || month == 12) {
    return document.write(month + "/" + date + "/" + year + ", " + "Winter");
  }
}

//Bai 2

let uList = [
  "Xich Tu",
  "TNT-Lyn",
  "SuaChua$$",
  "HanuerED",
  "Hanuer1999",
  "Sua 0 duong",
];
let oList = uList.sort();

function nList() {
  for (i = 1; i <= oList.length; i++) {
    document.write("<p>" + i + "." + " " + oList[i - 1] + "</p>");
  }
}

//Bai 3

function pickEven(numArray) {
  let newArray = [];
  for (i = 1; i <= numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      newArray.push(numArray[i]);
    }
  }
  return newArray;
}

//Bai 4

function minNum(arr) {
  return Math.min(...arr);
}
