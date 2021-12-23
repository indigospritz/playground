const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return true

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}

console.log(canConstruct('abcdef', ['abc', 'ab', 'cd', 'def', 'abcd']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']))
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotenpot', ['a', 'p', 'enter', 'ent', 'ot', 'o', 't', 'enterapot', 'p', 'enterapoten']))