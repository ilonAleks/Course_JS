// 1 innerHTML
document.querySelector('.inBody').innerHTML = `<form className="create-user-form">
<label>
		Name
		<input type="text" name="userName" placeholder="Enter your name"/>
</label>
<label>
		Password
		<input type="password" name="password" placeholder="Create Password"/>
</label>
<button type="submit">
		Confirm
</button>
</form>`

// 2 document.createElement
const setForm = document.createElement('form')
setForm.className = 'create-user-form'

const setLabel1 = document.createElement('label')
setLabel1.textContent = 'Name'

const setLabel2 = document.createElement('label')
setLabel2.textContent = 'Password'

const setInput1 = document.createElement('input')
setInput1.type = 'text'
setInput1.name = 'userName'
setInput1.placeholder = 'Enter your name'

const setInput2 = document.createElement('input')
setInput2.type = 'password'
setInput2.name = 'password'
setInput2.placeholder = 'Create Password'

const setButton = document.createElement('button')
setButton.className = 'submit'
setButton.textContent = 'Confirm'

const getClass = document.querySelector('.inBody')
getClass.insertAdjacentElement('afterbegin', setForm)
setForm.insertAdjacentElement('afterbegin', setLabel1)
setLabel1.insertAdjacentElement('beforeend', setInput1)
setLabel1.insertAdjacentElement('afterend', setLabel2)
setLabel2.insertAdjacentElement('beforeend', setInput2)
setLabel2.insertAdjacentElement('afterend', setButton)