let handle1 = document.getElementById("radiusOfTheCircle");
let handle2 = document.getElementById("resultParagraph");

function circle(radius){
  this.radius = radius;

  this.circleField = function circleField(){
    return Math.PI * this.radius * this.radius;
  }
  this.circleCircumference = function circleCircumference(){
    return Math.PI * 2 * this.radius;
  }

}
function result(){
  let circle1 = new circle(handle1.value);
  let text = "Pole koła: ";

  tempNumber1 = parseInt(circle1.circleField());
  tempNumber2 = parseInt(circle1.circleCircumference());

  handle2.innerHTML = text + tempNumber1 + "<br>"
  +"Obwód koła: "+tempNumber2;

}
