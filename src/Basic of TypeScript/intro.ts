function greeter(isim: string) {
  return "Merhaba " + isim;
}
let mesaj = greeter("AbdulKadir");
console.log(mesaj);
//Veri tiplerini öğrenme
//number
let sayi: number = 100;
sayi = 23;
sayi = 12.34;
//string
let sehir: string = "Mersin";
sehir = "Ankara";
sehir = "İstanbul";
sehir = "Adıyaman";
//boolean
let dogruMu: boolean;
dogruMu = false;
dogruMu = true;
//array
let numbers: number[] = [1, 2, 3, 4];
//generic
let sayilar2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let dizi: [number, string] = [2, "Cihat"];
//enum
enum Renk {
  Kirmizi = "Deneme",
  Siyah = 996,
  Mavi = 123,
}
let renk0: Renk = Renk.Kirmizi;
let renk1: Renk = Renk.Siyah;
let renk2: Renk = Renk.Mavi;
console.log(": " + renk0);
console.log(": " + renk1);
console.log(": " + renk2);

// any
let value: any = "Ankara";
value = 2;
value = {};

let value2: void = undefined;
