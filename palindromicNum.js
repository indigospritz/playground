const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    for (let i = 0; i < numArr.length / 2; i++) {
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}

const findNextPalindromicNum = count => {
    let msg = ' is prime'
    let found = false
    let nextPalindromicNum
    while (!found) {
        if (isPalindrome(count)) {
            found = true
            nextPalindromicNum = count
        } else {
            count++
        }
    }

    
    return nextPalindromicNum + msg
}

console.log(findNextPalindromicNum(1011012))