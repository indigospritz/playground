// even fibonacci
const findFibo = () => {
    let sumOfEvenFibo = 0
    let n1 = 1
    let n2 = 1
    while (sumOfEvenFibo < 4000000) {  
        let nextTerm = n1 + n2
        if (nextTerm % 2 == 0) {
            sumOfEvenFibo += nextTerm
        }
        n1 = n2
        n2 = nextTerm
    }
    return sumOfEvenFibo
}

console.log(findFibo());