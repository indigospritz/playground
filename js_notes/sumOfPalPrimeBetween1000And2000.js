// find  the sum of all palindromic prime num between 1000 and 2000
const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length - 1 - i]) {
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

const sumOfPalPrime = num => {
    let result = 0
    for (let i = num; i < 20000; i++) {
        if (isPalindrome(i) && isPrime(i)) {
            console.log(i)
            result += i
        } 
    }
    return result
}
console.log(sumOfPalPrime(1000))

// x2 * y2 == z2

// 4 + 4 = 4
// 9 + 9 == 9
asdasdasd
