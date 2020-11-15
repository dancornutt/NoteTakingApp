const path = require("path");
const fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    console.log("fetching all notes for user...");
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data))
    });
  });

  app.post("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let oldData = JSON.parse(data);
      let nextID = oldData.length !== 0 ? Math.max(...Object.keys(oldData)) + 1 : 0;
      let newNote = req.body;
      newNote["id"] = nextID;
      oldData.push(newNote);
      let dataStr = JSON.stringify(oldData)
      writeData(dataStr);
      res.send(newNote);
    });
  });

  app.delete("/api/notes/:id", function(req, res) {
    let delID = req.params.id;
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let oldData = JSON.parse(data);
      let newData = oldData.filter(note => note.id !== +delID)
      let dataStr = JSON.stringify(newData)
      writeData(dataStr);
    })
  })
};

function writeData(data) {
  fs.writeFile('./db/db.json', data, (err) => {
    if (err) throw err;
    console.log("Data has been written to file.")
  });
}

