// Exercise 4: Todo mini
const inputTodoE = document.querySelector('#add-todo')
const btnAddTodo = document.querySelector('#add')
const ulTodoE = document.createElement('ul')
const resultTodoE = document.querySelector('#result')


btnAddTodo.addEventListener('click', () => {
    if (inputTodoE.value === "") return
    const liE = document.createElement('li')
    liE.textContent = inputTodoE.value
    ulTodoE.append(liE)
    inputTodoE.value = ""
})
resultTodoE.append(ulTodoE)