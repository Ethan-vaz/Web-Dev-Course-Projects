// This is an example of cars. 
// The cost of parking is 10.00 per hour.
// When you add a new car, it should be saved here
const carsDb = [
  {
    licensePlate: "VNCM2",
    model: "Toyota Corolla",
    hours: 3,
    cost: 3.00
  },
  {
    licensePlate: "BRNX7",
    model: "Honda Civic",
    hours: 1.5,
    cost:  10.5
  },
  {
    licensePlate: "QEW4",
    model: "Tesla Model 3",
    hours: 2,
    cost: 20
  },
  {
    licensePlate: "PARK8",
    model: "Hyundai Elantra",
    hours: 4,
    cost: 40
  }
] 
module.exports = {carsDb}