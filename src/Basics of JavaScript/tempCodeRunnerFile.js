var sehirler = ["Ankara", "İstanbul", "İzmir", "Manisa", "Adana"];
console.log(sehirler.pop());
sehirler.shift();
sehirler.push("Bursa");
let newSehirler = sehirler.concat(["Adiman", "Malatya"]);
newSehirler.sort();
console.log(newSehirler);