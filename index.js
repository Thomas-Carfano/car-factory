const getDiv = document.querySelector('span');

class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription(){
    return [this.make, this.model, this.year]
}};

// const myCar = new Car("Mazda", "CX-5", 2018);
// console.log(myCar.getDescription());

class ElectricCar extends Car {
    constructor(make, model, year, range){
        super(make, model, year);
        this.range = range;
    }
    updateGetDescription(){
    // return `${super.getDescription()}, Range: ${this.range}`
    return `
    <h3>Make: ${this.make}</h3>
    <h3>Model: ${this.model}</h3>
    <h3>Year: ${this.year}</h3>
    <h3>Range: ${this.range}</h3>
    `
}}

const myECar = new ElectricCar("Tesla", "Model S", 2019, 300);
const result = myECar.updateGetDescription()

getDiv.innerHTML = `<h3> ${result} </h3>`
console.log(myECar.updateGetDescription());