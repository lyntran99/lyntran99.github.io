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
  if (num >= 0 && Number.isInteger(num)) {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact = fact * i;
    }
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

function translate(code) {
  switch (code) {
    case "CHN":
      return "你好!";
    case "FRA":
      return "Bonjour!";
    case "VNM":
      return "Xin chào!";
    case "ESP":
      return "Hola!";
    case "KOR":
      return "안녕하세요!";
  }
}

function translate2(countrycode) {
  if ((countrycode = "CHN")) {
    return "你好!";
  } else if ((countrycode = "FRA")) {
    return "Bonjour!";
  } else if ((countrycode = "ESP")) {
    return "Hola!";
  } else if ((countrycode = "KOR")) {
    return "안녕하세요!";
  } else {
    return "Xin chào!";
  }
}

function addColor() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write('<p style = "color: blue">' + i + "</p>");
    } else if (i % 3 == 0) {
      document.write('<p style = "color: orange">' + i + "</p>");
    } else if (i % 5 == 0) {
      document.write('<p style = "color: red">' + i + "</p>");
    } else {
      document.write('<p style = "color: black">' + i + "</p>");
    }
  }
}
