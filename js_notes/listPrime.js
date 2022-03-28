// list of all prime number within N range
const listPrime = num => {
  // 
  let sum = 0
  for (let i = 2; i < num; i++) {
    let flag = true
    for (let j = 2; j<=i-1; j++) {
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag) {
      console.log(i) 
      // return sum
      sum+=i
      // console.log(sum+=i)
    }
  }
  return sum
}
console.log(listPrime(101))