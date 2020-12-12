function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  let array = [];

  for (var i = 0; i < 49; i++) {
    array[i] = getRandomIntInclusive(0,100);
  }
  let summaryArray = [];
  let arrayIndex
  for (var i = 0; i < 6; i++) {
    arrayIndex = getRandomIntInclusive(0,48);
    summaryArray[i] = array[arrayIndex];
  }
  let text
  for (let index in summaryArray) {
    document.write(summaryArray[index] + ", ");

  }
