let num = +prompt("Istalgan son kiriting: ");

function number(num) {

    let result = 0;
    for (let i = 0; i < num; i++) {

        result += i
    }
    return result
}

let res = number(num)

document.write(res)