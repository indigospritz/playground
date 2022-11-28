const isPalindrome = num => {
    // convert the number into iteratable array
    const numArr = Array.from(String(num), Number)
    // loop through the half point of the array 
    for (let i = 0; i < numArr.length - 1 / 2; i++) {
    // compare the current index to the ending index until middle
        if (numArr[i] !== numArr[numArr.length -1 -i]) {
            return false
        }
    }
    return true
}
