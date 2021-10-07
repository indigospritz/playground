const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}

const findPalindromicNum = count => {
    let found = false
    let foundPalindromicNum
    while (!found) {
        if (isPalindrome(count)) {
            found = true
            foundPalindromicNum = count
        } else {
            count++
        }
    }
    return foundPalindromicNum
}

console.log(findPalindromicNum(101102))