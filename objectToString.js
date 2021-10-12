const data = {
  ernie: {
    age: 12,
    height: '5.4',
    jeash: {
      gender: 'male',
      pets: [{ name: 'dog', age: 12 }, { name: 'cat', age: 2 }],
      games: ['COD', 'Red dead redemption']
    }
  }
}


const objectKeys = obj => {
  var arrKeys = []
  for (let key in obj) {
    arrKeys.push(key)
    if (typeof obj[key] === "object" || Array.isArray(obj[key])) {
      let subkeys = objectKeys(obj[key])
      arrKeys = arrKeys.concat(subkeys.map((subkeys) => {
        return arrKeys + "." + subkeys
      }))
    }
    return arrKeys
  }
}

// const deepKeys = (t, path = []) =>
//   Object(t) === t
//     ? Object                                             // 1
//         .entries(t)
//         .flatMap(([k,v]) => deepKeys(v, [...path, k]))
//     : [ path.join(".") ]                                 // 2

// const input =
//   {1:"Raggruppamento a 1",2:"Raggruppamento a 2",3:"Raggruppamento a 3",4:"Raggruppamento a 4",count:'3',counter:{count:'3',},5:{test:"Raggruppamento a 1",tester:{name:"Georgi"}}}

// for (const path of deepKeys(data))
//   console.log(path)
const objectKeys2 = obj => {
  return Object.keys(obj).filter(key => obj[key] instanceof Object).map(key => objectKeys2(obj[key]).map(k => `${key}.${k}`)).reduce((x, y) => x.concat(y), Object.keys(obj))
}
console.log(objectKeys2(data))