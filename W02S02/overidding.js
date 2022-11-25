class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}`)
    }
  }
  
  class Programmer extends Human {
  
    constructor(name, address, programmingLanguages) {
      super(name, address) 
      this.programmingLanguages = programmingLanguages;
    }
  

    introduce() {
      console.log(`I can write a programming using these languages`, this.programmingLanguages);
    }
  
    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random * this.programmingLanguages.length)
        ]
      )
    }
  }
  
  let Reza = new Programmer("Fahmi Alfareza", "Magelang", ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]);
  Reza.introduce()