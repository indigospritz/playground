const longestWord = str => {
	let words = str.split(" ")
	let longestWord = ""
	
	for (let word of words) {
		if (word.length > longestWord.length) {
			longesWord = word
		}
	}
	return longestWord
}

console.log(longestWord("Who was in Paris?")
console.log(longestWord("I was in Paris")