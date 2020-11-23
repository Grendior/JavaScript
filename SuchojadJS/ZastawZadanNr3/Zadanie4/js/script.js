function punktyKratowe(r){
  let Count = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 1; j < r; j++) {
      if ((i*i+j*j)<=r*r) {
        Count++;
      }
    }
  }
  Count = Count*4 + 1;
  return Count;
}

let promien = prompt("Podaj promień");

document.write(punktyKratowe(promien));
