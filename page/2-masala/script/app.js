let arr = [2,6,5,"qayerliksiz",3,4,1,9];

function number(str) {
    let resString = [];

    for (let i = 0; i < str.length; i++) {
        if (resString[i] === 'string'){
            resString.push(str[i])
        }
    }
    return resString
}
let result = number(arr);
document.write(result)