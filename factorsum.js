const factorSum = (sum, arr) => {
  const tempArr = arr.slice()
  tempRes = 0
  let res = []
  for (let i = 0; i < tempArr.length; i++) {
    let check = tempArr[i] - sum
    if (check == 0) {
      res.push(tempArr[i])
    }
  }
  console.log(res)
}

const number = [1,2,3]
factorSum(4, number)
