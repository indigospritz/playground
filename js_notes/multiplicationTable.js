const sort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j <= arr.length - 1; j++) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp
      }
    }
  }

  console.log("min = " + arr[0])
  console.log(`max = ${arr[arr.length-1]}`)
}

sort([4,20,10,35,30,7])