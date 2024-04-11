let result = document.querySelector('.value')

let numbers = document.querySelectorAll('.num')

let equalBtn = document.querySelector('.equal')

let clearBtn = document.querySelector('.clear')

//------------------

function updateDisplay(value) {
    result.value += value;    
}
// с этой функцией мы выводим цыфры на наш экран

//------------------
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function numberClick(e) {
        let key = event.target.value;
        updateDisplay(key)
    })    
}
// эта функция для калькуятрона все вычисления происходят здесь

//-------------------
clearBtn.addEventListener('click', function () {
    result.value = ''
})
// эа кнопкадля удаления цыфр с экрана

//------------------
equalBtn.addEventListener('click', function () {
    result.value = eval(result.value)
})
// эта кнопка для равно

//-------------------