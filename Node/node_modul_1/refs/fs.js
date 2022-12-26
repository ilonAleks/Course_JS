const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const { get } = require("http");

const base = path.join(__dirname, "temp");

// fs.mkdir(base)
//   .then(() => {
//     console.log("Folder created");
//   })
//   .catch((err) => {
//     console.log("err:", err);
//   });
//! add new folder

const getContent = () => `
  \r${process.argv[2] ?? ""}
`;

async function start() {
  try {
    if (fsSync.existsSync(base)) {
      //! есть ли папка уже?
      // await fs.writeFile(path.join(base, "logs.txt"), getContent());
      //! полностью перезаписывает файл
      await fs.appendFile(path.join(base, "logs.txt"), getContent());
      //! добавляет к существующей инфе в файле
      const data = await fs.readFile(path.join(base, "logs.txt"), {
        encoding: "utf-8",
      });
      console.log(data);
    } else {
      await fs.mkdir(base);
      console.log("Folder created");
      await fs.writeFile(path.join(base, "logs.txt"), getContent());
    }
  } catch (err) {
    console.log("err:", err);
  }
}

start();
// node fs first_log
