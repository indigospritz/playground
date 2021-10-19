// power digit sum
const powerDigitSum = (base, power) => {
    const num = base**power
    return BigInt(num).toString().split('').reduce((prev, curr) => prev + curr, 0)
}

console.log(powerDigitSum(2, 1000))