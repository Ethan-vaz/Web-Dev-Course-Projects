const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs")       // ejs
const path = require("path")        // path
app.use(express.static("public"))   // public/ folder
app.use(express.urlencoded({ extended: true }));   // req.body

// express-session
const session = require("express-session")
app.use(session({
   // random string, used to generate and encrypt a unique session id
   secret: "the quick brown fox jumped over the lazy dog 1234567890",
   resave: false,
   saveUninitialized: true
}))

// fake db
const { carsDb } = require("./data/fakedb")

// Home: http://localhost:8080/
app.get('/', (req, res) => {
    Total = 0
    for(let i = 0; i < carsDb.length; i++){
        Total += carsDb[i].cost
    }

    res.render("home.ejs", {cars:carsDb, Total:Total})
});

// http://localhost:8080/forms/parking
app.get("/forms/parking", (req,res)=>{
    return res.render("parking.ejs")
})

app.post("/pay", (req,res)=>{

    const car = {
        licensePlate: req.body.license,
        model: req.body.model,
        hours: req.body.hours,
    }
    car.cost = 10 * car.hours
    car.hours = 1 * car.hours

    if (car.model == ""){
        for (let i = 0; i < carsDb.length; i++){
            if (car.licensePlate === carsDb[i].licensePlate){
                carsDb[i].hours += car.hours
                carsDb[i].cost += car.cost
            }
        }
    }
    else{
        carsDb.push(car)
    }
    return res.send(`Success! <a href="/forms/parking">Pay again?</a>`)
})

const startServer = () => {
  console.log(`The server is running on http://localhost:${port}`);
  console.log("Press CTRL + C to exit");
};

app.listen(port, startServer);
