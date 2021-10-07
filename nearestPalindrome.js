const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    const firstHalfOfNumArr = []
    const secondHalfOfNumArr = []
    for (let i = 0; i < numArr.length / 2 - 1; i++) {
        firstHalfOfNumArr.push(numArr[i])
    }
    for (let i = 0; i <= firstHalfOfNumArr.length -1; i++) {
        numArr.splice(numArr.length - 1 - i, 1, firstHalfOfNumArr[i])
    }

    
    return numArr
}
 console.log(isPalindrome(223455))