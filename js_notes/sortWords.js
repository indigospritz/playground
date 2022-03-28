// split string into char
const str = 'nasm,dnasAaskda13123~~/!!l'
// remove special characters
const cleanStr = str.replace(/[^A-Za-z]+/g, '')
const strArr = []

for (let i = 0; i < cleanStr.length; i++) {
  // store char to array
  strArr[i] = cleanStr[i]
}
console.log(strArr)

// navigate the length of arr
for (let i = 1; i <= strArr.length; i++) {
  // navigate and decrease the length of arr to be compare
  for (let j = 1; j <= strArr.length-i; j++) {
    // check if current index is greater than next index
    if (strArr[j-1] > strArr[j]) {
      // if true, assign the current index to next index, if false, continue
      let temp = strArr[j-1]
      strArr[j-1] = strArr[j]
      strArr[j] = temp
    }
  }
}
// sorted array
console.log(strArr)

// display single char and remove duplicates
for (let i = 0; i < strArr.length; i++) {
  if (strArr[i] !==  strArr[i+1]) {
    console.log(strArr[i])
  }
}

const word = 'i love     programming'
const word2 = word.replace(/\s/g, '')
const word3 = word.replace(/ /g, '')
const word4 = word.split('').reverse().join('').replace(/\s/g, '')
console.log(word2)
console.log(word3)
console.log(word4)

