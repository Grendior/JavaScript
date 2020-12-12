let handle1 = document.getElementById("rectangleWidth");
let handle2 = document.getElementById("rectangleHeight");
let handle3 = document.getElementById("resultParagraph");

function Rectangle(width,height){
  this.width = width;
  this.height = height;
}

Rectangle.prototype.rectangleField = function() {
  return this.width * this.height;
}
Rectangle.prototype.rectangleCircumference = function() {
  return 2*this.width + 2*this.height;
}

function result(){
  let recWidth = parseInt(handle1.value);
  let recHeight = parseInt(handle2.value);

  let rectangle1 = new Rectangle(recWidth,recHeight);

  console.log(rectangle1.rectangleField());
  console.log(rectangle1.rectangleCircumference());

  handle3.innerHTML = "Pole prostokąta: " + rectangle1.rectangleField()
  +"<br>"+"Obwód prostokąta: "+rectangle1.rectangleCircumference();
  

}
