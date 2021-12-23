const isPalindrome = num => {
    const numArr = Array.from(String(num), Number)
    console.log(numArr)
    let tempArr = []
    for (let i = numArr.length - 1; i >= 0; i--) {
        tempArr.push(numArr[i])
    }
    return tempArr
}
console.log(isPalindrome(123))