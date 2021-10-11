// Your code here.
const reverseArray = arr => {
	let tempArr = []
    for (let i = arr.length - 1; i >= 0;i--){
    	tempArr.push(arr[i])
    }
    return tempArr
}

const reverseArrayInPlace = arr => {
	let tempArr = []
  	for (let i = 0; i < arr.length; i++) {
   		tempArr.push(arr[arr.length - 1 - i])
    }
  	return tempArr
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 1, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]