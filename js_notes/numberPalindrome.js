const isPalindrome = num => {
    // convert the number into iteratable array
    const numArr = Array.from(String(num), Number)
    // loop through the half point of the array and compare the starting index to the ending index until middle
    for (let i = 0; i < numArr.length - 1 / 2; i++) {
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}
