const isAnagram = (word, unsortedWord) => {
    const regex = /[^a-z0-9]/gi
    let anagram1 = word.replace(regex, '')
    let anagram2 = unsortedWord.replace(regex, '')
    
    return anagram1.length > 0 && anagram2.length && (anagram1.toLowerCase().split('').sort().join('') === anagram2.split('').sort().join(''))
}

console.log(isAnagram('rust? ha!', 'tushar'))