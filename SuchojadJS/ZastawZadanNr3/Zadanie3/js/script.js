function operand(numberOne,numberTwo,operationType){
  numberOne = parseInt(numberOne);
  numberTwo = parseInt(numberTwo);
  switch (operationType) {
    case "+":
      return numberOne+numberTwo;
      break;
    case "-":
      return numberOne-numberTwo;
      break;
    case "/":
      return numberOne/numberTwo;
      break;
    case "*":
      return numberOne*numberTwo;
      break;
    case "%":
      return numberOne%numberTwo;
      break;
    default:
    return  "błędna operacja";
  }
}
let a = prompt("Podaj pierwszą liczbę");
let b = prompt("Podaj drugą liczbę");
let c = prompt("Podaj operację jaką mam wykonać (+, -, *, /, %)");
document.write(operand(a,b,c));
