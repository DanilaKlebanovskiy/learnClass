class Animal {
    constructor(nazvanie="animal",sredaobitaniy="planet") {
        this.sredaobitaniy = sredaobitaniy
        this.nazvanie=nazvanie
    }
    getNazvane(){
        console.log(this.nazvanie)
    }
    dead(){
        console.log(`${this.nazvanie} вымер`)
    }
}

let koza = new Animal("koza", "susha")
koza.getNazvane()
koza.dead()

class Bird extends Animal {
    fly(){
        console.log(`${this.nazvanie} letaet`)
    }
    dead (){
        return (`${this.nazvanie} ne umiraet`)
    }
    obitaet () {
        console.log(`${this.nazvanie} obitaet ${this.sredaobitaniy}`)
    }
}

let sinica  = new Bird ("sinica","v lesu")
sinica.fly()
sinica.dead()
sinica.obitaet()

class SuperBird extends Bird{
    kushaet () {
        console.log(" est ludei" + super.dead())
        
    }
}

let feniks = new SuperBird ("feniks","skazka")
console.log(".........")
feniks.getNazvane()
feniks.dead()
feniks.kushaet()

class PoluPtica extends Bird {
    constructor(nazvanie,sredaobitaniy,bust){
        super(nazvanie,sredaobitaniy)
        this.nazvanie = "shlepa"
    }
    buster(){
        console.log(`${this.nazvanie} могу плыть`)
    }
}

let pingvin = new PoluPtica ("pingvin","arctika","plavaet")
console.log(".........")
pingvin.getNazvane()
pingvin.buster()
pingvin.obitaet()