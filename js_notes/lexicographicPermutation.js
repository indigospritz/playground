let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const getPermutation = (index, seq) => {
    if (seq.length == 0) {
        return ""
    }

    const firstDigitOccurences = factorialOf(seq.length - 1)

    const firstDigitIndex = Math.floor(index/firstDigitOccurences)

    const firstIndexFirstDigitIndex = firstDigitIndex * firstDigitOccurences
    
    const firstDigit = seq[firstDigitIndex]

    const recursiveIndex = index - firstIndexFirstDigitIndex
    const recursiveSeq = seq.filter(item => item !== firstDigit)

    return firstDigit + getPermutation(recursiveIndex, recursiveSeq)
}

const factorialOf = num => {
    let product = 1
    for (let i = 2; i <= num; i++) {
        product *= i
    }
    return product
}

// console.log(factorialOf(9))
console.log(getPermutation(1000000 - 1, num))
