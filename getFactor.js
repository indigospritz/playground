const getFactors = num => {
    let factors = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }
    console.log(factors)
}

getFactors(1) // [1]
getFactors(3) // [1,3]
getFactors(6) // [1,2,3,6]
getFactors(10) // [1,2,5,10]
getFactors(15) // [1,3,5,15]
getFactors(21) // [1,3,7,21]
getFactors(28) // [1,2,4,7,14,28]