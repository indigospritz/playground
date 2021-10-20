// lsit fibo less than or equal range
// const listfibo = range => {
//     let n1 = 0
//     let n2 = 1
//     let result = []
//     for (let i = 1; i <= range; i++) {
//         if (n2 <= range) {
//             result.push(n2)
//             let nextTerm = n1 + n2
//             n1 = n2
//             n2 = nextTerm        
//         }
//     }
//     console.log(result)
// }
// listfibo(30)

// max nth term 1476

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}
 console.log(fib(8))

// nth term
const fibonacci = nthTerm => {
    let n1 = 0
    let n2 = 1
    let res = 0
    for (let i = 2; i <= nthTerm; i++) {
        res = n1 + n2
        n1 = n2
        n2 = res
    }
    return res
}

console.log(fibonacci())