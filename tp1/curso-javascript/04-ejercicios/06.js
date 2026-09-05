let array2 = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr) {
    count = 0;
    for (i in arr) {
        if (arr[i] > 0) {
            count++;
        }
    }

    return count;
}

let resultado2 = cuantosPositivos(array2);
console.log(resultado2)