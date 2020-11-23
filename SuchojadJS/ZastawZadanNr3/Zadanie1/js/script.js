let a = prompt("Podaj pierwszą wartość");
let b = prompt("Podaj drugą wartość");


function greaterCheck(a,b){
  if (a > b) {
    return a;
  }
  else if (b > a) {
    return b;
  }
  else {
    document.write("wartości są równe");
  }
}
document.write(greaterCheck(a,b));
