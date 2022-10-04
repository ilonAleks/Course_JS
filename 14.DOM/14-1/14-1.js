// 1 innerHTML
document.querySelector('.inBody').innerHTML = `<form className="create-user-form">
<label>
		Имя
		<input type="text" name="userName" placeholder="Введите ваше имя"/>
</label>
<label>
		Пароль
		<input type="password" name="password" placeholder="Придумайте Пароль"/>
</label>
<button type="submit">
		Подтвердить
</button>
</form>`

// 2 document.createElement
const setForm = document.createElement('form')
setForm.className = 'create-user-form'

const setLabel1 = document.createElement('label')
setLabel1.textContent = 'Имя'

const setLabel2 = document.createElement('label')
setLabel2.textContent = 'Пароль'

const setInput1 = document.createElement('input')
setInput1.type = 'text'
setInput1.name = 'userName'
setInput1.placeholder = 'Введите ваше имя'

const setInput2 = document.createElement('input')
setInput2.type = 'password'
setInput2.name = 'password'
setInput2.placeholder = 'Придумайте Пароль'

const setButton = document.createElement('button')
setButton.className = 'submit'
setButton.textContent = 'Подтвердить'

const getClass = document.querySelector('.inBody')
getClass.insertAdjacentElement('afterbegin', setForm)
setForm.insertAdjacentElement('afterbegin', setLabel1)
setLabel1.insertAdjacentElement('beforeend', setInput1)
setLabel1.insertAdjacentElement('afterend', setLabel2)
setLabel2.insertAdjacentElement('beforeend', setInput2)
setLabel2.insertAdjacentElement('afterend', setButton)