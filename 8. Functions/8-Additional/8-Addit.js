function showSuccessMessage(message) {
	console.log(message)
}

function showErrorMessage(message) {
	console.error(message)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
	if (text.includes(errorSymbol)) {
		for (let i = 0; i < text.length; i++) {
			if (text[i] === errorSymbol) {
				errorCallback(`Found a prohibited symbol "${errorSymbol}" under the index ${i}.`)
			}
		}
	} else {
		successCallback('There are no prohibited characters in this text')
	}
}

checkTextOnErrorSymbol('Hello! How are you! For a long time you and I have not seen each other.', 'a', showSuccessMessage, showErrorMessage)
