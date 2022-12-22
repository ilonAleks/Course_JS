const fs = require("fs/promises");
const path = require("path");

const notesPath = path.join(__dirname, "db.json");
//! node notes.controller => C:\Users\i.roguleva\лич\Course_JS\Node\node_modul_1\db.json

async function addNote(title) {
  // const buffer = await fs.readFile(notesPath);
  // console.log(buffer); //!<Buffer 5b 7b 22 74 69.... 35 more butes>
  // const notes = Buffer.from(buffer).toString("utf-8");
  // console.log(notes); //! [{"title":"Hello","id":"1671716025036"},{"title":"From-console","id":"1671716118381"}]
  // console.log(typeof notes); //!string
  // console.log(typeof JSON.stringify(notes)); //!object

  const notes = await getNotes();
  // console.log(notes);
  //! [
  //!   {"title":"Hello","id":"1671716025036"},
  //!   {"title":"From-console","id":"1671716118381"}
  //! ]

  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);
  await fs.writeFile(notesPath, JSON.stringify(notes));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
  // если массив, то возвращаем массив, если нет - пустой массив
}

addNote("Test");

module.exports = {
  addNote,
  getNotes,
};
