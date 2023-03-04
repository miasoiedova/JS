/*Ділення, множення і т.п
let firstNumber;
let secondNumber;
firstNumber =prompt("Enter first number");
secondNumber = prompt("Enter second number");
const additionResult = Number(firstNumber)+Number(secondNumber);
const subtractionResult = Number(firstNumber)-Number(secondNumber);
const multiplicationResult = Number(firstNumber)*Number(secondNumber);
const divisionResult = Number(firstNumber)/Number(secondNumber);
if (firstNumber == '' || secondNumber == '') {
    alert (`Error`)
} else {
    alert (`The result of addition ${additionResult}`);
    if (Number(secondNumber) > Number(firstNumber)) {
        confirm (`Are you sure you want to proceed with the operation?`) ? alert(`The result of subtraction ${subtractionResult}`) : null ;
    } else {
        alert(`The result of subtraction ${subtractionResult}`)
    }
    alert(`The result of multiplication ${multiplicationResult}`);
    if (secondNumber == 0) {
        alert (`Division by zero is impossible`)
            } else {
        alert (`The result of division ${divisionResult}`)
            }
}

const arr = [
    23048,
    37362,
    4972,
    85792,
    94614,
    37244,
    3725,
    3947652,
    38472,
    123
];

Сума елементів масиву
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){
    sum = sum + arr[i]
    }
};

Найбільше та найменше значення
let max = arr[0];
let min = arr[0]; 

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        if (max < arr[i]) {
            max = arr [i];
        }
        if (min > arr[i]) {
            min = arr [i];
        }
    }
}

Ялиночка
let row = '#';
for (let i = 1; i <= 5; i++) {
    console.log (row);
    row += '#';
}


console.log (sum, max, min);*/


/*Функція ділення,моження і т.п.*/

function sum(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
    }
}

function difference(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a - b;
    }
}

function product(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a * b;
    }
}

function quotient(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a / b;
    }
}

console.log(sum(10,2));
console.log(difference(10,2));
console.log(product(10,2));
console.log(quotient(10,2));

/*Фунція мінмах значення*/

function findMaxNumber (numbers) {
    let maxNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] == 'number') {
            if (numbers[i] > maxNumber){
                maxNumber = numbers [i];
            }
        }
        };
    return maxNumber;
}

function findMinNumber (numbers) {
    let minNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] == 'number') {
            if (numbers[i] < minNumber){
                minNumber = numbers [i];
            }
        }
        };
    return minNumber;
}

const numbers = [1, 4, 28, 472, 8652, 3, 84, 76, 2963, 9];

const maxNumber = findMaxNumber (numbers);
const minNumber = findMinNumber (numbers);

console.log(maxNumber, minNumber);
