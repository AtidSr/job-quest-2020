const fib = (number) => {
    if(number < 3) return 1
    return fib(number - 1) + fib(number - 2)
}

console.log(fib(1))
//1

console.log(fib(3))
//2

console.log(fib(12))
//144