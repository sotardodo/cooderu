const { regencies } = require("../../../../TugasCooderu/location")

class Province {
    constructor(id, name, alt_name, lat, long){
    this.id = id
    this.name = name
    this.alt_name = alt_name
    this.lat = lat
    this.long = long
    }
    
    provinceName() {
    console.log(`Province Name : ${this.name}`)
    }
    
    regencies() {
    for (let reg of regencies) {
    if (reg.province_id == this.id) {
    console.log(`- ${reg.name}`)
    }
    }
    console.log("\n")
    }
    }
    
    class Regency {
    constructor() {
    
    }
    }
    
    class Provinces {
    provinceList = []
    regencyList = []
    
    constructor() {
    this.loadProvince()
    this.loadRegencies()
    }
    
    loadProvince() {
    for (let province of provinces) {
    let newProvince = new Province(
    province.id,
    province.name,
    province.alt_name,
    province.latitude,
    province.longitude
    )
    provinceList.push(newProvince)
    }
    }
    
    loadRegencies() {
    }
    
    getProvinceByID(id) {
    // Print Province Name and List of
    console.log(province.find(['name']));
    // Regencies based on Province ID
    console.log(province.find(['id']));
    // ACEH
    console.log(province.find(['name'] == 'ACEH'));
    // - Kab X
    console.log(regencies.find(['name'] == 'kab X'));
    // - Kab Y
    console.log(regencies.find(['name'] == 'Kab Y'));
    // cari province object berdasarkan id
    document.getElementById("province").innerText =
        res[idinputan];
    

    province.provinceName()
    province.regencies()
    }
    
    findProvinceByRegencyID(id) {
    // input : ID Regency
    // output : Province Name
 
    regencies.filter((regencies.id) => {
    return province.name == idYouWant;
    });

    document.getElementById("regencies").innerText = exactRes;

    }
    
    findProvinceByRegencyName(name) {
    // input : jakarta
    // output : DKI Jakarta
    

    }
    
    findRegencyWithSizeWord(length) {
    // input : 3
    // output : list of Regency with length of words is equal 3
    // KABUPATEN ACEH SINGKIL
    // - KABUPATEN ACEH SELATAN
    // - KABUPATEN ACEH TENGGARA
    // - KABUPATEN ACEH TIMUR
    // - KABUPATEN ACEH TENGAH
    // - KABUPATEN ACEH BARAT
    // - KABUPATEN ACEH BESAR
    }
    
    }