const fs = require("fs/promises");

async function addNote(title) {
  const notes = require("./db.json");

  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);
  await fs.writeFile("./db.json", JSON.stringify(notes));
}

function getNotes() {
  return require("./db.json");
}

module.exports = {
  addNote,
  getNotes,
};

// node index.js add --title=Hello => запись в db.json
// [{ "title": "Hello", "id": "1671716025036" }]

// node index.js add --title=From-console => запись в db.json
// [{"title":"Hello","id":"1671716025036"},{"title":"From-console","id":"1671716118381"}]

//node index.js list =>
// [
//   { title: 'Hello', id: '1671716025036' },
//   { title: 'From-console', id: '1671716118381' }
// ]
