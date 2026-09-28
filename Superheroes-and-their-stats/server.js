const express = require("express")
const app = express()
const port = 8080;

app.set("view engine", "ejs")

const {superheroes} = require("./data/db")

// http://localhost:8080
app.get("/", (req,res)=>{    

    console.log(superheroes)



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

// endpoint that  updates the power lvel of a selected hero

// http://localhost:8080/superhero/increase/13
// http://localhost:8080/superhero/increase/11

app.get("/superhero/increase/:idOfHero", (req,res)=>{

    // use the id to find the superhero in the database
    const arrayPos = superheroes.findIndex((item)=>{
        if (item.id === Number(req.params.idOfHero)) {
            return true
        } else {
            return false
        }
    })

    // using the id, get the corresponding object
    superheroes[arrayPos].powerLevel += 1

    console.log(superheroes[arrayPos])


    return res.send("powerlevel incrased")
    
})

const startServer = () => {
   console.log(`The server is running on http://localhost:${port}`)
   console.log(`Press CTRL + C to exit`)
}
app.listen(port, startServer)
