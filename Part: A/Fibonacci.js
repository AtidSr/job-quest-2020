const fib = (number) => {
    if(number <= 2) return 1
    return fib(number-2) + fib(number - 3)
}

console.log(fib(1))
//1

console.log(fib(3))
//2

console.log(fib(12))
//144