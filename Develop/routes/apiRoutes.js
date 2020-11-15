const path = require("path");
const fs = require("fs");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    console.log("fetching all notes for user...");
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data))
    });
  });

  app.post("/api/notes", function(req, res) {
    console.log("Getting post reqeusts");
    let dbArr = fs.readFile("./db/db.json");
    let nextID = dbArr.length;
    let newNote = res.body;
    newNote[id] = nextID;
    dbArr.push(newNote);
    fs.writeFile('./db/db.json', dbArr);
  });
};
