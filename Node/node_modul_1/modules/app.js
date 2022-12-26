// import path from "path";
// console.log(path);
//! for view - add into package.json  "type": "module",

//?=================

// import { Playground } from "./playground.js";
// console.log(Playground.NUM);
//! in import added .js!

//?=================

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);
//! C:\Users\i.roguleva\лич\Course_JS\Node\node_modul_1\modules\app.js
//! C:\Users\i.roguleva\лич\Course_JS\Node\node_modul_1\modules
