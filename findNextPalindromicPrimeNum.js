const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    return true
    }
}

const nextPalPrimeNum = num => {
    let found = false
    let tempNum
    while (!found) {
        if (isPalindrome(num) && isPrime(num) === true) {
            found = true
            tempNum = num
        } else {
            num++
            tempNum = num
        }
    }
    return num
}

console.log(nextPalPrimeNum(140))