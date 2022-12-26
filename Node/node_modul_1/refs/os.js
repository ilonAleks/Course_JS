const os = require("os");

console.log(os.platform());
//! win32

console.log(os.arch());
//! x64

console.log(os.cpus());
//! [
//!   {
//!     model: 'Intel(R) Core(TM) i3-9100 CPU @ 3.60GHz',
//!     speed: 3600,
//!     times: {
//!       user: 113907781,
//!       nice: 0,
//!      sys: 26062609,
//!       idle: 421413656,
//!       irq: 2182484
//!     }
//!   },
//!   {
//!     model: 'Intel(R) Core(TM) i3-9100 CPU @ 3.60GHz',
//!     speed: 3600,
//!     times: {
//!      user: 126471250,
//!       nice: 0,
//!       sys: 27138062,
//!       idle: 407774546,
//!       irq: 612671
//!     }
//!   },
//!   {
//!     model: 'Intel(R) Core(TM) i3-9100 CPU @ 3.60GHz',
//!     speed: 3600,
//!     times: {
//!       user: 129525390,
//!       nice: 0,
//!       sys: 19526890,
//!       idle: 412331578,
//!       irq: 349390
//!     }
//!   },
//!   {
//!     model: 'Intel(R) Core(TM) i3-9100 CPU @ 3.60GHz',
//!     speed: 3600,
//!     times: {
//!       user: 156785750,
//!      nice: 0,
//!       sys: 18552984,
//!       idle: 386045125,
//!       irq: 370765
//!     }
//!   }
//! ]

console.log(os.freemem());
//! 1300209664

console.log(os.totalmem());
//! 8239636480

console.log(os.uptime());
//! 2412534 in sec

console.log(os.homedir());
//! C:\Users\i.roguleva
