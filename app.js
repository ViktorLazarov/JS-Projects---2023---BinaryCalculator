function binaryCalculator(input) {
    let number = input;
    let bit = 0;
    let resultArr = [];
    if (number === '0' ){
        return '0';
    }
    
    while (number > 0) {
        bit = number % 2;
        number = Math.floor(number / 2);
        resultArr.unshift(bit);
    }
    return resultArr.join('');
}


const inputBox = document.getElementById('input-box');
const resultH2 = document.getElementById('your-number');

function convert() {
    
    if (checkInputRadioButtons() === "" && checkOutputRadioButtons() === "") {
        alert("Please select an input and output option.");
    } else {
        if (checkInputRadioButtons() === checkOutputRadioButtons()) {
            alert('You have to select different options for input and output!')
        } else {
            // alert("You selected: " + checkInputRadioButtons() + " and " + checkOutputRadioButtons());
            if(checkInputRadioButtons() === 'decimal' && checkOutputRadioButtons() === 'binary') {
                resultH2.innerHTML = binaryCalculator(inputBox.value) ;
            } else if (checkInputRadioButtons() === 'decimal' && checkOutputRadioButtons() === 'hexa') {
                resultH2.innerHTML = parseInt(inputBox.value).toString(16).toUpperCase();
            } else if (checkInputRadioButtons() === 'binary' && checkOutputRadioButtons() === 'decimal') {
                if (isNaN(parseInt(inputBox.value, 2))){
                    alert("Please enter a valid binary number!")
                } else {
                    resultH2.innerHTML = parseInt(inputBox.value, 2);
                }
            }else if (checkInputRadioButtons() === 'binary' && checkOutputRadioButtons() === 'hexa') {
                if (isNaN(parseInt(inputBox.value, 2))){
                    alert("Please enter a valid binary number!")
                } else {
                    resultH2.innerHTML = parseInt(inputBox.value, 2).toString(16).toUpperCase();
                }
            }else if (checkInputRadioButtons() === 'hexa' && checkOutputRadioButtons() === 'decimal'){
                let hexRegex = /^[0-9A-Fa-f]+$/;

                if (hexRegex.test(inputBox.value)) {
                    resultH2.innerHTML = parseInt(inputBox.value, 16);
                }else {
                    alert("Please enter a valid HEX number!")
                }
            } else if (checkInputRadioButtons() === 'hexa' && checkOutputRadioButtons() === 'binary'){
                let hexRegex = /^[0-9A-Fa-f]+$/;

                if (hexRegex.test(inputBox.value)) {
                    resultH2.innerHTML = binaryCalculator(parseInt(inputBox.value, 16));
                }else {
                    alert("Please enter a valid HEX number!")
                }
            }

        }
    }
}

function checkInputRadioButtons() {
    let inputRadioButtons = document.getElementsByName('input-number');
    let selectedInputRadioButton = '';

    for (let i = 0; i < inputRadioButtons.length; i++) {
        if (inputRadioButtons[i].checked) {
            selectedInputRadioButton = inputRadioButtons[i].value;
            break;
        }

    }

    return selectedInputRadioButton;

}

function checkOutputRadioButtons() {
    let outputRadioButtons = document.getElementsByName('output-number');
    let selectedOutputRadioButton = '';

    for (let i = 0; i < outputRadioButtons.length; i++) {
        if (outputRadioButtons[i].checked) {
            selectedOutputRadioButton = outputRadioButtons[i].value;
            break;
        }

    }

    return selectedOutputRadioButton;

}



