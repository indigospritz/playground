const checkIfPalindrome = (word) => {
    const letters = []
    let reverseWord = ""
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }
    for (let i = 0; i < word.length; i++) {
        reverseWord += letters.pop()
    }
    if (reverseWord === word) {
        console.log(word + " is a palindrome")
    } else {
        console.log(word + " is not a palindrome")
    }
}
checkIfPalindrome('racecar')