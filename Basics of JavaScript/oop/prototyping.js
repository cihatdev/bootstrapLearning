function Customer(first, last, city, country, age) {
  this.first = first;
  this.last = last
  this.city = city
  this.age = age
  this.country = country
}
var someCustomer = new Customer("Cihat", "Salik", "Istanbul", "Turkey", 20);

//prototyping ile var olan bir nesne veya objeye yeni özellikler ekleyebiliriz

Customer.prototype.eMail = "cighatsakşij@hotmail.com";
Customer.prototype.fullName = function () {
  return this.first + " " + this.last;
}

console.log(someCustomer.eMail);
console.log(someCustomer.fullName()); 