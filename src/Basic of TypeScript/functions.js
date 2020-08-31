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
//default parametre denir eğer yazılırsa parametre atamaya gerek yoktur ama atılırsa atılan parametre geçerlidir.
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
//rest parametreleri dizi alan parametrelerdir, bir sınır yoktur istenilen kadar eklenilir.
function davetEt(firstInvitation) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return firstInvitation + "\n" + others.join("\n");
}
function davetEt2() {
    var others = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        others[_i] = arguments[_i];
    }
    return others.join("\n");
}
// console.log("Toplam değer " + add(34, 56));
console.log(davetEt2("Engin", "Derin ", "Mehmet", "Veli", "Ahmet", "Ali"));
