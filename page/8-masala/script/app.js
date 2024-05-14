function theLastValue(arr) {
    let firstValue = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] !== firstValue) {
            document.write("Siz kiritgan qiymatlardan bir xillarini faqat bittasini chiqardik:");
        }
    }
    document.write("Siz kiritgan qiymatlarni hammasi biz xil");
}

let result = theLastValue(arr);

document.write(result)