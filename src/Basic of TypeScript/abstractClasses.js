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
var CreditBase = /** @class */ (function () {
    function CreditBase() {
    }
    CreditBase.prototype.save = function () {
        console.log("Saved");
    };
    return CreditBase;
}());
var CustomerCredit = /** @class */ (function (_super) {
    __extends(CustomerCredit, _super);
    function CustomerCredit() {
        return _super.call(this) || this;
    }
    CustomerCredit.prototype.calculate = function () {
        console.log("Tüketici Kredisine göre hesap yapıldı.");
    };
    return CustomerCredit;
}(CreditBase));
var MortgageCredit = /** @class */ (function (_super) {
    __extends(MortgageCredit, _super);
    function MortgageCredit() {
        return _super.call(this) || this;
    }
    MortgageCredit.prototype.calculate = function () {
        console.log("Konut Kredisine göre hesap yapıldı.");
    };
    MortgageCredit.prototype.otherFunction = function () {
        console.log("Other functions");
    };
    return MortgageCredit;
}(CreditBase));
var customerCredit = new CustomerCredit();
customerCredit.calculate();
customerCredit.save();
var mortgageCredit = new MortgageCredit();
mortgageCredit.calculate();
mortgageCredit.otherFunction();
var credi;
credi = new CustomerCredit();
credi = new MortgageCredit();
console.log(credi);
