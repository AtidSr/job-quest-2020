const check = (number1, number2) => {
    return number1 % number2 === 0
}

const fizzBuzz = (input) => {
    let result = ''
    switch (input) {
        case check(input,15):
            result = FizzBuzz
            break;
        case check(input,3):
            result = Fizz
            break;
        case check(input,5):
            result = Buzz
            break;
        default:
            break;
    }
    return result
}

console.log(fizzBuzz(21))
//Fizz

console.log(fizzBuzz(25))
//Buzz

console.log(fizzBuzz(45))
//FizzBuzz