const data = {
    ernie: {
        age: 12,
        height: '5.4'
    }
}

const toString = (obj, objProp) => {
let myObj = []
    for (let i in obj) {
        myObj.push(data.objProp[i])
    }
    return myObj
}

console.log(toString(data))