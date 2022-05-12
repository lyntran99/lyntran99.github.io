//Bai 1

function biggerNum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return "Please enter a number";
  }
}

//Bai 2

function factorial(num) {
  let fact = 1;
  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }
  if (typeof num == "number" && num >= 0 && Number.isInteger(num)) {
    return fact;
  } else {
    return "Please enter an integer";
  }
}

//Bai 3

function grade(x) {
  if (x >= 0 && x <= 10) {
    if (x >= 8.5 && x <= 10) {
      return "A";
    } else if (x >= 7 && x < 8.5) {
      return "B";
    } else if (x >= 5.5 && x < 7) {
      return "C";
    } else if (x >= 4 && x < 5.5) {
      return "D";
    } else {
      return "F";
    }
  } else {
    return "Validation errors";
  }
}

//Bai 4
// CHN, FRA, VNM, ESP, KOR
// 你好!, Bonjour!, Xin chào!, Hola!, 안녕하세요!

function translate(code){
    switch (code){
        case "CHN" :
            return "你好!";
        case "FRA" :
            return "Bonjour!";
        case "VNM" :
            return "Xin chào!";
        case "ESP" :
            return "Hola!";
        case "KOR" :
            return "안녕하세요!";        
    }
}