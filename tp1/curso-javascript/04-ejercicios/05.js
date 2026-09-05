let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr) {
    for (i in arr) {
        if (i == 0) {
            min = arr[i];
            max = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return [min, max];
}

let numeros = getMenorMayor(array);
console.log(numeros);