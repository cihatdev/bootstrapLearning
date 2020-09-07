function sendEmail(personInterface) {
  var to = personInterface.eMail;
  var name = personInterface.name;

  var send = function () {
    console.log("Mail sent to : " + name + " / " + to);
  }
  sent();
}

function Customer(name, eMail) {
  this.name = name;
  this.eMail = eMail

}
var someCustomer = new Customer("Cihat", "cihatsalik02@gmail.com ")
console.log(someCustomer);