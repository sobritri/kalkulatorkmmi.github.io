const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')

//ini mencetak ke hasil screen kalkulator
const updateScreen = (numbers) => {
    calculatorScreen.value = numbers;
}


let prevNumber =''
let calculationOperator =''
let currentNumber ='0'

inputNumber = (numbers) => {
      // kondisi jika di screen bernilai 0 dia angka tidak akan nambah
    if (currentNumber == '0') {
        currentNumber = numbers
        // kondisi membuat angka menambah
    } else {
        currentNumber += numbers
    }
}


// masukan nomor screen
numbers.forEach((numbers) => {
    numbers.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


//ini local oprator
const operators = document.querySelectorAll(".operator")
const inputOperator =(operators) => {
    prevNumber = currentNumber
    calculationOperator = operators
    currentNumber=''
}
//ini input operator ke value
operators.forEach((operators) => {
    operators.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    })
})


const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        //ini untuk operator tambah
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break;
            //ini untuk operator kurang
            case "-":
                result = prevNumber - currentNumber
                break;
                //ini untuk operator kali
                case "*":
                    result = prevNumber * currentNumber
                    break;
                    //ini untuk operator bagi
                    case "/":
                        result = prevNumber / currentNumber
                        break;
                        //ini untuk operator persen
                        case"%":
                        result = prevNumber / 100
                    }
                    currentNumber = result;
                    calculationOperator =''
                }
                
                
  //ini tombol hasil
const equalSign =document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


//ini local hapus
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
//ini untuk tombol hapus
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})


//ini local tanda koma
inputDecimal = (dot) => {
    currentNumber += dot
}
//cetak tanda koma
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
});


