// Task 1
function task_1 (hamburger = 5, fries = 7, people = 3) {
    if (hamburger >= people && fries >= people) {
        console.log("ми поїли");
    } else {
        console.log("ми йдемо в інше кафе")
    }
}

task_1()



// Task 2 
function task_2 (price = 200) {
    if (price >=1000 && price <=1900) {
        console.log ('значення ціни товару знаходиться між 1000 та 1900')
    } else {
        console.log('значення ціни товару НЕ знаходиться між 1000 та 1900')
    }
}

task_2 ()


// Task 3
function task_3 (price = 1500) {
    if (price <=1000 || price >=1900) {
        console.log ('значення ціни товару НЕ знаходиться між 1000 та 1900')
    } else {
        console.log('значення ціни товару знаходиться між 1000 та 1900')
    }
}

task_3 ()

// Task 3.1
function task_31 (price = 1200) {
    if (!(price >= 1000 && price <= 1900)) {
        console.log("Ціна товару не знаходиться в діапазоні від 1000 до 1900");
    } else {
        console.log("Ціна товару знаходиться між 1000 та 1900");
    }
}

task_31 ()


// Task 4
function task_4 (seasonNumber = 4) {
    if (seasonNumber ===1) {
        console.log ('зима');
    } else if (seasonNumber ===2) {
        console.log ('весна');
    } else if (seasonNumber ===3) {
        console.log ('літо');
    } else if (seasonNumber ===4) {
        console.log ('осінь');
    } else {
        console.log ('невідомий номер пори року');
    }
}

task_4 ()


// Task 5
function task_5 (a = 7, b = 15, c = 4) {
    if (a > b) {
        if (a < c) {
            console.log("Середнє число: " + a);
        } else if (b > c) {
            console.log("Середнє число: " + b);
        } else {
            console.log("Середнє число: " + c);
        }
    } else {
        if (a > c) {
            console.log("Середнє число: " + a);
        } else if (b < c) {
            console.log("Середнє число: " + b);
        } else {
            console.log("Середнє число: " + c);
        }
    }
}

task_5()

// Task 6
function task_6 (dayNumber = 8) {
switch(dayNumber) {
    case 1:
        console.log('Понеділок');
        break;

    case 2:
        console.log('Вівторок');
        break;

    case 3:
        console.log('Середа');
        break;

    case 4:
        console.log('Четвер');
        break;

    case 5:
        console.log('Пятниця');
        break;

    case 6:
        console.log('Субота');
        break;

    case 7:
        console.log('Неділя');
        break;

    default:
        console.log('Значення невідоме');
        break;  
}
}

task_6()

// Task 7
function task_7 (a = 8, b = 78, operation = "-") {
switch(operation) {
    case "+":
        console.log(a+b);
        break;

    case "-":
        console.log(a-b);
        break;

    case "*":
        console.log(a*b);
        break;

    case "/":
        if (b !== 0) {
        console.log(a/b);
        } else {
            console.log('ділити на нуль неможна')
        }
        break;

    default:
        console.log('Значення невідоме');
        break;  
}
}

task_7 ()

// Task 8
function task_8 (myArray =[]) {
for (let i=1; i <=5; i++) {
    myArray.push(i);
}

console.log(myArray)
}

task_8 ()

// Task 9
function task_9 (myArray =[]) {
for (let i=2; i <=9; i+=2) {
    myArray.push(i);
}
console.log(myArray)
}

task_9 ()


function task_91 (myArray =[]) {
for (let i=1; i <=9; i+=2) {
    myArray.push(i);
}

console.log(myArray)
}

task_91 ()

// Task 10
function task_10 (myArr = [2, 3, 4, 5, 6], total = 0) {
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);
}

task_10 ()

// Task 11
function task_11 (arr = [[1, 2], [3, 4], [5, 6]]) {
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
}

task_11()


// Task 12
function task_12 (arr = [[1, 2], [3, 4], [5, 6, 7]], product = 1 )  {
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
    }
}

console.log(product);
}

task_12()

// Task 13
function removeVowels(word) {
    return word.replace(/[aeiouAEIOU]/g, '');
}

function task_13 (inputWord = "regular expression", result = removeVowels(inputWord)) {
    console.log(result); 
}

task_13()

// Task 14
function convertToKilometers(meters) {
    let kilometers = meters / 1000; 

    function task_14 (meters, kilometers) {
    if (kilometers === 1) {
        console.log(meters + " м. це " + kilometers + " км");
    } else {
        console.log(meters + " м. це " + kilometers.toFixed(3) + " км");
    }
}
console.log(task_14(meters, kilometers))
}

convertToKilometers(1200); 
convertToKilometers(54); 
convertToKilometers(126); 
