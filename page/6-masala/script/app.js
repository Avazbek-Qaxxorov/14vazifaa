// let num = +prompt("Istalgan son kiriting: ");

// function number(num) {
//     let res = +prompt("Kiritgan sonlaringiz ichidan qaysidir birini chaqirishni hohlaysiz: ");

//     for(let i = 0; i < num; i++) {

//         if(i % 2  == 0) {
//              if (res === "juft")
//             console.log(i);
//         }
//         if (i % 2  !== 0) {
//             if (res === "toq")
//             console.log(i);
//         }
//     }
// }
// number(num)

let num = [2,4,3,5,7,1,8];
let info = alert(num);
let res = prompt("Enter couple or odd: ").toLowerCase();
function coupleOdd(a) {
     let even = [];
     let odd = [];
     for(let i = 0; i < num.length ; i++) {
          if(num[i] % 2 === 0) even.push(num[i]);
          if(num[i] % 2 !== 0) odd.push(num[i]);
     }a
     if(res == "couple") return even;
     if(res == "odd") return odd;
}
let result = coupleOdd(a);
document.write(result);
