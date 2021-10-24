const allConstruct = (target, wordBank) => {
    if (target === '') return [[]]

    const result = []
    
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetways = suffixWays.map(way => [ word, ...way] )
            result.push(...targetways)
        }
    }
    return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));