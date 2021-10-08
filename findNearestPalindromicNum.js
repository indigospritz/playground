const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}

const nextPalindromicNum = count => {
    let found = false
    while (!found) {
        if (isPalindrome(count)) {
            found = true
        } else {
            count++
        }
    }
    return count
}

console.log(nextPalindromicNum(142))