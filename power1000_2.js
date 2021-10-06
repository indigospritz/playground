let num = 151
let arrOfNum = Array.from(String(num), Number)
let sum = 0
let validFound
const isValid = arrOfNum.forEach(checkExp => {
    sum += checkExp**arrOfNum.length
    if (sum === num) {
        validFound = true
    } else {
        validFound = false
    }
})
console.log(validFound)