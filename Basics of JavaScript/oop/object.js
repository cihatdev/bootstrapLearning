//nesne ve dizilerde refaransa göre işlemler yapılır 
// var isTrue = [] === [];
// var object1 = { deger: 1 };
// var object2 = { deger: 1 };
// var isTrue2 = object1 === object2;
// console.log(isTrue);
// console.log(isTrue2);

const urunServis = {
  ekle: function () {
    console.log(this);
  }
}

urunServis.ekle();