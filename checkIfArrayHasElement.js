
// Check if array has an element

const arr = ['a', 'b', 'c']

function has (haystack, needle) {
    let found = false
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i].includes(needle)) {
            found = true
        }
    }
    console.log(found)  
}

has(arr, 'a') // true
has(arr, 'z') // false
