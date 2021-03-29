class Ship {
    constructor (name = "ship", shipyard = "Russia") {
        this.name = name
        this.shipyard = shipyard
    }
    getName() {
        console.log(this.name)
    }

    shipWalk() {
        console.log(`${this.name} поплыл`)
    }
}

class Trauler extends Ship {
    
    shipWalk() {
        console.log(`${this.name} ловит рыбу`)
    }
    fishRefactor(count="0"){
        console.log(`${this.name} перерабатывает рыбу, ${count} килограмм`)
    }
}

class TraulerFuture extends Trauler {
    fishRefactor(){
        super.fishRefactor(32)
        console.log(`жарит `)
    }
}

class MilitaryShip extends Ship {
    constructor(props){
        super(props.name,props.shipyard)                                    //вызовем constructor ship
        this.weapons = props.weapons
    }

    fire() {
        console.log(`${this.weapons} выстрел`)
        return 5
    }
}

class MilitaryShipNew extends MilitaryShip {
    constructor(props){
        super(props)
        this.weapons2 = props.weapons2
    }
    fire() {
        console.log(`${this.weapons2} выстрел`)
        return super.fire() + 6
    }
}
let maslak = new Trauler("maslak" , "AdmiralVerfi")
let gore = new TraulerFuture("Karpov","BaltZavod")
let papanin = new MilitaryShip({weapons:"Raceta",name:"papanin",shipyard:"zdezdochka"}) 
let koklush = new MilitaryShipNew({weapons:"Raceta",name:"Koklush",shipyard:"Severnaiverf",weapons2:"torpeda"})
let test = new MilitaryShip({weapons:"Raceta",name:"papanin",shipyard:"zdezdochka"})

// maslak.getName()
// maslak.shipWalk()
// maslak.fishRefactor()

// gore.getName()
// gore.shipWalk()
// gore.fishRefactor()

// papanin.getName()
// papanin.shipWalk()
// console.log(papanin.fire())

// koklush.getName()
// koklush.shipWalk()
// console.log(koklush.fire())
console.log(test)


class A {
    getName() {
        return "A"
    }
}

class B extends A{
    getName(){
        return "B" + super.getName() 
    }
}

class C extends B{
    getName(){
        return "C" + super.getName() 
    }
}

class D extends C{
    getName(){
        return "D" + super.getName() 
    }
}

let zz = new D ()
console.log(zz.getName())