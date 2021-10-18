// problem 4
const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length - 1 / 2; i++) {
        if (numArr[i] != numArr[numArr.length - 1 - i]) {
            return false
        }
    }
    return true
}

const largestPalProduct = () => {
    let largestProd = 0
    for (let i = 999; i > 99; i--) {
        for (let j = 999; j > 99; j--) {
            let prod = i * j
            if (isPalindrome(prod) && prod > largestProd){
                largestProd = prod
            }
        }
    }
    return largestProd
}

console.log(largestPalProduct())