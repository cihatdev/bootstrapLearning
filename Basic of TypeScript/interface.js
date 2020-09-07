function save(product) {
    console.log(product.name + " Saved");
}
save({ id: 1, name: "Laptop", uniPrice: 20 });
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
        console.log("Hiii Guysss !!!");
    };
    return CustomerService;
}());
var customerService = new CustomerService();
customerService.save();
