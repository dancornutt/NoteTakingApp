const path = require("path");
const fs = require("fs");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get("/api/notes", function(req, res) {
    console.log("fetching all notes for user...");
    // let db_data = fs.readFile("", () => {
    //   res.json(db_data);
    // })
    // let rawdata = fs.readFileSync('../db/db.json');
    

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data))
    });
  });

  app.post("/api/notes", function(req, res) {
    
    let db = fs.readFile("../db/db.json");
    let nextID = db.length;
    res.json({"this": "That"});
  });
};
