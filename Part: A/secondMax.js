// 3. Second max: Write a function `secondMax` that receive an array of number. The function will return the second maximum value of the array. 
// If there is no second max, return max instead. If an array is empty, throw and error.

const secondMax = (array) => {
    if(array.length <= 0) throw 'Error!'
    let max = 0
    let secondMax = 0
    for(let x in array) {
        if(array[x] > max) {
            secondMax = max
            max = array[x]
        }
    }
    return secondMax || max
}

console.log(secondMax([2, 3, 4, 5]))
// 4

console.log(secondMax([9, 2, 21, 21]))
// 9

console.log(secondMax([4, 4, 4, 4]))
// 4

console.log(secondMax([4123]))
// 4123

console.log(secondMax([]))
// Error!