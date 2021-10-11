const data = {
  ernie: {
    age: 12,
    height: '5.4'
  }
}

const toString = obj => {
  const myData = Object.keys(obj)
  return myData
}

console.log(toString(data))