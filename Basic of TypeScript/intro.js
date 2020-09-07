function greeter(isim) {
    return "Merhaba " + isim;
}
var mesaj = greeter("AbdulKadir");
console.log(mesaj);
//Veri tiplerini öğrenme
//number
var sayi = 100;
sayi = 23;
sayi = 12.34;
//string
var sehir = "Mersin";
sehir = "Ankara";
sehir = "İstanbul";
sehir = "Adıyaman";
//boolean
var dogruMu;
dogruMu = false;
dogruMu = true;
//array
var numbers = [1, 2, 3, 4];
//generic
var sayilar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var dizi = [2, "Cihat"];
var Renk;
(function (Renk) {
    Renk["Kirmizi"] = "Deneme";
    Renk[Renk["Siyah"] = 996] = "Siyah";
    Renk[Renk["Mavi"] = 123] = "Mavi";
})(Renk || (Renk = {}));
var renk0 = Renk.Kirmizi;
var renk1 = Renk.Siyah;
var renk2 = Renk.Mavi;
console.log(": " + renk0);
console.log(": " + renk1);
console.log(": " + renk2);
