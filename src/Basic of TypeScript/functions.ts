function topla(x: number, y: number, z: string): number {
  return x + y;
}
topla(34, 34, "Cihat");

let topla2 = function (x: number, y: number): number {
  return x + y;
};

function add(a: number, b: number) {
  return a + b;
}
//default parametre denir eğer yazılırsa parametre atamaya gerek yoktur ama atılırsa atılan parametre geçerlidir.
let topla3 = function (x: number, y: number = 4): number {
  return x + y;
};
// burada ? işareti her zaman son parametre değeri olur ve isteğe bağlı olarak değer verilebilir(opsiyonel parametre denir,) .
let topla4 = function (x: number = 5, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
};

// console.log("Toplam değer " + add(34, 56));
console.log(topla3(4));
