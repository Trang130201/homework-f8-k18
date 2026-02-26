// Exercise 2: Add items

const btnItems = document.querySelector('#add_items')
const addItems = document.querySelector('#add')
const ulE = document.createElement('ul')
let count = 0 // create a variable to count the number of items in the list
    
btnItems.addEventListener('click', () => {
    const liE = document.createElement('li')
    count = count + 1 
    liE.textContent = `Item ${count}`
    ulE.append(liE)
})
addItems.append(ulE)