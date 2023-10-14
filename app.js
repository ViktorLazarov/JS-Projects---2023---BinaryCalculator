function binaryCalculator(input) {
    let number = input;
    let bit = 0;
    let resultArr = [];

    while (number > 0) {
        bit = number % 2;
        number = Math.floor(number/2);
        resultArr.unshift(bit);
    }
    return resultArr.join('');
}

const inputBox = document.getElementById('input-box');
const resultH2 = document.getElementById('your-number');

function convert() {
   if (isNaN(inputBox.value) || inputBox.value === '') {
       alert("Please enter a decimal number!");
    }else {
       resultH2.innerHTML = binaryCalculator(inputBox.value) ;
   }
}


