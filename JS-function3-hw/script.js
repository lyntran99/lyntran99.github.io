// Bai 1

function repeat(string1) {
  let repeatString = "";
  for (i = 1; i <= 10; i++) {
    repeatString += string1 + "-";
  }
  return repeatString.slice(0, -1);
}

//Bai 2

function factorial(num) {
  var fact = 1;
  for (var i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}

//Bai 3

function stringToArray(string2) {
  let newArray = string2.split("");
  let revArray = newArray.reverse();
  return revString = revArray.join("");
}

//Bai 4
function numCount() {
  for (i = 1; i <= 100; i++) {
    document.write(" " + i + " ");
  }
}
