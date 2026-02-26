// Exercise 3: Print what you type

const inputE = document.querySelector('#add_text')
const btnAdd = document.querySelector('#add')
const resultE = document.querySelector('#result')

btnAdd.addEventListener('click', ()=> {
    const paraE = document.createElement('p')
    paraE.textContent = inputE.value
    resultE.append(paraE)
    inputE.value = ""
})   