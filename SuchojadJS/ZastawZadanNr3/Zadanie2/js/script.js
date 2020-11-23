function addition(a,b){
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}
function subtraction(a,b){
  return a-b;
}
function summary(a,b){
  if (a>0) {
    return subtraction(a,b);
  }
  else if (a<0) {
    return addition(a,b);
  }
  else {
    return b;
  }
}

let numberOne = prompt("Podaj pierwszą liczbę");
let numberTwo = prompt("Podaj drugą liczbę");

document.write(summary(numberOne,numberTwo));
