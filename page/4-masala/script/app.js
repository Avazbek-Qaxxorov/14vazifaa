let arr = +prompt("Arrayning uzunligini kiriting: ");

let num = [];

for(let i = 0; i < arr; i++) {
    let number = +prompt("Arraydagi sonlarni kiriting: ");
    num.push(parseInt(number));
}

document.write("Siz kiritgan sonlar", ...num);