let handle1 = document.getElementById('minimum');
let handle2 = document.getElementById('maximum');
let handle3 = document.getElementById("summary");
let handle4 = document.getElementById("summary2");

let min = handle1.value;
let max = handle2.value;

min = parseInt(min);
max = parseInt(max);

let tempTable1 = [];
let tempTable2 = [];
let tableIndex = 0;

 function twinNumbers(){
   let tempText1 = "";
   let tempText2 = "";
   let finalText;

   // handle3. = "";

   for (let i = min; i < max; i++) {
    if (i+2<=max) {
      tempTable1[tableIndex] = i;
      tempTable2[tableIndex] = i+2;
      tableIndex++;
    }
  }
  for (let index in tempTable1) {
     tempText1 = tempText1+tempTable1[index]+" ";
  }

  for (let index in tempTable2) {
     tempText2 = tempText2+tempTable2[index]+" ";
  }
  finalText = tempText1+"<br>"+tempText2;

  handle3.outerHTML = finalText;

  handle4.innerHTML = "<br>Odśwież aby jeszcze znaleźć liczby bliźniacze";

  return 0;
}
