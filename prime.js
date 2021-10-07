const isPrime = num => {
    let divisor = num - 1
    let result = false
    while (!result) {
        let num2 = true
        for (divisor; divisor > 1; divisor--) {
            if (num % divisor === 0) {
                num2 = false // not prime                
            }
           result = num2
        }
        return result
    }
  }
  
  console.log(isPrime(12))
  
//   isPrime(2) // true
//   isPrime(3) // true
//   isPrime(4) // false
//   isPrime(5) // true