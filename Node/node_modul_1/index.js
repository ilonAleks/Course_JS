const yargs = require("yargs");
const pkg = require("./package.json");

yargs.version(pkg.version);
//node index.js --version => 1.0.0

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: { type: "string", describe: "Note title", demandOption: true },
  },
  handler({ title }) {
    console.log("Add command:", title);
  },
});
// node index.js add => Add command

// node index.js add --help => Options:
// --title    Note title

//node index.js add --title=Hello =>
// Add command:  Hello

yargs.command({
  command: "list",
  describe: "Print all notes",
  handler() {
    console.log("List command");
  },
});
//node index.js list => List command

yargs.parse();

//node index.js help => Commands:
// index.js add   Add new note to list
// index.js list  Print all notes
