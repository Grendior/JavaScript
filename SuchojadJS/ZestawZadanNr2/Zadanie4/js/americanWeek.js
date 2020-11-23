  for (var i = 0; i < daysOfTheWeek.length; i++) {
    if (daysOfTheWeek[i].toUpperCase() === "NIEDZIELA") {

      daysOfTheWeek.unshift(daysOfTheWeek[i]);
      daysOfTheWeek.pop();
      break;
    }
  }

  nr = 1;
  for (let indeks in daysOfTheWeek) {

    document.write(nr + " " + daysOfTheWeek[indeks] + "<br>");
    nr++;
  }
