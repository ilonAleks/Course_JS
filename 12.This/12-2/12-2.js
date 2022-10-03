//bind
const bindGetFullName = getFullName.bind(obj)
bindGetFullName()

//call
getFullName.call(obj, 30, 3)
//сразу вызывает функцию

//apply
getFullName.apple(obj, [30, 3])