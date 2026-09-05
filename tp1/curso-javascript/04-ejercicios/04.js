function impares(limite) {
    let i = 1;
    while (i <= limite) {
        if (i % 2 !== 0) {
            console.log(i)
        }
        i++;
    }
}

impares(11);