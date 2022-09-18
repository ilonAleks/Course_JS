// 1
console.log(Number(' 1 2 3 4 5'));
// NaN

// 2
console.log(Number('1234 5'));
// NaN

// 3
console.log(Number('12345'));
// 12345

// 4
console.log(String(false));
// false

// 5
console.log(Boolean(0000000));
// false

// 6
console.log(Boolean(0.0000001));
// true

// 7
console.log(String(undefined));
// undefined

// 8
console.log(Number('100f'));
// NaN

// 9
console.log(Number('100'));
// 100

// 10
console.log(Number('000001'));
// 1