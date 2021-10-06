const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});


console.log(lessThanTen)
console.log(jumbledNums[3])

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
  });
   
  console.log(greaterThan1000);

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animalName => {
  return animalName === 'elephant'
})

console.log(foundAnimal)

const startsWithS = animals.findIndex(animalNameStartS => {
  return animalNameStartS[0] === 's' ? true : false
})

console.log(startsWithS)
