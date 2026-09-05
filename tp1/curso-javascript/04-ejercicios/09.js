let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}],
]

function toCollection(arr) {
    let collection = [];
    for (i in arr) {
        collection[i] = arr[i][1];
        collection[i].id = arr[i][0];
    }

    return collection;
}

let pares = toCollection(pairs);
console.log(pares);