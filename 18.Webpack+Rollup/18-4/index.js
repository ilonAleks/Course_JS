import "./index.css"
import JS_IMG from './assets/JavaScript.jpg'
import WP_IMG from './assets/webpack.png'

console.log('Hello World!')

const body = document.body

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript and Webpack'
body.append(h1)

const jsImageHTML = document.createElement('img')
// jsImageHTML.src = './assets/JavaScript.jpg'
jsImageHTML.src = JS_IMG
body.append(jsImageHTML)

const webpackImageHTML = document.createElement('img')
// webpackImageHTML.src = './assets/webpack.png'
webpackImageHTML.src = WP_IMG
body.append(webpackImageHTML)

