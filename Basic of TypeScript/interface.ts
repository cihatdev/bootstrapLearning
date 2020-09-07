interface Product {
  id: number;
  name: string;
  uniPrice: number;
}
function save(product: Product) {
  console.log(product.name + " Saved");
}

save({ id: 1, name: "Laptop", uniPrice: 20 });

interface IPersonelService {
  save();
}
class CustomerService implements IPersonelService {
  save() {
    console.log("Hiii Guysss !!!");
  }
}

let customerService = new CustomerService();
customerService.save();
