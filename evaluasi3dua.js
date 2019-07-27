//NOMOR 4
const jualMobil = {
    iklan: function (){
      document.write (`BU , saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`)
    }
  }
  
  const saya = (jualMobil);
  
  saya.nama = "Tompel"
  saya.merek = "Avanza"
  saya.tahun = 2017
  saya.iklan()