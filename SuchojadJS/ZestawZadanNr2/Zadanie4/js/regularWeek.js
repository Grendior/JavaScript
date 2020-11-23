let daysOfTheWeek = new Array("Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela");
let nr = 1;
for (let indeks in daysOfTheWeek) {

  document.write(nr + " " + daysOfTheWeek[indeks] + "<br>");
  nr++;
}
