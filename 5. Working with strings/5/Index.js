let userString = prompt('Enter the text for trimming')
let startSliceIndex = prompt('Enter the index from which you need to start pruning the line')
let endSliceIndex = prompt('Enter the index that need to finish the pruning of the line')

userString = userString.trim()
startSliceIndex = startSliceIndex.trim()
endSliceIndex = endSliceIndex.trim()
startSliceIndex = (Number(startSliceIndex))
endSliceIndex = (Number(endSliceIndex))
userString = userString.slice(startSliceIndex, endSliceIndex)

alert(`Result: ${userString}`)