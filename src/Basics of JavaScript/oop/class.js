class Personel {

  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
  }

  kaydet() {
    console.log(`Personel Kaydedildi:  ${this.ad}`);
  }
}

const personel = new Personel("Cihat", "SALİK");

personel.kaydet();


personel.ad = "Cihat ";
console.log(personel.ad);