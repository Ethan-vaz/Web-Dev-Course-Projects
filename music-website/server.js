const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs")       // ejs
const path = require("path")        // path
app.use(express.static("public"))   // public/ folder

// imports from your own modules
const {fakeSongDatabase} = require("./data/db.js");
const { name } = require("ejs");

// endpoints

// Click to test: http://localhost:8080/
app.get("/", (req, res) => {
  return res.render("home.ejs");
});

// Click to test
// - Examples of endpoints that have songs in the fake database
// http://localhost:8080/artists/Beyonce/random
// http://localhost:8080/artists/RAYE/random
// http://localhost:8080/artists/Drake/random
// - Examples of endpoints that do not have songs in the fake databse
// http://localhost:8080/artists/Eminem/random           (this artist is not in the songs database)
// http://localhost:8080/artists/raye/random             (capitalization does not match RAYE)
app.get("/artists/:name/random", (req, res) => {  

  // example of generating a random number between 2-7

  const check = fakeSongDatabase.find((item) => {
    if (item.artist === (req.params.name)) {
            return true;
        } else {
            return false;
        }
  })

  const list = fakeSongDatabase.filter((currItem) => {
        if (currItem.artist === (req.params.name)) {
            return true;
        } else {
            return false;
        }
  })

  const min = 1
  const max = list.length - 1
  const random = Math.floor(Math.random() * (max - min + 1) + min)
  
  return res.render("song.ejs", {song: `${list[random].title}` , artist: `${list[random].artist}`}) 
  
    
})

// TODO: Given the id of a song, respond to the client with a string
// containing the NAME of the song and the NUMBER OF TIMES the song has been played.
// You are responsible for designing the endpoint (name, implementaton details, response to client, etc)


const startServer = () => {
  console.log(`The server is running on http://localhost:${port}`);
  console.log("Press CTRL + C to exit");
};

app.listen(port, startServer);
