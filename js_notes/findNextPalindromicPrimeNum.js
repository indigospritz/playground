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
    let found = false
    if (isPalindrome(num)) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                found = false
                break
            } else {
                found = true
            }
        }
    }
    return found
}

const nextPalPrimeNum = num => {
    let found = false
    let validNum
    while (!found) {
        if (isPrime(num) && isPalindrome(num)) {
            found = true
            validNum = num
        } else {
            num++
        }
    }
    return validNum
}

console.log(nextPalPrimeNum(1991))