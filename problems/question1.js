const range = (start, stop) => Array.from({ length: (stop - start) }, (_, i) => start + (i));

solve = () => {
    let sum = 0;
    for (let i in range(0, 1000)) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = parseInt(sum) + parseInt(i);
        }
    }

    return sum;
}

console.log(`Soma dos multiplos de 3 e 5 até 1000: ${solve()}`);
