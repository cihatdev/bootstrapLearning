function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Student(favoriteCourse) {
  this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Cihat", "Salik");

var cihat = new Student("Programing");

console.log(cihat.firstName + " " + cihat.lastName + " " + "loves " + cihat.favoriteCourse); 