class PlateLunchSpot {
    constructor(name,operationTimes,menuItems,address,hasSeating) {
        this._name = name
        this._operationTimes = operationTimes
        this._menuItems = menuItems
        this._address = address
        this._hasSeating = hasSeating
    }
    hoursOfOperationToday = () => {
        const today = new Date().toString().slice(0,3)
        const hours = this._operationTimes[today]
        return `${today}: ${hours.open}-${hours.close}` 
    }
    hoursOfOperationWholeWeek = () => {
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        const day = this._operationTimes
        let hoursOfOp = ""
        for (let weekday of daysOfWeek) {
            if(day[weekday] === "closed") {
                hoursOfOp += `${weekday}: Closed\n`
            } else {
                hoursOfOp += `${weekday}: ${day[weekday].open}-${day[weekday].close}\n`
            }
        }
        // document.querySelector('h2').innerText = hoursOfOp
        return hoursOfOp
    }
    description = () => `This is a plate lunch spot at ${this._address}.`

}

class GasStation extends PlateLunchSpot {
    constructor(name,operationTimes,menuItems,address,hasSeating) {
        super(name,operationTimes,menuItems,address,hasSeating) 
    }
}

class GroceryStore extends PlateLunchSpot {
    constructor(name,operationTimes,menuItems,address,hasSeating) {
        super(name,operationTimes,menuItems,address,hasSeating) 
    }
}

class Restaurant extends PlateLunchSpot {
    constructor(name,operationTimes,menuItems,address) {
        super(name,operationTimes,menuItems,address) 
    }
}

let tester = new PlateLunchSpot("Test", 
                                {"Mon": {"open": "10AM", "close": "5PM"}, "Tue": {"open": "10AM", "close": "5PM"}, "Wed":{"open": "10AM", "close": "5PM"}, "Thu": {"open": "10AM", "close": "5PM"}, "Fri":{"open": "10AM", "close": "5PM"}, "Sat": "closed", "Sun": "closed"}, 
                                {"monday": ["Pork Steak"], "tuesday": "Meatball Stew"}, 
                                "222 TuTu Lane", 
                                false)