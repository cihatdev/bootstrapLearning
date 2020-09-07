class Ev {
  _roomNumber: number;
  _windowNumber: number;
  _floor: number;
  constructor(roomNumber: number, windowNumber: number, floor: number) {
    this._roomNumber = roomNumber;
    this._floor = floor;
    this._windowNumber = windowNumber;
  }
  eat() {
    console.log(this._floor + " storey house the meal was eaten.");
  }
}

let home = new Ev(3, 5, 5);
home.eat();
console.log(home._floor);
console.log(home._roomNumber);
console.log(home._windowNumber);

class Person {
  private _name: string;
  private anywhereNotAccessible;
  private _isim: string;
  //getter setter
  get name(): string {
    return "Sayın: " + this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  save() {
    console.log("saved person");
  }
}
class Customer extends Person {
  sell() {
    console.log("isim: " + this.name); //protected inherit ettiği sınıfın değerine ulaşabilir.
    console.log("selled product");
  }
}
class Staff extends Person {
  paySalary() {
    console.log("payed salary");
  }
}

let customer = new Customer();
customer.name = "Cihat Bey";
console.log(customer.name);

customer.save();
customer.sell();

let staff = new Staff();
staff.save();
staff.paySalary();
