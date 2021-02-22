const shift = (list, command, number) => {
    let newArray = list
    if (command === 'left') {
        for (let index = 0; index < number; index++) {
            newArray.push(newArray.shift())
        }
        return newArray
    }

    if (command === 'right') {
        for (let index = 0; index < number; index++) {
            newArray.unshift(newArray.pop())
        }
        return newArray
    }
} 

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))

console.log(shift([1, 2, 3, 4 ,5], 'right', 3))
