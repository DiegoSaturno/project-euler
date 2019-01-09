const util = require('../util/util');

const fibonacci = (i) => {
    return fibonacciRecursive(i);
}

const fibonacciRecursive = (i) => {
    if (i === 1) {
        return 1;
    } else if (i === 0) {
        return 0;
    }

    return fibonacciRecursive(i - 1) + fibonacciRecursive(i - 2);
}

Array.prototype.pushIfFibonnaciSeqNumberIsEven = function(n) {
    if (n % 2 === 0)
        this.push(n);
}

solve = () => {
    let arr = [];
    for (let i of util.range(1, 10)) {
        let fibItem = fibonacci(i);
        arr.pushIfFibonnaciSeqNumberIsEven(fibItem);
    }
    console.log(`Soma dos itens da sequencia de fibonacci: ${arr.reduce((acc, current) => acc + current)}`);
}

solve();