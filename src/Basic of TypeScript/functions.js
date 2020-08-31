function topla(x, y, z) {
    return x + y;
}
topla(34, 34, "Cihat");
var topla2 = function (x, y) {
    return x + y;
};
function add(a, b) {
    return a + b;
}
//default parametre denir
var topla3 = function (x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
};
// burada ? işareti her zaman son parametre değeri olur ve isteğe bağlı olarak değer verilebilir(opsiyonel parametre denir,) .
var topla4 = function (x, y) {
    if (x === void 0) { x = 5; }
    if (y) {
        return x + y;
    }
    return x;
};
// console.log("Toplam değer " + add(34, 56));
console.log(topla3(4));
