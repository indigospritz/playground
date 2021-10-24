const factorSum = (sum, arr) => {
  const tempArr = arr.slice()
  tempRes = 0
  let res = []
  for (let i = 0; i < tempArr.length; i++) {
    let check = tempArr[i] - sum
    if (check == 0) {
      res.push(tempArr[i])
    } else {
      res.push(tempArr[i + 1])
    }
    
  }
  console.log(res)
}

const number = [1,2,3, 4, 5]
factorSum(5, number)
