function value(x: number): number {
  return x;
}

let number = value(10);
console.log(number);

//burada generic lerdeki istenilen tipe gore işlem yapmak için kullanulan bir yöntemdir.
function value1<T>(x: T): T {
  return x;
}
let sayi3 = value1<number>(3);
let sehir = value1<string>("Ankara");

console.log(sayi3 + "\n" + sehir);

//aynı zamanda class'larıda generic yapabiriz

class GenericClass<T> {
  degisken: T;
  fonksiyon(parametre: T): T {
    return parametre;
  }
}

let sinif = new GenericClass<string>();
sinif.fonksiyon("Ankara");
