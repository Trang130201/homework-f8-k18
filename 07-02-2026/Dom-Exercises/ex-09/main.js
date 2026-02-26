// Exercise 9: Todo List 2
// ===== SELECT DOM ELEMENTS =====
const inputSearchE = document.querySelector('#searchStr')
const inputTodoListE = document.querySelector('#todo')
const btnTodoListE = document.querySelector('#addTodo')
const ulTodoE = document.createElement('ul')
const divE = document.querySelector('#todo-list')

// ===== ADD NEW TODO =====
btnTodoListE.addEventListener('click', ()=>{   
    if (inputTodoListE.value === "") return

    const liTodoE = document.createElement('li')  
    const btnDoneE = document.createElement('button')     
    const btnDeleteE = document.createElement('button') 
    
    // Setting Done button 
    btnDoneE.textContent = "Done"   
    Object.assign(btnDoneE.style, {
        backgroundColor: "yellow",
        marginLeft: "10px"
    })  

    // Setting Delete button
    btnDeleteE.textContent = "Delete"  
    Object.assign(btnDeleteE.style, {
        backgroundColor: "red",
        marginLeft: "10px"
    })  

    // Insert todo text inside <li>
    liTodoE.innerHTML = `
        <span style="width: 200px; display: inline-block">
            ${inputTodoListE.value}
        </span>`

    liTodoE.style.marginBottom = "8px"

    inputTodoListE.value = ""  

    ulTodoE.append(liTodoE)   
    
    // Click event change color of Done button
    btnDoneE.addEventListener('click', () => {
        if(btnDoneE.style.backgroundColor === "yellow") {
            btnDoneE.style.backgroundColor = "green"
        } else {
            btnDoneE.style.backgroundColor = "yellow"
        }                   
    })

    // Click event to delete todo of Delete button
    btnDeleteE.addEventListener('click', ()=> {                        
        liTodoE.style.display = 'none'
    })
    liTodoE.append(btnDoneE)
    liTodoE.append(btnDeleteE)                                     
})

// Get all <li> elements inside <ul> to use in search input and checkbox event
const listTodoE = ulTodoE.getElementsByTagName('li')


inputSearchE.addEventListener('input', (e) =>{
    for (const li of listTodoE){
        if (li.textContent.includes(e.target.value)) {
            li.style.display = "block"
        } else {
            li.style.display = "none"
        }
    }
})


const checkboxE = document.querySelector('#completedTodo')

checkboxE.addEventListener('change', () => {

    for (const li of listTodoE){
        const btnCheck = li.querySelector('button')
        if (checkboxE.checked){
            if(btnCheck.style.backgroundColor === 'green'){
                li.style.display = 'block'                           
            }
            else {
                li.style.display = 'none'       
            }
            
        } else {
            li.style.display = ""
        }
    }
})
                
divE.append(ulTodoE)       
