abstract class CreditBase {
  // abstract sınıflar hem içi doldurulmuş hem de içi boş metotlar bulunabilir. 
  //Extend eden sınıf farklı bir fonksiyonda bulunabilir ama extend ettiği ana classın içindeki bğtğn fonk.ları doldurmalı
  //interfaceler de ise sedece içi boş metotlar mevcutttur.
  constructor() {}
  save(): void {
    console.log("Saved");
  }
  abstract calculate(): void;
}

class CustomerCredit extends CreditBase {
  constructor() {
    super();
  }
  calculate(): void {
    console.log("Tüketici Kredisine göre hesap yapıldı.");
  }
}
class MortgageCredit extends CreditBase {
  constructor() {
    super();
  }
  calculate(): void {
    console.log("Konut Kredisine göre hesap yapıldı.");
  }
  otherFunction(): void {
    console.log("Other functions");
  }
}

let customerCredit = new CustomerCredit();
customerCredit.calculate();
customerCredit.save();

let mortgageCredit = new MortgageCredit();
mortgageCredit.calculate();
mortgageCredit.otherFunction();

let credi: CreditBase;
credi = new CustomerCredit();
credi = new MortgageCredit();
console.log(credi);
