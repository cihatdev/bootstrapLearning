var selamFonk0 = function selam() {
  console.log("Nerhaba");
}

const selamFonk1 = function () {
  console.log("Nerhaba");
}

var selamFonk2 = () => {
  console.log("Nerhaba");
}

var selamFonk3 = () => console.log("Nerhaba");

var selamFonk4 = message => console.log(message); //burda 1 tane parametre ise parantez koymayabiliz
// selamFonk4("Merhaba4");

const topla = (sayi1, sayi2) => {
  return sayi1 + sayi2;
}

let toplam = topla(3, 5);
console.log(toplam);