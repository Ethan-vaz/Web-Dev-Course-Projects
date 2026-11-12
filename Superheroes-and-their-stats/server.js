const express = require("express")
const app = express()
const port = 8080;

app.set("view engine", "ejs")

const {superheroes} = require("./data/db")

// http://localhost:8080
app.get("/", (req,res)=>{    



    // 1. server.js will open the file views/home.ejs
    // 2. read the file
    // a.  If it sees placeholders <%= %>,replace the placeholder with data
    // b.  If it sees simple logic code <% %>, execute that logic
    // 3. After it finishes doing this, 
    // it creates a final HTML code 
    // 4. Sends the final HTML code to the client
    // 5. That is what your browser renders on the screen    
 

    // Look for a placeholder in your home.ejs called x
    // Set the value of x to the superheroes array from the module

    // if x = superheroes
    // if superheroes = array
    // x = array 

    // if superheroes[0] gets the first item
    // and if x = superheroes
    // x[0] also get the first item

    // if superheroes[0].realName will get the 
    // real name of the first item in the array
    // AND
    // if x = superheroes
    // THEN
    // x[0].realName should get the real name o
    // if the hero in the first post
    return res.render("home.ejs",  {x:superheroes})


})

// Increase the power level of the selected hero by 1.
// Called from the form on the home page:
// POST http://localhost:8080/superhero/increase/13
app.post("/superhero/increase/:idOfHero", (req, res) => {
    const hero = superheroes.find((item) => item.id === Number(req.params.idOfHero))

    if (!hero) {
        return res.status(404).send("Superhero not found")
    }

    hero.powerLevel += 1

    // Send the user back to the home page so they see the updated value
    return res.redirect("/")
})

const startServer = () => {
   console.log(`The server is running on http://localhost:${port}`)
   console.log(`Press CTRL + C to exit`)
}
app.listen(port, startServer)
