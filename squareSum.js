const diffOfSumofSquareAndSquareofsum = range => {
  let sum = 0
  let square = 0
  let sumtoSquare = 0
  for (let i = 1; i <= range; i++) {
    sum += (Math.pow(i, 2))
  }
  for (let i = 1; i <= range; i++) {
    sumtoSquare += i
    square = Math.pow(sumtoSquare, 2)
  }
  console.log(square-sum)
}

diffOfSumofSquareAndSquareofsum(100)