let number = 20;

function newArr(number) {
    let arr =[];

    for(let i = 0; i < number; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}

let result = newArr(number);
document.write(result)