let arr = [1,3,7,2,9];

let arr2 = [2,4,5,6,8];

function sum(arr, arr2) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr2.length; j++) {

            if(a[i] === b[j]){
                res.push(a[i] + b[j]);
            }
        }
    }
    return res;
}

let result = sum(arr, arr2);

document.write(result)