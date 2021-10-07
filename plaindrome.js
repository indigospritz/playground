const checkIfPalindrome = (word) => {
    const letters = []
    const reverseWord = ""
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }
    for (let i = 0; i < word.length; i++) {
        reverseWord += letters.pop()
    }
    if (rword === word) {
        console.log(word + " is a palindrome")
    } else {
        console.log(word + " is not a palindrome")
    }
}