// 1 innerHTML
const getClass = document.querySelector('inBody')
const form = '<form class="create-user - form"></form>'
getClass.insertAdjacentElement('afterbegin', form)
// console.log(getClass)
// 2 document.createElement