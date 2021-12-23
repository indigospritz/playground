// const checkIfPalindrome = (word) => {
//     const letters = []
//     let reverseWord = ""
//     for (let i = 0; i < word.length; i++) {
//         letters.push(word[i])
//     }
//     for (let i = 0; i < word.length; i++) {
//         reverseWord += letters.pop()
//     }
//     if (reverseWord === word) {
//         console.log(word + " is a palindrome")
//     } else {
//         console.log(word + " is not a palindrome")
//     }
// }
// checkIfPalindrome('racecar')

const palindrome = word => {
    return word.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('') === word.toLowerCase().replace(/[\W_]/g, '') ? true : false
}
console.log(palindrome('0_0 (: /-\ :) 0–0'))
console.log(palindrome('A man, a plan, a canal. Panama'))