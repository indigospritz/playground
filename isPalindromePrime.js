const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}

const isPalPrime = num => {
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

console.log(isPalPrime(101))