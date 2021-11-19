function validate(){
  let name = document.getElementById("name").value;
  let surrname = document.getElementById("surrname").value;
  let city = document.getElementById("city").value;
  let street = document.getElementById("street").value;
  let postcode = document.getElementById("postcode").value;

  let nameRGEX = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{3,20}$/;
  let surrnameRGEX = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{3,20}$/;
  let cityRGEX = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{3,20}$/;
  let streetRGEX = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż][0-9][.]{1,16}$/;
  let postcodeRGEX = /^[0-9]{5,5}$/;

  let nameResult = nameRGEX.test(name);
  let surrnameResult = surrnameRGEX.test(surrname);
  let cityResult = cityRGEX.test(city);
  let streetResult = streetRGEX.test(street);
  let postcodeResult = postcodeRGEX.test(postcode);

  console.log(nameResult);

  if(nameResult == false)
  {
    alert('Nieprawidłowe imię');
    return false;
  }

  else if(surrnameResult == false)
  {
    alert('Nieprawidłowe nazwisko');
    return false;
  }
  else if(cityResult == false)
  {
    alert('Nieprawidłowa nazwa miasta');
    return false;
  }
  else if(streetResult == false)
  {
    alert('Nieprawidłowa ulica');
    return false;
  }
  else if(postcodeResult == false ){
    alert('Nieprawidłowy kod pocztowy');
    return false;
  }

  return true;
}
