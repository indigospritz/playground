const reverseArrayInPlace = arr => {
	let tempArr = []
  	for (let i = 0; i < arr.length; i++) {
   		tempArr.push(arr[arr.length-1-i])
    }
    return tempArr
  	
}
console.log(reverseArrayInPlace([1,2,3,4,5]))