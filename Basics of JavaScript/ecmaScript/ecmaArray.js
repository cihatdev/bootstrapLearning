const array = [1, 2, 3, 4, 5, 6, 7, 8];

const exponen = [];

array.forEach(item => {
  exponen.push(item * item)
})

// console.log(array);
// console.log(exponen);

// map
const mapArray = array.map(item => item * 3)

// console.log(mapArray);

// filter

const filterArray = array.filter(sayi => sayi > 2)

//console.log(filterArray);

// reduce


const toplam = array.reduce((acc, sayi) => {
  return acc + sayi;
}, 100);

// reduce fonksiyonunun farklı bir gösterimi
//const value = array.reduce((sayi, acc) => acc + sayi, 546)
console.log(value);