function getbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) return "Indice no válido."

    return arr[idx]
}

let resultado = getbyIdx([1,2], 0);
console.log(resultado)