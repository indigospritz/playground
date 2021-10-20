// power digit sum
const powerDigitSum = (base, power) => {
    const num = Array.from((String(BigInt(base**power), Number)))
    let sum = 0
    for (let i = 0; i <= num.length-1; i++) {
        sum += parseInt(num[i])
    }
    return sum
    
}

console.log(powerDigitSum(2, 1000))