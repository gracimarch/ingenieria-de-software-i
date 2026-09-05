let nombres = [{
    id: 1,
    name: "Nicolas",
},  {
    id: 2,
    name: "Felipe",
},{
    id: 3,
    name: "Ramoncito",
}];

function toPairs(arr) {
    let pares = []
    for (i in arr) {
        pares[i] = [arr[i].id, arr[i]];
    }

    return pares;
}

let res = toPairs(nombres);
console.log(res);