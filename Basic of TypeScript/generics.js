function value(x) {
    return x;
}
var number = value(10);
console.log(number);
//burada generic lerdeki istenilen tipe gore işlem yapmak için kullanulan bir yöntemdir.
function value1(x) {
    return x;
}
var sayi3 = value1(3);
var sehir = value1("Ankara");
console.log(sayi3 + "\n" + sehir);
//aynı zamanda class'larıda generic yapabiriz
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("Ankara");
