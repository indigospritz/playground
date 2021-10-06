function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j]
    }
  }
  console.log(product)
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
