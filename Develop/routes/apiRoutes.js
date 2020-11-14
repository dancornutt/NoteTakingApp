const path = require("path");
const fs = require("fs");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get("/api/notes", function(req, res) {
    let db_data = fs.readFile("../db/db.json", () => {
      res.json(db_data);
    })
  });

  app.post("/api/notes", function(req, res) {
    let db = fs.readFile("../db/db.json");
    let nextID = db.length;
    res.json(req.body['id'] = nextID);
  });
};
