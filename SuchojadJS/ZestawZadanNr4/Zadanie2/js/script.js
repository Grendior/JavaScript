let handle1 = document.getElementById("pole1");
let handle2 = document.getElementById("pole2");
let handle3 = document.getElementById("wynik");

//przypisanie wartości uchwytów handle1 i handle2 do zmiennych a i b
let a = handle1.value;
let b = handle2.value;
let c;

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

function dodaj(){
  let c = a + b;

  handle3.innerHTML = c;
  return 0;
}
function odejmij(){
  let c = a - b;

  handle3.innerHTML = c;
  return 0;
}
function dziel(){
  let c = a / b;

  handle3.innerHTML = c;
  return 0;
}
function mnoz(){
  let c = a * b;

  handle3.innerHTML = c;
  return 0;
}
function modulo(){
  let c = a % b;

  handle3.innerHTML = c;
  return 0;
}
