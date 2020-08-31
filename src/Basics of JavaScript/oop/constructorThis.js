var student = {
  firstName: "Engin",
  lastName: "Demiroğ",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(student.fullName());

function Customer(first, last, city, country, age) {
  this.first = first;
  this.last = last
  this.city = city
  this.age = age
  this.country = country
}
var someCustomer = new Customer("Cihat", "Salik", "Istanbul", "Turkey", 20);

console.log(someCustomer.first + " " + someCustomer.last + " ");