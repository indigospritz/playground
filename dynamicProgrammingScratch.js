// Measure function execution time
// const { performance } = require('perf_hooks')
// let start = performance.now()
// let end = performance.now()
// console.log(`${end - start}`);

const frequencySort = s => {
    
    return s.split('').sort((a, b) => a - b).reverse().join('')
}

console.log(frequencySort('tree'))