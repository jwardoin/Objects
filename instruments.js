class Instrument {
    constructor(brand, model) {
        this._brandName = brand
        this._model = model
    }
    get brand() {
        return this._brandName
    }
    get model() {
        return this._model
    }

    play() {
        console.log(`You play the ${this._brandName} ${this._model}`)
    }
}

class Strings extends Instrument {
    constructor(brand, model, playStyle, numOfStrings, tuning) {
        super(brand, model)
        this._playStyle = playStyle
        this._numOfStrings = numOfStrings
        this._tuning = tuning
    }
    play() {
        console.log(`You ${this._playStyle} the ${this._brandName} ${this._model}`)
    }
    tune() {
        this._tuning.forEach((string,i) => console.log(`You tuned string ${this._numOfStrings - i} to ${string} on your ${this._brandName} ${this._model}`))
    }
}

class Guitar extends Strings { //probably better to split into acoustic and electric guitar objects
    constructor(brand, model, playStyle, numOfStrings, tuning, isAcoustic, isElectric) {
        super(brand, model, playStyle, numOfStrings, tuning)
        this._isAcoustic = isAcoustic
        this._isElectric = isElectric
    }
    get isAcoustic() {
        return this._isAcoustic
    }
    get isElectric() {
        return this._isElectric
    }
    play() {
        super.play()
        console.log(`The ${this._brandName} ${this._model} widdlies!`)
    }
    
}

class Bass extends Strings {
    constructor(brand, model, playStyle, numOfStrings, tuning, isActive) {
        super(brand, model, playStyle, numOfStrings, tuning)
        this._isActive = isActive
    }
    get strings(){
        return this._numOfStrings
    }
    play(){
        super.play()
        console.log(`The ${this._brandName} ${this._model} thumps!`)
    }
   
}

class Violin extends Strings {
    constructor(brand, model, playStyle, numOfStrings, tuning, woodFront, woodBack) {
        super(brand, model, playStyle, numOfStrings, tuning)
        this._woodFront = woodFront
        this._woodBack = woodBack
    }
    get woodFront() {
        return this._woodFront
    }
    get woodBack() {
        return this._woodBack
    }
    play(){
        super.play()
        console.log(`The ${this._brandName} ${this._model} sings!`)
    }
}

class Percussion extends Instrument {
    constructor(brand,model,material,size,finish) {
        super(brand,model)
        this._material = material
        this._size = size
        this._finish = finish
    }
    get material() {
        return this._material
    }
    get size() {
        return this._size
    }
    get finish() {
        return this._finish
    }
}

class Snare extends Percussion {
    constructor(brand,model,material) {
        super(brand,model,material) 
    }
   
    play() {
        super.play()
        console.log(`The ${this._brandName} ${this._model} cracks!`)
    }
}

class Tom extends Percussion {
    constructor(brand,model,material,size,finish,orientation,isMountable) {
        super(brand,model,material,size,finish)
        this._orientation = orientation
        this._isMountable = isMountable
    }
}

class KickDrum extends Percussion {
    constructor(brand,model,material,size,finish,hasPortHole) {
        super(brand,model,material,size,finish)
        this._hasPortHole = hasPortHole
    }
}

class DrumKit extends Percussion {
    constructor(brand,model,material,numOfPieces,pieces) {
        super(brand,model,material)
        this._numOfPieces = numOfPieces
        this._pieces = pieces
    }
    play() {
        super.play()
        console.log(`You make a killer groove!`)
    }
    playEach() {
        this._pieces.forEach(drum => drum._orientation ? console.log(`You hit the ${drum._model} ${drum._orientation} ${drum.constructor.name.toLowerCase()}`) : console.log(`You hit the ${drum._model} ${drum.constructor.name.toLowerCase()}`))
    }
    includesSnare() {
       return Boolean(this._pieces.filter(drum => drum.constructor.name === "Snare"))
   }
}


let gibsonLesPaul = new Guitar("Gibson", "Les Paul", "picked", 6, ["E","A","D","G","B","e"], false, true)
let fenderStrat = new Guitar("Fender", "Stratocaster", "picked", 6,["E","A","D","G","B","e"],false, true)
let fenderP = new Bass("Fender", "Precision Bass", "plucked", 4,["E","A","D","G"], false)
let spectorForte5 = new Bass("Spector", "Forte 5", "plucked", 5,["B","E","A","D","G"], true)
let bunnelPupil = new Violin("Bunnel", "Pupil", "bowed", 4, ["G","D","A","E"], "spruce", "maple")
let porkPieBP = new Snare("Pork Pie", "Brass Patina", "Brass", "13 x 6.5", "Blue Patina")

let ludwigBreakBeatsKick = new KickDrum("Ludwig", "Breakbeats", "Wood", "16\"x14\"", "Azure Blue", false)
let ludwigBreakBeatsSnare = new Snare("Ludwig", "Breakbeats", "Wood", "14\"x5\"", "Azure Blue")
let ludwigBreakBeatsHiTom = new Tom("Ludwig", "Breakbeats", "Wood", "13\"x13\"", "Azure Blue", "rack", true)
let ludwigBreakBeatsLowTom = new Tom("Ludwig", "Breakbeats", "Wood", "10\"x7\"", "Azure Blue", "floor", false)

let ludwigBreakBeats = new DrumKit("Ludwig", "Breakbeats", "Wood", 4, [ludwigBreakBeatsKick, ludwigBreakBeatsSnare,ludwigBreakBeatsHiTom,ludwigBreakBeatsLowTom])

let instrArray = [gibsonLesPaul, fenderStrat, fenderP, spectorForte5, bunnelPupil, porkPieBP, ludwigBreakBeats]

instrArray.forEach(instr => instr.play())