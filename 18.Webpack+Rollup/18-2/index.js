import "./index.css"

console.log('Hello World!')

const body = document.body

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript and RollUp'
body.append(h1)

const jsImageHTML = document.createElement('img')
jsImageHTML.src = './assets/JavaScript.jpg'
body.append(jsImageHTML)

const rollupImageHTML = document.createElement('img')
rollupImageHTML.src = './assets/rollup.jpg'
body.append(rollupImageHTML)

