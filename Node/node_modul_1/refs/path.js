const path = require("path");

console.log(path.dirname(__filename));
//! C:\Users\i.roguleva\лич\Course_JS\Node\node_modul_1\refs

console.log(path.basename(__filename));
//! path.js

console.log(path.extname(__filename));
//! .js

console.log(path.extname(__filename).slice(1));
//! js

console.log(path.parse(__filename));
//! {
//!  root: 'C:\\',
//!  dir: 'C:\\Users\\i.roguleva\\лич\\Course_JS\\Node\\node_modul_1\\refs',
//!  base: 'path.js',
//!  ext: '.js',
//!  name: 'path'
//! }

console.log(path.resolve(__dirname, "..", "./modules", "./app.js"));
//! C:\Users\i.roguleva\лич\Course_JS\Node\node_modul_1\modules\app.js
//! absolutly way

console.log(path.join(__dirname, "..", "./modules", "./app.js"));
//! C:\Users\i.roguleva\лич\Course_JS\Node\node_modul_1\modules\app.js
//! cancatination
