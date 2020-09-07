var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(roomNumber, windowNumber, floor) {
        this._roomNumber = roomNumber;
        this._floor = floor;
        this._windowNumber = windowNumber;
    }
    Ev.prototype.eat = function () {
        console.log(this._floor + " storey house the meal was eaten.");
    };
    return Ev;
}());
var home = new Ev(3, 5, 5);
home.eat();
console.log(home._floor);
console.log(home._roomNumber);
console.log(home._windowNumber);
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        //getter setter
        get: function () {
            return "Sayın: " + this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log("saved person");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("isim: " + this.name); //protected inherit ettiği sınıfın değerine ulaşabilir.
        console.log("selled product");
    };
    return Customer;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Staff.prototype.paySalary = function () {
        console.log("payed salary");
    };
    return Staff;
}(Person));
var customer = new Customer();
customer.name = "Cihat Bey";
console.log(customer.name);
customer.save();
customer.sell();
var staff = new Staff();
staff.save();
staff.paySalary();
