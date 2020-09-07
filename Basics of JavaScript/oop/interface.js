function sendEmail(personInterface) {
  var to = personInterface.eMail;
  var name = personInterface.name;

  var send = function () {
    console.log("Mail sent to : " + name + " / " + to);
  }
  send();
}

function Customer(name, eMail) {
  this.name = name;
  this.eMail = eMail
}
function Employee(name, eMail) {
  this.name = name;
  this.eMail = eMail
}
var someCustomer = new Customer("Cihat", "cihatsalik02@gmail.com ")
var someEmployee = new Employee("Veli", "cihatsalik02@gmail.com ")
sendEmail(someCustomer);
sendEmail(someEmployee);
