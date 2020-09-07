function Customer(firstName, lastName) {
  this.firstName = firstName; //PUBLİC
  this.lastName = lastName;

  var someField = "some value"; //private
  this.sendProduct = function () {  //operation
    console.log("Product SEnt!");
  }
}
var cihat = new Customer("Cihat", "Salik");
cihat.sendProduct();