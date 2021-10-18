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

const fibonacci = num => {
    const res = [0, 1]
    for (let i = 2; i <= num; i++) {
        const prevNum1 = res[i - 1]
        const prevNum2 = res[i - 2]
        res.push(prevNum1 + prevNum2)
    }
    
    console.log(res[num])
}
fibonacci(10)

// nth term
// const fibonacci = nthTerm => {
//     let n1 = 0
//     let n2 = 1
//     let res = 0
//     for (let i = 2; i <= nthTerm; i++) {
//         res = n1 + n2
//         n1 = n2
//         n2 = res
//     }
//     return res
// }

// console.log(fibonacci(10))