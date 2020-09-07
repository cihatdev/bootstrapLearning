var Person = {
  name: "none",
  email: "none",
  sendEmail: function () {
    console.log("Mail send to : " + this.name + " / " + this.email);
  }
}

function Customer(name, email) {
  this.name = name
  this.email = email
}

function Employee(name, email) {
  this.name = name
  this.email = email
}

var value = new Person;
value.firstName = "Cİhat";
value.lastName = "SAllik";
console.log(value);

Customer.prototype = Person;
var someCustomer = new Customer("Cihat", "cihatsalikcrayzbo@gmail.com");
someCustomer.sendEmail();

Employee.prototype = Person;
var someEmployee = new Customer("Abdulkadir", "abdulkadir@gmail.com");
someCustomer.sendEmail();
