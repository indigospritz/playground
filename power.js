function isValid(num) {
    let arrOfNum = Array.from(String(num), Number)
    let sum = 0
    let isValid = true
    for (let i = 0; i < arrOfNum.length; i++) {
        sum += arrOfNum[i]**arrOfNum.length
    }
    if (sum === num) {
        isValid = true
    } else {
        isValid = false
    }
    console.log(isValid)
}

isValid(153) // true
// isValid(22) // false

// find a valid number starting 1000