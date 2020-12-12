handle1 = document.getElementById("silnia");
handle2 = document.getElementById("sum");

let outcome;

function silnia(number){
  if (number == 1 || number == 0) {
    return 1;
  }
  else {
    return number *silnia(number-2);
  }
}

function ssp(number){
  if (number == 1) {
    return 1;
  }
  else {
    return silnia(number)*silnia(number-1);
  }
}

console.log(silnia(handle1.value));
console.log(ssp(handle1.value));

function result(){
  let text = "ssp = ";
  outcome = text + ssp(handle1.value);
  // handle2.innerHTML = "ssp = ";
  handle2.innerHTML = outcome;
}
