//Bai 1

let a = new Date();
console.log(
  a.getMonth().toString() + "/" + a.getDate() + "/" + a.getFullYear()
);

function season() {
  if (a.getMonth() >= 10) {
    return "Winter";
  } else if (a.getMonth() >= 7) {
    return "Autumn";
  } else if (a.getMonth() >= 4) {
    return "Summer";
  } else {
    return "Spring";
  }
}

//Bai 2

let uList = [
  "Xich Tu",
  "TNT-Lyn",
  "Sua Chua",
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
  for (i = 1; i <= numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      console.log(numArray[i]);
    }
  }
}

//Bai 4

function minNum(arr) {
  return Math.min(...arr);
}
